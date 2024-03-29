
const fs = require('fs')
const https = require('https')

// Run locally with:
// `WEBMENTION_IO_TOKEN=1234 BASE_URL=https://domain.tld SHORT_URL=http://short.tld node fetch_webmentions.js`
const {
	BASE_URL,
	SHORT_URL,
	WEBMENTION_IO_TOKEN
} = process.env
const WM_DIR = process.env.WEBMENTIONS_DIR || './wm'
const WEBMENTIONS_CACHE = process.env.WEBMENTIONS_CACHE || `${WM_DIR}/cache`

if (!BASE_URL && !SHORT_URL) {
	throw new Error('BASE_URL and SHORT_URL are undefined. At least one is required.')
}
if (!WEBMENTION_IO_TOKEN) {
	throw new Error('WEBMENTION_IO_TOKEN is undefined')
}

const Request = {
	send: (url, method = 'GET') =>
		new Promise((resolve, reject) => {
			const req = https.request(url, { method: method }, res => {
				res.setEncoding('utf8')
				let responseBody = ''
				res.on('data', (chunk) => { responseBody += chunk })
				res.on('end', () => { resolve(JSON.parse(responseBody)) })
			})
			req.on('error', err => { reject(err) })
			req.end()
		}),
	get: (url) => Request.send(url)
}

const Cache = {
	read: () => {
		if (fs.existsSync(WEBMENTIONS_CACHE)) {
			return fs.readFileSync(WEBMENTIONS_CACHE, 'utf-8')
		}
	},
	write: (data) => {
		fs.writeFileSync(WEBMENTIONS_CACHE, data, null, 2)
	}
}

const fetchWebmentions = async () => {
	const webmentions = await Request
		.get(`https://webmention.io/api/mentions.jf2?token=${WEBMENTION_IO_TOKEN}&per-page=100`)
	return (webmentions && webmentions.children) || []
}

// Sometimes my targets show up as www.domain.tld, domain.tld, www.short.tld, short.tld.
// This removes all valid urls from the target URL
const cleanTarget = (target, urlString) => {
	const url = new URL(urlString)
	const regex = new RegExp(`https?:\/\/(www.)?${url.hostname.replace('www.', '')}`)
	return target.replace(regex, '')
}

const targetToSlug = target => {
	let slug = target
	if (BASE_URL) {
		slug = cleanTarget(slug, BASE_URL)
	}
	if (SHORT_URL) {
		slug = cleanTarget(slug, SHORT_URL)
	}
	if (slug == target) {
		return console.error(`${slug} does not seem to be a valid target`)
	}
	return slug
		.replace(/^\/*|\/*$/g, '') // Remove leading or trailing slashes
		.replace('/', '--')
}

const start = async () => {
	const webmentions = await fetchWebmentions()
	if (!webmentions || webmentions.length === 0) {
		return console.log('Could not find any webmentions. Exiting')
	}

	if (!fs.existsSync(WM_DIR)) fs.mkdirSync(WM_DIR)

	const latest = Cache.read()
	let newest, done = false
	webmentions.forEach(wm => {
		if (!newest) {
			newest = wm['wm-id']
		}
		if (latest && latest == wm['wm-id']) {
			done = true
			console.log(`Found last processed webmention [${latest}]. Skipping the rest.`)
		}
		if (done) return

		// Process webmention
		const slug = targetToSlug(wm['wm-target'])
		if (slug !== null) {
			const filename = `${WM_DIR}/${slug || 'home'}.json`
			let entries
			if (fs.existsSync(filename)) {
				entries = JSON.parse(fs.readFileSync(filename))
					.filter(m => m['wm-id'] !== wm['wm-id'])
					.concat([wm])
				entries.sort((a, b) => a['wm-id'] - b['wm-id'])
			} else {
				entries = [wm]
			}

			fs.writeFileSync(filename, JSON.stringify(entries, null, 2))
		}
	})

	Cache.write(newest.toString())
}

start()
