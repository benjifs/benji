module.exports = {
	"eleventyComputed": {
		"eleventyExcludeFromCollections": data => data.deleted || data.draft,
		"layout": data => "content/" + (data.deleted ? "deleted.njk" : "bookmark.njk"),
		"permalink": data => {
			if (data.draft) {
				return false
			}
			return data.permalink || `/bookmarks/${data.page.fileSlug}/`
		}
	}
}