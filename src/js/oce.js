const $els = document.querySelectorAll('[data-mailto]')
if ($els && $els.length) {
	for (const i in $els) {
		const $el = $els[i]
		if ($el.dataset && $el.dataset.mailto) {
			// Sort of obfuscating email
			// If javascript is disabled, don't show email
			// Decodes a base64 string and reverses it to get the actual email
			$el.href = 'mailto:' + atob($el.dataset.mailto).split('').reverse().join('')
			$el.style.display = ''
		}
	}
}