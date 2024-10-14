import date from './date.js'
import feed from './feed.js'
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
	...feed,
	...nunjucks,
	...posts,
}

export default (config) => {
	for (const [name, filter] of Object.entries(filters)) {
		config.addFilter(name, filter)
	}
}
