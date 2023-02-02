const URL = process.env.BASE_URL || "http://localhost:8080";

module.exports = {
	"title": "benji",
	"url": URL,
	"shortUrl": process.env.SHORT_URL || URL,
	"description": "benji. not the dog.",
	"keywords": "",
	"favicon": "/assets/icons/favicon-64x64.png",
	"icon": "/assets/avatar.png",
	"author": {
		"name": "benji",
		"url": URL,
		"image": `${URL}/assets/avatar.png`,
		"email": process.env.EMAIL
	},
	"twitter": {
		"username": "@benjifs"
	},
	"feeds": [
		{
			"rel": "feed",
			"href": "/feed",
			"type": "text/html",
			"title": "feed"
		},
		{
			"rel": "feed",
			"href": "/all",
			"type": "text/html",
			"title": "all"
		},
		// RSS v2.0
		{
			"rel": "alternate",
			"href": "/feed.xml",
			"type": "application/rss+xml",
			"title": "RSS Feed"
		},
		{
			"rel": "alternate",
			"href": "/all.xml",
			"type": "application/rss+xml",
			"title": "RSS Feed - All Posts"
		},
		// Atom
		{
			"rel": "alternate",
			"href": "/feed.atom",
			"type": "application/atom+xml",
			"title": "RSS (Atom) Feed"
		},
		{
			"rel": "alternate",
			"href": "/all.atom",
			"type": "application/atom+xml",
			"title": "RSS (Atom) Feed - All Posts"
		},
		// JSON
		{
			"rel": "alternate",
			"href": "/feed.json",
			"type": "application/json",
			"title": "JSON Feed"
		},
		{
			"rel": "alternate",
			"href": "/all.json",
			"type": "application/json",
			"title": "JSON Feed - All Posts"
		}
	],
	"rels": {
		// "indieauth-metadata": "https://benji.dog/.well-known/oauth-authorization-server",
		"authorization_endpoint": "https://indieauth.com/auth",
		"token_endpoint": "https://tokens.indieauth.com/token",
		"micropub": "https://micropub.benji.dog/micropub",
		"micropub_media": "https://micropub.benji.dog/media",
		"webmention": "https://webmention.io/www.benji.dog/webmention",
		"pingback": "https://webmention.io/www.benji.dog/xmlrpc",
		"microsub": "https://aperture.p3k.io/microsub/419"
	}
}