import shortlinks from 'eleventy-plugin-shortlinks'

export default (config) => {
	config.addPlugin(shortlinks)

	config.addShortcode('prefix', url => {
		if (!url) return ''
		// blog post, article (structured, with headings), essay
		if (url.match(/^\/articles\//g)) return 'b'
		// favorited - primarily just a URL, often to someone else's content
		if (url.match(/^\/(bookmarks|likes)\//g)) return 'f'
		// review, recommendation, rating
		if (url.match(/^\/(read|watched)\//g)) return 'r'
		// text, (plain) text, tweet, thought, note, unstructured, untitled
		return 't'
	})
}
