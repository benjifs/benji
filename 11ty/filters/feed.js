export default {
	// For {atom, json, rss}
	// Removes `script` and `style` (sometimes `pre`) tags for feeds and og:description string
	stripCustom: (text, tag) => text.replace(new RegExp(String.raw`<${tag}[^>]*>[\s\S]*?<\/${tag}>`, 'g'), ''),
}
