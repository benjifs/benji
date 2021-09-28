
const { DateTime } = require('luxon');
const newbase60 = require('newbase60');

module.exports = {
	// Create short link using the format tSSSn
	// https://indieweb.org/permashortlink#Tantek
	addShortLinks: (collection, prefix) => {
		let prev, index;
		collection.forEach(p => {
			const date = DateTime.fromJSDate(p.date);
			if (prev && prev.toISODate() == date.toISODate()) {
				index++;
			} else {
				index = 0;
			}
			prev = date;
			p.shortLink = (prefix || "") + newbase60.DateToSxg(p.date) + index;
			if (p.data) {
				p.data.shortLink = p.shortLink;
			}
		});
		return collection;
	}
}