import 'dotenv/config'
import markdownIt from 'markdown-it'

import collections from './11ty/collections.js'
import filters from './11ty/filters/index.js'
import globalData from './11ty/globalData.js'
import shortcodes from './11ty/shortcodes.js'
import plugins from './11ty/plugins/index.js'

export default (config) => {
	// Refresh browser on changes to {css,js}
	config.setServerOptions({ watch: './_site/build/**/*' })

	config.addPassthroughCopy({ 'static': '/' })
	config.addPassthroughCopy('uploads')

	const md = markdownIt({ html: true, linkify: true })
	const imgRenderer = md.renderer.rules.image
	md.renderer.rules.image = (tokens, idx, options, env, self) => {
		tokens[idx].attrSet('loading', 'lazy')
		return `<p>${imgRenderer(tokens, idx, options, env, self)}</p>`
	}
	config.setLibrary('md', md)

	config.addPlugin(collections)
	config.addPlugin(filters)
	config.addPlugin(globalData)
	config.addPlugin(plugins)
	config.addPlugin(shortcodes)

	return {
		markdownTemplateEngine: 'njk',
		dir: {
			input: 'src'
		}
	}
}
