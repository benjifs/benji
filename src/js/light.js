function light_switch() {
	const $html = document.documentElement
	setTheme($html.dataset.theme == 'light' ? 'dark' : 'light')
}

function setTheme(mode) {
	const $html = document.documentElement
	const $switch = document.getElementById('light-switch')
	$html.dataset.theme = mode
	$switch.src = '/assets/phosphor/' + (mode === 'light' ? 'moon' : 'sun') + '.svg'
	$switch.setAttribute('aria-label', 'Switch to ' + (mode === 'light' ? 'dark' : 'light') + ' mode')
	localStorage.setItem('theme', mode)
}

document.addEventListener('DOMContentLoaded', () => {
	setTheme(localStorage.getItem('theme'))
})
