
const { DateTime } = require('luxon');
const pluginRss = require('@11ty/eleventy-plugin-rss');

require('dotenv').config();

const { addShortLinks } = require('./lib/collections');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addPassthroughCopy({ 'static': '/' });
	eleventyConfig.addPassthroughCopy('uploads');

	eleventyConfig.addFilter('dateString', dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat('LLLL dd, yyyy');
	});

	eleventyConfig.addFilter('dateISO', dateObj => {
		return DateTime.fromJSDate(dateObj).toISO();
	});

	eleventyConfig.addFilter('jsonStringify', content => {
		return JSON.stringify(content || '');
	});

	eleventyConfig.addFilter('alphabetSort', collection => {
		const alphabet = [ '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?' ];

		const sorted = alphabet.reduce((res, letter) => {
			res.set(letter, []);
			return res;
		}, new Map());

		for (var tag in collection) {
			let key = (tag[0] || '?').toUpperCase();
			key = isNaN(key) ? key : '#'
			sorted.get(key).push(tag);
		}
		return sorted;
	});

	eleventyConfig.addCollection('tagList', collection => {
		let tags = {};
		collection.getAll().forEach(item => {
			(item.data.tags || []).forEach(tag => {
				tag = tag.toLowerCase()
				tags[tag] = tags[tag] || [];
				tags[tag].push(item);
			});
		});
		return tags;
	});

	eleventyConfig.addCollection('notes', collection => {
		return addShortLinks(collection.getFilteredByGlob('src/notes/*.md'), 'n');
	});

	eleventyConfig.addCollection('posts', collection => {
		return addShortLinks(collection.getFilteredByGlob('src/posts/*.md'), 'p');
	});

	return {
		passthroughFileCopy: true,
		markdownTemplateEngine: 'njk',
		templateFormats: ['html', 'njk', 'md'],
		dir: {
			input: 'src',
			data: '_data',
			output: '_site',
			includes: 'includes'
		}
	}
}
