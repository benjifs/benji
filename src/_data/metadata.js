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
		"name": "Benji Encalada Mora",
		"url": URL,
		"image": `${URL}/assets/avatar.png`
	},
	"twitter": {
		"username": "@benjifs"
	},
	"feeds": [
		{
			"rel": "feed",
			"href": `${URL}/feed`,
			"type": "text/html",
			"title": "feed"
		},
		{
			"rel": "alternate",
			"href": `${URL}/feed.xml`,
			"type": "application/atom+xml",
			"title": "RSS (Atom) Feed"
		},
		{
			"rel": "alternate",
			"href": `${URL}/feed.json`,
			"type": "application/json",
			"title": "JSON Feed"
		}
	],
	"rels": {
		"authorization_endpoint": "https://indieauth.com/auth",
		"token_endpoint": "https://tokens.indieauth.com/token",
		"micropub": "https://micropub.benji.dog/micropub",
		"micropub_media": "https://micropub.benji.dog/media",
		"webmention": "https://webmention.io/www.benji.dog/webmention",
		"pingback": "https://webmention.io/www.benji.dog/xmlrpc",
		"microsub": "https://aperture.p3k.io/microsub/419"
	}
}