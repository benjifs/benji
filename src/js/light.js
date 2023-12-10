const $html = document.documentElement
document.addEventListener('DOMContentLoaded', () => {
	const theme = localStorage.getItem('theme')
	if (theme) $html.dataset.theme = theme
})

document.getElementById('theme-switch').addEventListener('change', e => {
	const isDark = $html.dataset.theme == 'dark' ||
		(!$html.dataset.theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
	localStorage.setItem('theme', isDark && e.currentTarget.checked ? 'light' : 'dark')
})