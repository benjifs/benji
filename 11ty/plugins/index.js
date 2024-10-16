import feedPlugin from './feedPlugin.js'
import shortlinks from './shortlinks.js'

const plugins = [
	feedPlugin,
	shortlinks,
]

export default (config) => {
	for (const plugin of plugins) {
		config.addPlugin(plugin)
	}
}
