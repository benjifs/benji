export default {
	"postType": "watch",
	"eleventyComputed": {
		"rssTitle": "{{ summary }}",
		"rssContentPrefix": item => {
			const cite = item['watch-of']
			if (!cite || !cite.properties) return ''
			if (cite.properties.content && cite.properties.content.html) return cite.properties.content.html // For letterboxd
			return `<p><a href="${cite.properties.url[0]}"><img src="${cite.properties.photo[0]}" /></a></p>`
		}
	}
}