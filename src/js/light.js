const $html = document.documentElement
const prefersDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
document.addEventListener('DOMContentLoaded', () => {
	const theme = localStorage.getItem('theme')
	if (theme) $html.dataset.theme = theme
})

document.getElementById('theme-switch').addEventListener('change', e => {
	const isDark = $html.dataset.theme == 'dark' || (!$html.dataset.theme && prefersDark())
	const theme = isDark && e.currentTarget.checked ? 'light' : 'dark'
	localStorage.setItem('theme', theme)
	if (theme) $html.dataset.theme = theme
})