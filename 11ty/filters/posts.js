export default {
	excludeProperty: (items, prop) => items.filter(i => !(i[prop] || (i.data && i.data[prop]))),
	// For `read` and `watched`
	byDataProperty: (items, prop, value) => items.filter(item => item.data[prop] && item.data[prop] == value),
	byYear: (items, year) => items.filter(item => item.date && item.date.getFullYear() == year),
	byRating: (items, rating) => items.filter(item => item.data && item.data.rating && parseFloat(item.data.rating) === rating),
	toStars: (n = 0, max = 5) => '★'.repeat(Math.min(parseInt(n), max)) + (n - parseInt(n) > 0 ? '½' : ''),
}
