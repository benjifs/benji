import slugify from 'slugify'

export default {
	getVariable: function(string) {
		// Need this to access global variables with dashes. (`like-of`)
		// https://github.com/11ty/eleventy/issues/567#issuecomment-575828788
		// https://www.11ty.dev/docs/languages/javascript/#warning-about-arrow-functions
		return this.getVariables()[string]
	},
	// Support emojis in tags and URLs
	slug: str => !str ? null : (/\p{Emoji_Presentation}/u.test(str) ? str : slugify(str, { lower: true })),
	// Filter to treat frontmatter item that could be an array as such
	// https://github.com/11ty/eleventy/issues/1611
	toArray: value => !value ? [] : (Array.isArray(value) ? value : [value]),
	// `limit` filter returns the first `n` elements of array
	limit: (arr, n) => arr.slice(0, n),
}
