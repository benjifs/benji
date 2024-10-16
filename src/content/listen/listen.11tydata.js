export default {
	"postType": "listen",
	"eleventyComputed": {
		"rssTitle": "{{ summary }}",
		"rssContentPrefix": item => {
			const cite = item['listen-of']
			if (!cite || !cite.properties) return ''
			return `<p><a href="${cite.properties.url[0]}"><img src="${cite.properties.photo[0]}" /></a></p>`
		}
	}
}