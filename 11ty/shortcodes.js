const shortcodes = {
	svg: (path, label = '', id = '', size = 24) => `<svg id="${id}" width="${size}" height="${size}"><title>${label}</title><use xlink:href="/assets/phosphor/${path}" /><!-- Fallback -->${label}</svg>`
}

export default (config) => {
	for (const [name, shortcode] of Object.entries(shortcodes)) {
		config.addShortcode(name, shortcode)
	}
}
