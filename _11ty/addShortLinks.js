// Takes in a full sorted collection and assigns `shortLink`
// using the format tSSSn where:
// - t: prefix
// - SSS: time in newbase60
// - n: number of post in the same SSS
// https://indieweb.org/permashortlink#Tantek

const { DateTime } = require('luxon');
const newbase60 = require('newbase60');

module.exports = (collection, prefix) => {
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