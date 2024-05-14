const fs = require('fs')
// Run locally with:
// `WEBMENTION_IO_TOKEN=1234 BASE_URL=https://domain.tld SHORT_URL=http://short.tld node fetch_webmentions.js`
const {
	BASE_URL,
	SHORT_URL,
	WEBMENTION_IO_TOKEN
} = process.env
const WM_DIR = process.env.WEBMENTIONS_DIR || './wm'
const WEBMENTIONS_CACHE = process.env.WEBMENTIONS_CACHE || `${WM_DIR}/cache`

if (!BASE_URL && !SHORT_URL) throw new Error('BASE_URL and SHORT_URL are undefined. At least one is required.')
if (!WEBMENTION_IO_TOKEN) throw new Error('WEBMENTION_IO_TOKEN is undefined')

const cacheRead = () => {
	if (!fs.existsSync(WEBMENTIONS_CACHE)) return
	return fs.readFileSync(WEBMENTIONS_CACHE, 'utf-8')
}
const cacheWrite = data => fs.writeFileSync(WEBMENTIONS_CACHE, data, null, 2)

const fetchWebmentions = async () => {
	const res = await fetch(`https://webmention.io/api/mentions.jf2?token=${WEBMENTION_IO_TOKEN}&per-page=10`)
	const json = await res.json()
	return (json && json.children) || []
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
	if (BASE_URL) slug = cleanTarget(slug, BASE_URL)
	if (SHORT_URL) slug = cleanTarget(slug, SHORT_URL)
	if (slug == target) throw new Error(`${slug} does not seem to be a valid target`)
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

	const latest = cacheRead()
	let newest
	webmentions.every(wm => {
		if (!newest) newest = wm['wm-id']
		if (latest && latest == wm['wm-id']) {
			console.log(`Found last processed webmention [${latest}]. Skipping the rest.`)
			return false
		}
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
		return true
	})

	cacheWrite(newest.toString())
}
start()
