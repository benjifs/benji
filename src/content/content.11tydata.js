module.exports = {
	"layout": "layouts/public.njk",
	"eleventyComputed": {
		"eleventyExcludeFromCollections": data => data.deleted || data.draft,
		"layout": data => data.deleted ? "layouts/deleted.njk" : data.layout,
		"permalink": data => {
			if (data.draft) return false
			if (['unlisted', 'private'].includes(data.visibility)) return false
			// Content is placed in a subdir for convenience but I don't want this to be part of the URL
			// Use permalink or remove /content/ from final permalink
			return (data.permalink || data.page.filePathStem.replace('/content/', '')) + '/'
		}
	}
}