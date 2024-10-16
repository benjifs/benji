import date from './date.js'
import nunjucks from './nunjucks.js'
import posts from './posts.js'

const filters = {
	// To show sorted tag pages
	alphabetSort: collection => {
		const alphabet = [ '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?' ]
		const sorted = alphabet.reduce((s, letter) => ({ ...s, [letter]: [] }), {})
		for (const tag in collection) {
			let key = (tag[0] || '?').toUpperCase()
			key = alphabet.includes(key) ? key : (!isNaN(key) ? '#' : '?')
			sorted[key].push(tag)
		}
		return sorted
	},
	...date,
	...nunjucks,
	...posts,
	socials: wms => {
		const socials = {}
		const accounts = [ 'corteximplant.com', 'fosstodon.org', 'indieweb.social' ]
		for (const wm of wms) {
			if (/^https:\/\/(ap\.|bsky\.)?brid.gy/.test(wm['wm-source'])) {
				let id
				for (const account of accounts) {
					if (wm['wm-source'].indexOf(`@benji@${account}`) > 0) {
						const url = wm['wm-source'].split(`@benji@${account}/`)[1].split('/')[0]
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
					socials[id][wm['wm-property']] = (socials[id][wm['wm-property']] || 0) + 1
				}
			}
		}
		return socials
	},
}

export default (config) => {
	for (const [name, filter] of Object.entries(filters)) {
		config.addFilter(name, filter)
	}
}
