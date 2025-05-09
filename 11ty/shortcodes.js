const shortcodes = {
	svg: (path, label = '', id = '', size = 24) => `<svg ${id ? `id="${id}"` : ''} width="${size}" height="${size}" role="img">${label ? `<title>${label}</title>` : ''}<use xlink:href="/assets/phosphor/${path}" /><!-- Fallback --><desc>${label}</desc></svg>`
}

export default (config) => {
	for (const [name, shortcode] of Object.entries(shortcodes)) {
		config.addShortcode(name, shortcode)
	}
}
