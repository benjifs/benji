
const fs = require('fs')
const got = require('got')

require('dotenv').config()

const parse = (json = '') => JSON.parse(json)

const getLatest = feed => {
	if (feed && feed.items && feed.items.length) {
		return feed.items[0]
	}
}

const checkWebmentions = async () => {
	const readFeed = fs.readFileSync('./feed.json')
	const feedOld = parse(readFeed)
	const feedNew = await got.get(`${process.env.URL}/feed.json`).json()

	const latestOld = getLatest(feedOld)
	const latestNew = getLatest(feedNew)

	if (latestNew && latestOld) {
		for (let item of feedNew.items) {
			if (item.id == latestOld.id) { // Stop checking if `id` matches previous latest `id`
				break
			}
			if (!item.title || item.title.indexOf('Replying') < 0) { // Is a reply?
				continue
			}
			const res = await got.post(`https://webmention.app/check/?url=${item.id}`).json()
			if (!res || res.error) {
				console.error({
					'error': item.id,
					'message': res.message || 'An error occurred'
				})
			} else {
				console.log(`Webmention sent for ${item.id}`)
			}
		}
	} else {
		console.log('NOTHING TO SEND')
		process.exit(1)
	}
}

checkWebmentions()
