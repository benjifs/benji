module.exports = {
	"eleventyComputed": {
		"eleventyExcludeFromCollections": data => data.deleted || data.draft,
		"layout": data => data.deleted ? "deleted.njk" : "note.njk",
		"permalink": data => data.draft ? false : data.permalink
	}
}