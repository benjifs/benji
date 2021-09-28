const URL = process.env.URL || "http://localhost:8080";

module.exports = {
	"title": "benji",
	"url": URL,
	"shortUrl": process.env.SHORT_URL,
	"description": "benji. not the dog.",
	"keywords": "",
	"favicon": "/assets/icons/favicon-64x64.png",
	"icon": "/assets/avatar.png",
	"rss": {
		"path": "/feed.xml",
		"url": `${URL}/feed.xml`
	},
	"jsonfeed": {
		"path": "/feed.json",
		"url": `${URL}/feed.json`
	},
	"author": {
		"name": "Benji Encalada Mora",
		"url": URL,
		"image": `${URL}/assets/avatar.png`
	},
	"twitter": {
		"username": "@benjifs"
	}
}