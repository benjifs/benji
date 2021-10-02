---
title: "Dashclock Stardate"
summary: "Star Trek Stardate on your Android homescreen"
date: 2014-12-02
tags:
- projects
- Star Trek
- Android
---

<p class="img-block">
	<img src="/assets/images/stardate-logo.png" alt="DashClock Stardate icon" />
</p>

A few years ago I built this extension for [DashClock](https://github.com/romannurik/dashclock) for Android devices. DashClock allowed you to use custom extensions to add widgets to your home screen.

The extension let you choose from five different stardate formats and it would display the current date converted to that format.

----

The following are the formats used with the way to convert them as well as todays date converted to stardate:

### The Original Series (TOS)

**YYMM.DD**

- `YY` is the current year - 1900
- `MM` is the current month (01-12)
- `DD` is the current day of the month (01-31)

> <p id="stardate-TOS"></p>

### The Next Generation (TNG)

**TTTTT.TT**

- The Next Generation's stardate starts on `July 5, 2318 12:00:00`
- [1.0 Stardate is 34,367.0564 seconds](https://trekguide.com/Stardates.htm#TNG-Conclusions)
- Subtract the milliseconds from the above date to the current date's milliseconds
- Divide by `34367056.4` and round to 2 decimal points

> <p id="stardate-TNG"></p>

### Contemporary TNG

**TTTTT.TT**

- For contemporary dates, start from `July 15, 1987 00:00:00`
- Subtract the milliseconds from the above date to the current date's milliseconds
- Divide by a year in milliseconds (365.25) and round to 2 decimal points

> <p id="stardate-cTNG"></p>

### Modified TNG

**[YY] TTTT**

Based on the system used by [The STAchive](https://starchive.cs.umanitoba.ca)

> <p id="stardate-mTNG"></p>

### Star Trek (2009)

**YYYY.DD**

- `YYYY` is the current year
- `DD` is the day of the year (1-366) (includes leap years)

> <p id="stardate-2009"></p>

## References
- [TrekGuide.com - Determining Calendar Dates From Stardates](https://trekguide.com/Stardates.htm)
- [Memory Alpha - Stardate](https://memory-alpha.fandom.com/wiki/Stardate)
- [The STArchive - Stardates in Star Trek FAQ](https://starchive.cs.umanitoba.ca/?stardates/part4#3)

<script>
Date.prototype.dayOfYear = function() {
	const start = new Date(this.getFullYear(), 0, 0);
	return Math.floor((this - start) / (1000 * 60 * 60 * 24));
}

function TOS(d) {
	return (d.getFullYear() - 1900) + '' + (d.getMonth() + 1) + "." + d.getDate();
}

function TNG(d) {
	const base = 10997830800000; // Epoch of 2318-07-15 12:00:00 in milliseconds
	var sd = d.getTime() - base;
	sd /= 34367056.4; // 34,367.0564 seconds to milliseconds
	sd = Math.floor(100 * sd) / 100; // Round to two decimals
	return "" + sd;
}

function cTNG(d) {
	const base = 553305600000; // Epoch of 1987-07-15 00:00:00 in milliseconds
	var sd = d.getTime() - base;
	sd /= (1000 * 60 * 60 * 24 * 0.036525);
	sd = Math.floor(sd + 410000) / 10;
	return "" + sd;
}

function mTNG(d) {
	const base = 6059232000000;
	var sd = d.getTime() - base;
	sd /= ( 1000 * 60 * 60 * 24 );
	sd = Math.trunc(sd - 1);
	const i = Math.trunc(sd / 2000 - 1);
	const r = Math.trunc(sd - (i * 2000)) * 5;
	return "[" + i + "] " + r;
}

function st2009(d) {
	return d.getFullYear() + "." + d.dayOfYear();
}

function stardate(d, type) {
	switch(type) {
		case '2009': return st2009(d);
		case 'mTNG': return mTNG(d);
		case 'cTNG': return cTNG(d);
		case 'TNG': return TNG(d);
		default: return TOS(d);
	}
}

const date = new Date();
const today = 'Todays date: ' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
document.getElementById('stardate-2009').innerHTML = today + ' → Stardate: ' + stardate(date, '2009');
document.getElementById('stardate-mTNG').innerHTML = today + ' → Stardate: ' + stardate(date, 'mTNG');
document.getElementById('stardate-cTNG').innerHTML = today + ' → Stardate: ' + stardate(date, 'cTNG');
document.getElementById('stardate-TNG').innerHTML = today + ' → Stardate: ' + stardate(date, 'TNG');
document.getElementById('stardate-TOS').innerHTML = today + ' → Stardate: ' + stardate(date, 'TOS');
</script>
