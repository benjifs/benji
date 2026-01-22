// Using `eleventy-fetch` instead of fetch to handle caching while testing locally.
const fetchWMs = async (url) => {
	if (process.env.NETLIFY) {
		const res = await fetch(url)
		if (!res.ok) return null
		return await res.json()
	}
	// This fallback is used from `/plugins/fetch_webmentions.js` since that
	// doesn't run `npm install`.
	const { default: Fetch } = await import('@11ty/eleventy-fetch')
	return await Fetch(url, {
		duration: '1d',
		type: 'json'
	})
}

// Uses same slug function that is used in `backup_webmentions.js`
const webmentionSlug = url => (url || '')
	.replace(/https?:\/\/(?:www\.)?(benji\.dog|bnj\.pw)/, '')
	.replace(/^\/*|\/*$/g, '')
	.replace('/', '--')

export const webmentions = async () => {
	const webmentions = {}
	try {
		const json = await fetchWMs(`https://wm.benji.dog/webmentions?token=${process.env.WM_TOKEN}`)
		for (const [target, value] of Object.entries(json)) {
			const id = webmentionSlug(target) || '--'
			webmentions[id] = webmentions[id] || []
			webmentions[id] = [ ...webmentions[id], ...value ]
		}
	} catch (err) {
		console.error('Could not fetch webmentions:', err.message)
	}
	return webmentions
}

export const webmentionsPlugin = config => {
	config.addFilter('isBridged', url =>
		Array.from(['/@', 'did:plc', 'twitter.com/benjifs', 'ap.brid.gy']).some(i => (url || '').includes(i)))

	config.addFilter('socials', wms => {
		const socials = {}
		const accounts = [ 'corteximplant.com', 'fosstodon.org', 'indieweb.social' ]
		let defaultID
		const missingWMs = {}
		for (const wm of wms) {
			if (/^https:\/\/(ap\.|bsky\.)?brid.gy/.test(wm.source)) {
				let id
				for (const account of accounts) {
					if (wm.source.indexOf(`@benji@${account}`) > 0) {
						const url = wm.source.split(`@benji@${account}/`)[1].split('/')[0]
						id = `https://${account}/@benji/${url}`
						if (!defaultID) defaultID = id
						break
					}
				}
				if (!id && wm.url) {
					if (wm.url.indexOf('https://twitter.com') == 0) {
						id = wm['url'].split('#')[0]
					}
					if (wm.url.indexOf('https://bsky.app') == 0) {
						id = wm['url'].split('#')[0]
					}
				}
				if (!id) { // https://ap.brid.gy/convert/web/...
					missingWMs[wm.type] = (missingWMs[wm.type] || 0) + 1
				}
				if (id) {
					socials[id] = socials[id] || {}
					socials[id][wm.type] = (socials[id][wm.type] || 0) + 1
				}
			}
		}
		// There's probably a better way to do this but that's for later
		if (defaultID && Object.keys(missingWMs).length) {
			for (const [type, value] of Object.entries(missingWMs)) {
				socials[defaultID] = socials[defaultID] || {}
				socials[defaultID][type] = (socials[defaultID][type] || 0) + value
			}
		}
		return socials
	})

	config.addFilter('webmentionSlug', webmentionSlug)

	config.addGlobalData('webmentions', webmentions)
}