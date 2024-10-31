import feedPlugin from './feedPlugin.js'
import shortlinks from './shortlinks.js'
import sass from './sass.js'
import uglifyjs from './uglifyjs.js'

const plugins = [
	feedPlugin,
	shortlinks,
	sass,
	uglifyjs,
]

export default (config) => {
	for (const plugin of plugins) {
		config.addPlugin(plugin)
	}
}
