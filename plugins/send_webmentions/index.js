import fs from 'node:fs'

const LATEST_CHECKED = process.env.LATEST_CHECKED || '.latest.cache'
const JSONFEED_FILENAME = process.env.JSONFEED_FILENAME || 'latest.json'

const fileRead = (fn, parse) => {
	if (fs.existsSync(fn)) {
		const file = fs.readFileSync(fn, 'utf-8')
		return parse ? JSON.parse(file) : file
	}
}
const fileWrite = (fn, data) => fs.writeFileSync(fn, data, null, 2)

// To avoid parsing xml, this feed should be a JSON Feed
const fetchFeed = async (url) => {
	const res = await fetch(url)
	if (!res.ok) throw new Error(`Could not find feed: ${url}`)
	return await res.json()
}

const sources = []

export async function onPostBuild({ constants, utils: { cache } }) {
	let latest
	if (await cache.restore(LATEST_CHECKED)) {
		latest = fileRead(LATEST_CHECKED)
		console.log(`Found cache. Latest checked item: ${latest}`)
	}
	if (!latest) {
		console.log(`Reading active feed: ${process.env.URL}/${JSONFEED_FILENAME}`)
		const currentFeed = await fetchFeed(`${process.env.URL}/${JSONFEED_FILENAME}`)
		if (currentFeed && currentFeed.items) {
			latest = currentFeed.items[0].id
			console.log(`Latest item in feed: ${latest}`)
		}
	}

	const newestFeed = fileRead(`./${constants.PUBLISH_DIR}/${JSONFEED_FILENAME}`, true)
	if (!newestFeed || !newestFeed.items) throw new Error('Could not read newest feed. Exiting!')

	for (const item of newestFeed.items) {
		if (item.id && item.id === latest) break
		console.log('Add:', item.id)
		sources.push(item.id)
	}

	if (sources.length) {
		console.log(`Set cache to ${sources[0]}`)
		fileWrite(LATEST_CHECKED, sources[0])
		await cache.save(LATEST_CHECKED)
	}
}

export async function onSuccess({ constants }) {
	console.log(`Found ${sources.length} sources`)
	const method = constants.IS_LOCAL ? 'GET' : 'POST'
	for (const source of sources) {
		console.log(`[${method}] ${source}`)
		const res = await fetch(`https://webmention.netlify.app/check?url=${source}`, { method })
		const json = await res.json()
		if (json && json.urls) {
			for (const wm of json.urls) {
				console.log(` └─ [SENT] ${wm.target}`)
			}
		}
	}
}
