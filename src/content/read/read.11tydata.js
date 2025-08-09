export default {
	"postType": "read",
	"eleventyComputed": {
		"rssTitle": "{{ summary }}",
		"rssContentPrefix": item => {
			const cite = item['read-of']
			return !cite ? '' : `<p><a href="${cite.url}"><img src="${cite.photo}"></a></p>`
		}
	}
}