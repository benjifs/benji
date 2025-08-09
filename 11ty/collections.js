import { dateToFormat } from './utils.js'

const excludeVisibility = (p, visibility = ['unlisted', 'private']) => !visibility.includes(p.data.visibility)

let feedCollection
const getFeedCollection = collection => {
	if (!feedCollection)
		feedCollection = collection.getFilteredByGlob(['articles', 'notes', 'listen'].map(t => `src/content/${t}/*.md`))
	return feedCollection
}

const collections = {
	tagList: collection => {
		let tags = {}
		collection.getAllSorted().forEach(item => {
			(item.data.tags || []).forEach(tag => {
				(tags[tag.toLowerCase()] ||= []).push(item)
			})
		})
		return tags
	},
	replies: collection => collection.getFilteredByGlob('src/content/notes/*.md').filter(item => 'in-reply-to' in item.data).filter(p => excludeVisibility(p)),
	photos: collection => collection.getFilteredByGlob('src/content/notes/*.md').filter(item => 'photo' in item.data).filter(p => excludeVisibility(p)),
	// feed.{rss, atom, json}
	feed: collection => getFeedCollection(collection).filter(p => excludeVisibility(p, 'unlisted')).reverse(),
	// all.{rss, atom, json}
	feedAll: collection => collection.getAllSorted().filter(p => excludeVisibility(p, 'unlisted')).reverse(),
	// /, /feed, and twtxt
	publicFeed: collection => getFeedCollection(collection).filter(p => excludeVisibility(p)),
	// sitemap.xml and /feed/all
	publicAll: collection => collection.getAllSorted().filter(p => excludeVisibility(p)),
	// latest.json (for `send_webmentions`)
	latest: collection => collection.getAll().sort((a, b) =>
		dateToFormat(b.data.updated || b.date) - dateToFormat(a.data.updated || a.date)).slice(0, 20),
	links: collection => collection.getFilteredByGlob(['bookmarks', 'likes'].map(t => `src/content/${t}/*.md`)),
}

Array.from(['articles', 'bookmarks', 'code', 'likes', 'listen', 'notes', 'read', 'rsvp', 'watched']).forEach(type => {
	collections[type] = collection => collection.getFilteredByGlob(`src/content/${type}/*.md`).filter(p => excludeVisibility(p))
})

Array.from(['started', 'want']).forEach(progress => {
	collections[`read:${progress}`] = collection => {
		const books = collection.getFilteredByGlob('src/content/read/*.md')
		const group = books.filter(b => b.data.progress == progress)
		return group.filter(g =>
			books.filter(b => b.data['read-of'].uid == g.data['read-of'].uid).length == 1)
	}
})

export default (config) => {
	for (const [name, collection] of Object.entries(collections)) {
		config.addCollection(name, collection)
	}
}
