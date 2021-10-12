module.exports = {
	"eleventyComputed": {
		"eleventyExcludeFromCollections": data => data.deleted || data.draft,
		"layout": data => data.deleted ? "deleted.njk" : data["like-of"] ? "like.njk" : "post.njk",
		"permalink": data => data.draft ? false : data.permalink
	}
}