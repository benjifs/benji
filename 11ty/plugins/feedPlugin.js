import pluginRss from '@11ty/eleventy-plugin-rss'

export default (config) => {
	config.addPlugin(pluginRss)
}

/*
import { feedPlugin } from '@11ty/eleventy-plugin-rss'

const DEFAULT_FEED = {
	types: [ 'rss' ],
	limit: 20
}
const EXT = { rss: 'xml' }
// The default setup doesn't work for me since I need to customize the titles based on post types.
// Keeping the plugin for the filters it adds
export default (config) => {
	const formatMetadata = (title, type) => ({
		language: 'en',
		title: `${title} (${type})`,
		subtitle: 'Testing 11ty 3.0.',
		base: process.env.BASE_URL,
		author: {
			name: 'benji'
		}
	})
	const feeds = {
		feed: {
			...DEFAULT_FEED,
			types: [ 'atom', 'json', 'rss' ]
		},
		all: {
			...DEFAULT_FEED,
			collection: 'feedAll',
			types: [ 'atom', 'json', 'rss' ]
		},
		latest: {
			...DEFAULT_FEED,
			types: [ 'json' ]
		},
		bookmarks: DEFAULT_FEED,
		photos: DEFAULT_FEED,
		read: DEFAULT_FEED,
		watched: DEFAULT_FEED
	}
	for (const [name, feed] of Object.entries(feeds)) {
		for (const type of feed.types) {
			console.log(`/${name}.${EXT[type] || type}`, feed.collection || name)
			config.addPlugin(feedPlugin, {
				type: type,
				outputPath: `/${name}.${EXT[type] || type}`,
				collection: {
					name: feed.collection || name,
					limit: feed.limit || 20
				},
				metadata: formatMetadata(name, type),
			})
		}
	}
}
*/
