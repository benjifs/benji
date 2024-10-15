export default {
	"eleventyComputed": {
		"postType": item => item && item['in-reply-to'] ? 'reply' : 'note',
		"rssTitle": "{% if ('in-reply-to' | getVariable) %}Reply to {{ 'in-reply-to' | getVariable }}{% else %}{{ summary or '' }}{% endif %}",
		"rssContentPrefix": item => {
			if (!item || !item.photo) return ''
			let photos = ''
			for (const photo of item.photo) {
				photos += `<p><img src="${photo.value}" alt="${photo.alt}" width="160" /></p>`
			}
			return photos
		}
	}
}