export default {
	"postType": "watch",
	"eleventyComputed": {
		"rssTitle": "{{ summary }}",
		"rssContentPrefix": item => {
			const cite = item['watch-of']
			if (!cite) return ''
			if (cite.content?.html) return cite.content.html
			return `<p><a href="${cite.url}"><img src="${cite.photo}"></a></p>`
		}
	}
}