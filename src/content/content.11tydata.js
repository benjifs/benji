module.exports = {
	"layout": "content/public.njk",
	"eleventyComputed": {
		"eleventyExcludeFromCollections": data => data.deleted || data.draft,
		"layout": data => data.deleted ? "content/deleted.njk" : data.layout,
		"permalink": data => {
			if (data.draft) {
				return false
			}
			// Temporary way of setting permalinks for "watched" notes
			// Remove this once they are moved to their own directory
			if (data['watch-of'] && data['watch-of'].properties) {
				const props = data['watch-of'].properties
				const title = (props.title ? props.title : '').toLowerCase()
					.replace(/[^\w- ]+/g, '')
					.trim()
					.replace(/ /g, '-')
				if (title) {
					return `watched/${new Date(data.date).getTime() / 1000}-${title}-${props.year}/`
				}
			}
			// Content is placed in a subdir for convenience but I don't want this to be part of the URL
			// Use permalink or remove /content/ from final permalink
			return (data.permalink || data.page.filePathStem.replace('/content/', '')) + '/'
		}
	}
}