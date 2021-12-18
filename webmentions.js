
const fs = require('fs')
const got = require('got')
const Webmention = require('@remy/webmention')
const mf = require('microformat-node')

require('dotenv').config()

const {
	URL, // baseURL to resolve relative URLs for MF parser
	FEED_URL, // URL of feed page. Otherwise will try to default or discover from MF
	SAVED_FEED = './feed.html', // Filename of previously saved feed
} = process.env;
const DEBUG = process.env.DEBUG === 'true'
const wm = new Webmention({ limit: 1, send: !DEBUG })

const sendWebmention = async (url) => {
	await new Promise((resolve, reject) => {
		wm.on('error', e => { reject(e) })
		wm.on('sent', res => { console.log(`[SENT] ${res.source} to ${res.endpoint.url}`) })
		wm.on('end', () => { resolve() })
		wm.on('log', e => console.log(e))

		wm.fetch(url)
	})
}

const parse = {
	getFeedURL: parsed => {
		if (parsed && parsed.rels && parsed.rels.feed) {
			return Array.isArray(parsed.rels.feed) ? parsed.rels.feed[0] : parsed.rels.feed
		}
	},
	getFeed: parsed => {
		if (parsed && parsed.items && parsed.items.length &&
			parsed.items[0].children && parsed.items[0].children.length) {
			return parsed.items[0].children
		}
	},
	getItemID: item => {
		if (item && item.properties && item.properties.url) {
			return Array.isArray(item.properties.url) ? item.properties.url[0] : item.properties.url
		}
	}
}

const checkWebmentions = async () => {
	const oldFeed = fs.readFileSync(SAVED_FEED, 'utf-8')
	const mfOld = mf.get({
		html: oldFeed,
		baseUrl: URL
	})

	const newFeed = await got.get(FEED_URL || parse.getFeedURL(mfOld) || `${URL}/feed`).text()
	const mfNew = mf.get({
		html: newFeed,
		baseUrl: URL
	})

	const mfFeedOld = parse.getFeed(mfOld)
	const mfFeedNew = parse.getFeed(mfNew)

	if (mfFeedOld && mfFeedNew) {
		const lastChecked = parse.getItemID(mfFeedOld[0])
		console.log('[INFO] Last checked item:', lastChecked)
		console.log('[INFO] Newest item:', parse.getItemID(mfFeedNew[0]))
		for (let item of mfFeedNew) {
			const currentItemID = parse.getItemID(item)
			if (currentItemID == lastChecked) {
				break
			}
			const shouldWebmention = Object.keys(item.properties)
				.filter(item => [
					'like-of', 'u-like-of',
					'in-reply-to', 'u-in-reply-to',
					'repost-of', 'u-repost-of',
					'bookmark-of', 'u-bookmark-of'
				].includes(item))
			if (shouldWebmention && shouldWebmention.length) {
				console.log('[SEND]', currentItemID)
				try {
					await sendWebmention(currentItemID)
				} catch(err) {
					console.error('[ERROR]', currentItemID, err || 'An error occurred')
				}
			} else {
				console.log('[SKIP]', currentItemID)
			}
		}
	} else {
		console.log('NOTHING TO SEND')
		process.exit(1)
	}
}

checkWebmentions()
