export default {
	"postType": "listen",
	"eleventyComputed": {
		"rssTitle": "{{ summary }}",
		"rssContentPrefix": item => {
			const cite = item['listen-of']
			return !cite ? '' : `<p><a href="${cite.url}"><img src="${cite.photo}"></a></p>`
		}
	}
}