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
			w.addEgg('red');
		}
	}

	console.log('Yahaha!          |/ \\| .,\n' +
							'  You found me!  /. .\\ | ,\n' +
							'                 \\_`_/ |/\n' +
							'                <| ^ |>|   type yahaha()\n' +
							'                 | _ | |      to claim 🥚\n' +
							'                  " "');

	const ee = '__ee'
	w.eggs = () => JSON.parse(localStorage.getItem(ee) || '[]')
	w.addEgg = k => {
		const e = w.eggs()
		if (!e.includes(k)) {
			e.push(k) && localStorage.setItem(ee, JSON.stringify(e))
			console.log('You found an 🥚. Track your progress at https://benji.dog/🥚')
		}
	}
	w.yahaha = () => w.addEgg('yahaha')
})()