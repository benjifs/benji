
const { DateTime } = require('luxon')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const markdownIt = require('markdown-it')
const shortlinks = require('eleventy-plugin-shortlinks')

require('dotenv').config()

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss)
	eleventyConfig.addPlugin(shortlinks)

	eleventyConfig.setFrontMatterParsingOptions({ excerpt: true, excerpt_separator: '----' })

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

	// Removes script tags in rss content string
	eleventyConfig.addFilter('stripScript', text => text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ''))

	eleventyConfig.addFilter('md', content => markdownIt({ html: true }).render(content) )

	eleventyConfig.addFilter('dateString', dateObj => DateTime.fromJSDate(dateObj).toFormat('LLL dd, yyyy'))

	eleventyConfig.addFilter('dateISO', dateObj => DateTime.fromJSDate(dateObj).toISO())

	eleventyConfig.addFilter('jsonStringify', content => JSON.stringify(content || ''))

	eleventyConfig.addFilter('alphabetSort', collection => {
		const alphabet = [ '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?' ]

		const sorted = alphabet.reduce((res, letter) => {
			res.set(letter, [])
			return res
		}, new Map())

		for (var tag in collection) {
			let key = (tag[0] || '?').toUpperCase()
			key = isNaN(key) ? key : '#'
			sorted.get(key).push(tag)
		}
		return sorted
	})

	eleventyConfig.addCollection('tagList', collection => {
		let tags = {}
		collection.getAll().forEach(item => {
			(item.data.tags || []).forEach(tag => {
				tag = tag.toLowerCase()
				tags[tag] = tags[tag] || []
				tags[tag].push(item)
			})
		})
		return tags
	})

	const allowedContent = ['bookmarks', 'likes', 'notes', 'posts', 'rsvp']
	allowedContent.forEach(type => {
		eleventyConfig.addCollection(type, collection =>
			collection.getFilteredByGlob(`src/${type}/*.md`))
	})

	eleventyConfig.addShortcode('prefix', url => {
		if (url) {
			if (url.match(/^\/(notes|rsvp)\//g)) {
				return 't' // TEXT
			}
			if (url.match(/^\/posts\//g)) {
				return 'p' // POST
			}
			if (url.match(/^\/(bookmarks|likes)\//g)) {
				return 'f' // FAVORITE
			}
		}
		return ''
	})

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
