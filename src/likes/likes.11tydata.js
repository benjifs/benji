module.exports = {
	"eleventyComputed": {
		"eleventyExcludeFromCollections": data => data.deleted || data.draft,
		"layout": data => "content/" + (data.deleted ? "deleted.njk" : "like.njk"),
		"permalink": data => data.draft ? false : data.permalink
	}
}