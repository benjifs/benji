// Using `eleventy-fetch` instead of fetch to handle caching while testing locally.
// For Netlify, it will still function as regular `fetch` as cache is cleared
// between build.
const fetchWMs = async (url) => {
	let json
	try {
		const { default: Fetch } = await import('@11ty/eleventy-fetch')
		json = await Fetch(url, {
			duration: '1d',
			type: 'json'
		})
	} catch (e) {
		// There's probably a better way to do this. This fallback is used from
		// `/plugins/fetch_webmentions.js` since that doesn't run `npm install`.
		console.warn('[INFO] @11ty/eleventy-fetch not found. Using native fetch.')
		const res = await fetch(url)
		if (res && res.status == 200) {
			json = await res.json()
		}
	}
	return json
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
		Array.from(['/@', 'did:plc', 'twitter.com/benjifs']).some(i => (url || '').includes(i)))

	config.addFilter('socials', wms => {
		const socials = {}
		const accounts = [ 'corteximplant.com', 'fosstodon.org', 'indieweb.social' ]
		for (const wm of wms) {
			if (/^https:\/\/(ap\.|bsky\.)?brid.gy/.test(wm.source)) {
				let id
				for (const account of accounts) {
					if (wm.source.indexOf(`@benji@${account}`) > 0) {
						const url = wm.source.split(`@benji@${account}/`)[1].split('/')[0]
						id = `https://${account}/@benji/${url}`
						break
					}
				}
				if (!id && wm['url'].indexOf('https://twitter.com') == 0) {
					id = wm['url'].split('#')[0]
				}
				if (!id && wm['url'].indexOf('https://bsky.app') == 0) {
					id = wm['url'].split('#')[0]
				}
				if (id) {
					socials[id] = socials[id] || {}
					socials[id][wm.type] = (socials[id][wm.type] || 0) + 1
				}
			}
		}
		return socials
	})

	config.addFilter('webmentionSlug', webmentionSlug)

	config.addGlobalData('webmentions', webmentions)
}