const pluginRss = require('@11ty/eleventy-plugin-rss')
const markdownIt = require('markdown-it')
const shortlinks = require('eleventy-plugin-shortlinks')
const slugify = require('slugify')
// for webmentions
const fs = require('fs')
const path = require('path')

require('dotenv').config()

module.exports = function (eleventyConfig) {
	const { DateTime } = eleventyConfig // import luxon from eleventy

	eleventyConfig.addPlugin(pluginRss)
	eleventyConfig.addPlugin(shortlinks)

	eleventyConfig.setDataDeepMerge(true)
	eleventyConfig.addGlobalData('today', () => new Date())

	const md = markdownIt({ html: true, linkify: true })
	const imgRenderer = md.renderer.rules.image
	md.renderer.rules.image = (tokens, idx, options, env, self) => {
		tokens[idx].attrSet('loading', 'lazy')
		return `<p>${imgRenderer(tokens, idx, options, env, self)}</p>`
	}
	eleventyConfig.setLibrary('md', md)

	eleventyConfig.addPassthroughCopy({ 'static': '/' })
	eleventyConfig.addPassthroughCopy('uploads')

	eleventyConfig.addNunjucksFilter('getVariable', function (string) {
		// Need this to access global variables with dashes. (`like-of`)
		// https://github.com/11ty/eleventy/issues/567#issuecomment-575828788
		// https://www.11ty.dev/docs/languages/javascript/#warning-about-arrow-functions
		return this.getVariables()[string]
	})

	// nunjucks slice doesnt work like js slice
	// `limit` filter returns the first `n` elements of array
	eleventyConfig.addFilter('limit', (arr, n) => arr.slice(0, n))

	// Filter to treat frontmatter item that could be an array as such
	// https://github.com/11ty/eleventy/issues/1611
	eleventyConfig.addFilter('toArray', value => !value ? [] : (Array.isArray(value) ? value : [value]))

	// Removes `script` and `style` tags for feeds and og:description string
	eleventyConfig.addFilter('stripOthers', text => text.replace(/<style[^>]*>[\s\S]*?<\/style>|<script[^>]*>[\s\S]*?<\/script>/gi, ''))

	// Support emojis in tags and URLs
	eleventyConfig.addFilter('slug', str => !str ? null : (/\p{Emoji}/u.test(str) ? str : slugify(str, { lower: true })))

	const getTZ = date => {
		// https://www.11ty.dev/docs/dates/#dates-off-by-one-day
		// If `date` is provided in YYYY-MM-DD, assume the date is in UTC so `dateString` can work correctly
		if (date instanceof Date && date.toISOString().indexOf('T00:00:00.000Z') > 0) {
			return { zone: 'utc' }
		}
	}
	// `updated` is not converted to Date so this catches those cases and converts it
	const fromJSDate = date => DateTime.fromJSDate(date instanceof Date ? date : new Date(date), getTZ(date))
	const dateToFormat = (dateObj, format = 'x') => fromJSDate(dateObj).toFormat(format)
	eleventyConfig.addFilter('dateISO', dateObj => fromJSDate(dateObj).toISO())
	eleventyConfig.addFilter('dateString', dateObj => dateToFormat(dateObj, 'LLL dd, yyyy'))
	eleventyConfig.addFilter('dateToFormat', dateToFormat)

	eleventyConfig.addFilter('byYear', (items, year) => items.filter(item => item.date && item.date.getFullYear() == year))
	eleventyConfig.addFilter('byRating', (items, rating) => items.filter(item => item.data && item.data.rating && parseFloat(item.data.rating) === rating))
	eleventyConfig.addFilter('byDataProperty', (items, prop, value) => items.filter(item => item.data[prop] && item.data[prop] == value))

	eleventyConfig.addFilter('toStars', (n = 0, max = 5) => '★'.repeat(Math.min(parseInt(n), max)) + (n - parseInt(n) > 0 ? '½' : ''))

	eleventyConfig.addFilter('alphabetSort', collection => {
		const alphabet = [ '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?' ]
		const sorted = alphabet.reduce((s, letter) => ({ ...s, [letter]: [] }), {})
		for (const tag in collection) {
			let key = (tag[0] || '?').toUpperCase()
			key = alphabet.includes(key) ? key : (!isNaN(key) ? '#' : '?')
			sorted[key].push(tag)
		}
		return sorted
	})

	eleventyConfig.addCollection('tagList', collection => {
		let tags = {}
		collection.getAllSorted().forEach(item => {
			(item.data.tags || []).forEach(tag => {
				tag = tag.toLowerCase()
				tags[tag] = tags[tag] || []
				tags[tag].push(item)
			})
		})
		return tags
	})

	const isPublicPost = p => !['unlisted', 'private'].includes(p.data.visibility)

	const allowedContent = ['articles', 'bookmarks', 'likes', 'notes', 'read', 'rsvp', 'watched']
	allowedContent.forEach(type => {
		eleventyConfig.addCollection(type, collection =>
			collection.getFilteredByGlob(`src/content/${type}/*.md`).filter(isPublicPost))
	})

	eleventyConfig.addCollection('replies', collection =>
		collection.getFilteredByGlob('src/content/notes/*.md').filter(item => 'in-reply-to' in item.data))

	eleventyConfig.addCollection('photos', collection =>
		collection.getFilteredByGlob('src/content/notes/*.md').filter(item => 'photo' in item.data).filter(isPublicPost))

	eleventyConfig.addCollection('feed', collection =>
		collection.getFilteredByGlob(['src/content/articles/*.md', 'src/content/notes/*.md']))

	eleventyConfig.addCollection('feedPublic', collection =>
		collection.getFilteredByGlob(['src/content/articles/*.md', 'src/content/notes/*.md']).filter(isPublicPost))

	eleventyConfig.addCollection('public', collection => collection.getAllSorted().filter(isPublicPost))

	Array.from(['started', 'want']).forEach(status => {
		eleventyConfig.addCollection(`read:${status}`, collection => {
			const books = collection.getFilteredByGlob('src/content/read/*.md')
			const group = books.filter(b => b.data.progress == status)
			return group.filter(g =>
				books.filter(b => b.data['read-of'].properties.uid[0] == g.data['read-of'].properties.uid[0]).length == 1)
			})
	})

	eleventyConfig.addCollection('latest', collection =>
		collection.getAll().sort((a, b) =>
			dateToFormat(b.data.updated || b.date) - dateToFormat(a.data.updated || a.date)).slice(0, 20))

	eleventyConfig.addShortcode('prefix', url => {
		if (!url) return ''
		// blog post, article (structured, with headings), essay
		if (url.match(/^\/articles\//g)) return 'b'
		// favorited - primarily just a URL, often to someone else's content
		if (url.match(/^\/(bookmarks|likes)\//g)) return 'f'
		// review, recommendation, rating
		if (url.match(/^\/(read|watched)\//g)) return 'r'
		// text, (plain) text, tweet, thought, note, unstructured, untitled
		if (url.match(/^\/(notes|rsvp)\//g)) return 't'
		return ''
	})

	// webmentions
	eleventyConfig.addGlobalData('webmentions', () => {
		const filePath = process.env.WEBMENTIONS_DIR || './wm'
		const webmentions = {}
		fs.readdir(filePath, (err, files) => {
			if (err) return console.error('ERROR:', err.code || 'unexpected error')
			files.forEach(async file => {
				if (path.extname(file) === '.json') {
					webmentions[path.basename(file, '.json')] = JSON.parse(fs.readFileSync(`${filePath}/${file}`))
				}
			})
		})
		return webmentions
	})

	// Uses same slug function that is used in `fetch_webmentions.js`
	eleventyConfig.addFilter('webmentionSlug', url => !url ? null : url.replace(/^\/*|\/*$/g, '').replace('/', '--'))

	return {
		passthroughFileCopy: true,
		markdownTemplateEngine: 'njk',
		templateFormats: ['html', 'njk', 'md'],
		dir: {
			input: 'src',
			data: '_data',
			output: '_site',
			includes: '_includes'
		}
	}
}
