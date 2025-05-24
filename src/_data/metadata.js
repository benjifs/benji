const URL = process.env.BASE_URL || "http://localhost:8080";

export default {
	"title": "benji",
	"url": URL.replace('www.', ''),
	"shortUrl": process.env.SHORT_URL || URL,
	"description": "🇪🇨 benji. not the dog.",
	"keywords": "",
	"favicon": "/icon-180.png",
	"icon": "/icon-192.png",
	"author": {
		"name": "benji",
		"url": URL,
		"photo": `${URL}/assets/photo.jpg`,
		"banner": `${URL}/banner.jpg`,
		"email": process.env.EMAIL
	},
	"meta": [
		{ "name": "fediverse:creator", "content": "@benji@corteximplant.com" },
		{ "name": "generator", "content": `Eleventy ${process.env.ELEVENTY_VERSION}` }
	],
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
		{
			"rel": "alternate",
			"href": "/bookmarks.xml",
			"type": "application/rss+xml",
			"title": "RSS Feed - Bookmarks"
		},
		{
			"rel": "alternate",
			"href": "/photos.xml",
			"type": "application/rss+xml",
			"title": "RSS Feed - Photos"
		},
		{
			"rel": "alternate",
			"href": "/read.xml",
			"type": "application/rss+xml",
			"title": "RSS Feed - Read"
		},
		{
			"rel": "alternate",
			"href": "/watched.xml",
			"type": "application/rss+xml",
			"title": "RSS Feed - Watched"
		},
		/*
		// Atom
		{
			"rel": "alternate",
			"href": "/feed.atom",
			"type": "application/atom+xml",
			"title": "Atom Feed"
		},
		{
			"rel": "alternate",
			"href": "/all.atom",
			"type": "application/atom+xml",
			"title": "Atom Feed - All Posts"
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
		*/
	],
	"rels": {
		// "indieauth-metadata": "https://benji.dog/.well-known/oauth-authorization-server",
		"authorization_endpoint": "https://indieauth.com/auth",
		"token_endpoint": "https://tokens.indieauth.com/token",
		"micropub": "https://micropub.benji.dog/micropub",
		"micropub_media": "https://micropub.benji.dog/media",
		// "webmention": "https://webmention.io/www.benji.dog/webmention",
		"webmention": "https://wm.benji.dog/webmention",
		// "pingback": "https://webmention.io/www.benji.dog/xmlrpc",
		"microsub": "https://aperture.p3k.io/microsub/419"
	}
}