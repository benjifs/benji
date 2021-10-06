(function () {
	var w = window,
		d = document,
		e = d.documentElement,
		b = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || b.clientWidth,
		y = w.innerHeight || e.clientHeight || b.clientHeight;

	var random = function (n) {
		return Math.floor(Math.random() * n);
	}

	if (random(10) == 0) {
		var dot = document.createElement('div');
		dot.className = 'dot';

		dot.style.top = random(y) + 'px';
		dot.style.left = random(x) + 'px';

		b.appendChild(dot);

		dot.onclick = function () {
			d.getElementsByTagName('html')[0].className += ' swag';
			dot.remove();
		}
	}

	console.log(" |/ \\| .,\n" +
							" /. .\\ | ,   Yahaha!\n" +
							" \\_`_/ |/      You found me!\n" +
							"<| ^ |>|\n" +
							" | _ | |\n" +
							'  " "');
})();