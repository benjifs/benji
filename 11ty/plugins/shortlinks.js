import shortlinks from 'eleventy-plugin-shortlinks'

export default (config) => {
	config.addPlugin(shortlinks)

	config.addShortcode('prefix', type => {
		// Using `postType` from corresponding 11tydata.js*
		if (!type) return ''
		// blog post, article (structured, with headings), essay
		if ('article' == type) return 'b'
		// code, sample code, library, open source, code example
		if ('code' == type) return 'c'
		// favorited - primarily just a URL, often to someone else's content
		if (['bookmark', 'like'].includes(type)) return 'f'
		// photo post
		if ('photo' == type) return 'p'
		// review, recommendation, rating
		if (['read', 'watch'].includes(type)) return 'r'
		// text, (plain) text, tweet, thought, note, unstructured, untitled
		return 't'
	})
}
