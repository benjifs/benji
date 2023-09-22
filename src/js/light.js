
function light_switch() {
	const $html = document.documentElement;
	setTheme($html.classList.contains('light') ? 'dark' : 'light');
}

function setTheme(mode) {
	const $html = document.documentElement;
	const $switch = document.getElementById('light-switch');

	if (mode === 'light') {
		$html.classList.add('light');
		$switch.src = '/assets/phosphor/moon.svg'
	} else {
		$html.classList.remove('light');
		$switch.src = '/assets/phosphor/sun.svg'
	}
	$switch.setAttribute('aria-label', 'Switch to ' + (mode === 'light' ? 'dark' : 'light') + ' mode');

	localStorage.setItem('theme', mode);
}

document.addEventListener('DOMContentLoaded', e => {
	setTheme(localStorage.getItem('theme'));
});
