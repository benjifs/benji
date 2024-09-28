const $html = document.documentElement
const prefersDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
let startedDark
document.addEventListener('DOMContentLoaded', () => {
	const theme = localStorage.getItem('theme')
	if (theme) $html.dataset.theme = theme
	startedDark = $html.dataset.theme == 'dark' || (!$html.dataset.theme && prefersDark())
})
document.getElementById('theme-switch').addEventListener('change', e => {
	const theme = startedDark ^ e.currentTarget.checked ? 'dark' : 'light'
	localStorage.setItem('theme', theme)
	if (theme) $html.dataset.theme = theme
})