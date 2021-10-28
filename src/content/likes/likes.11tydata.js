module.exports = {
	"eleventyComputed": {
		"eleventyExcludeFromCollections": data => data.deleted || data.draft,
		"layout": data => "content/" + (data.deleted ? "deleted.njk" : "like.njk"),
		"permalink": data => {
			if (data.draft) {
				return false
			}
			return data.permalink || `/likes/${data.page.fileSlug}/`
		}
	}
}