import feedPlugin from './feedPlugin.js'
import shortlinks from './shortlinks.js'
import sass from './sass.js'
import uglifyjs from './uglifyjs.js'
import { webmentionsPlugin } from './webmentions.js'

const plugins = [
	feedPlugin,
	shortlinks,
	sass,
	uglifyjs,
	webmentionsPlugin,
]

export default (config) => {
	for (const plugin of plugins) {
		config.addPlugin(plugin)
	}
}
