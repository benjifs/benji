---
title: "December Adventure 2024"
tags:
- december adventure
- adventure log
className: adventure
syndicate-to:
- 'https://fed.brid.gy/'
date: 2024-12-01T13:51:00.342Z
updated: 2024-12-08
---

I wanted to do [December Adventure](https://eli.li/december-adventure) last year but as I was getting back to work after parental leave and had a newborn at home, it wasn't the right time. This year is still busy, but I think I can do it. What's great about December Adventure is that it's a little more open ended and not competitive and that works really well for me.

I don't know what, if any, my goals are but I have a few changes I want to make to this site. There's also a few drafts I want to publish which I will count in my adventure log. But really I want to do this because at the very least I want to write a little bit every day about what I've done here.

| Sun | Mon | Tue | Wed | Thu | Fri | Sat |
| --- | --- | --- | --- | --- | --- | --- |
| [1](#day-1) | [2](#day-2) | [3](#day-3) | [4](#day-4) | [5](#day-5) | [6](#day-6) | [7](#day-7) |
| [8](#day-8) | [9](#day-9) | [10](#day-10) | [**11**](#day-11) | 12 | 13 | 14 |
| 15 | 16 | 17 | 18 | 19 | 20 | 21 |
| 22 | 23 | 24 | 25 | 26 | 27 | 28 |
| 29 | 30 | 31 | | | | |

<div class="text-center">
	<a href="#log">Show all days</a>
</div>

<section id="log">
	<article id="day-1">
		<h2>2024-12-01</h2>
		<h3>Day 1</h3>
		<p>As is tradition, I reactivated my <a href="https://github.com/benjifs/benji/blob/main/src/scss/_winter.scss">winter theme</a> which you should be seeing right now. There are several great examples of snow animations elsewhere but I wanted to write my own that was just HTML + CSS. This time around, I also added animating colors that are meant to mimic the lights we have at home. I'm still not super happy with the colors on both dark and light mode but that's for another day.</p>
	</article>
	<article id="day-2">
		<h2>2024-12-02</h2>
		<h3>Day 2</h3>
		<p>A few months ago I learned about <a href="https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/">Fonts with Built-in Syntax Highlighting</a> so I added this to my site instead of <a href="https://github.com/PrismJS/prism">Prism</a>. I originally thought the colors weren't customizable unless you edit the font itself and recompile it which was a downside to this approach but worth the change at the time. Today, I figured I'd check again to see if anything new was written about it and learned about <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-palette">font-palette</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-palette-values/override-colors">override-colors</a> which let's me configure the colors to better match my websites theme. It took some messing around with the colors and it's not perfect but this is what it looks like now based on the <a href="https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting#changing-the-color-theme">original example</a>:</p>
		<pre><code>@font-palette-values --sylveon {
  font-family: 'Monaspace';
  override-colors:
    0 #6ef596, /* keywords, {} */
    1 #666666, /* comments */
    2 #71a8fe, /* literals */
    3 #f9f39e, /* numbers */
    4 #6ecff6, /* functions, [] */
    5 #f7f086, /* js others */
    6 black, /* not in use */
    7 #f492a5, /* inside quotes, css properties, few chars */
    8 #f55678 /* few chars */
  ;
}
@font-face {
  font-family: 'Monaspace';
  src: url('/assets/fonts/MonaspaceKrypton-SyntaxHighlighter-Regular.woff2') format('woff2');
}
code {
  font-family: "Monaspace", monospace;
  font-feature-settings: "colr", "calt";
  // font-palette: --sylveon;
  // or
  font-palette: var(--code-font-palette);
}</code></pre>
		<p>I <a href="https://github.com/benjifs/benji/blob/main/src/scss/_sylveon.scss">use a variable</a> so that I can switch the <code>font-palette</code> depending on whether the site is in light or dark mode.</p>
	</article>
	<article id="day-3">
		<h2>2024-12-03</h2>
		<h3>Day 3</h3>
		<p>Small change but I wanted to add a calendar at the top to link to specific days. I also updated the markup to work as an <a href="https://journal.miso.town/">HTML Journal</a> so that it can be subscribed to if one so chose via <a href="https://journal.miso.town/atom?url=https://www.benji.dog/articles/december-adventure-2024/">Atom/RSS</a>.</p>
	</article>
	<article id="day-4">
		<h2>2024-12-04</h2>
		<h3>Day 4</h3>
		<p>Busy work day so didn't actually get anything done here. I'm cleaning up my <a href="/linkroll">blogroll</a> and <a href="/TODO">TODO</a> so I hope to get that done soon.</p>
	</article>
	<article id="day-5">
		<h2>2024-12-05</h2>
		<h3>Day 5</h3>
		<p>I wanted to go back to what I was doing yesterday but todays <a href="https://indieweb.org/Front_End_Study_Hall">Front End Study Hall</a> motivated me to add one more thing for my holiday/winter theme. My <a href="/articles/online-now/">Online Now</a> indicator on my <a href="/">homepage</a> is now styled to match the season. I wasn't sure if this was the right way to do it so I may come back to it if there's a way to handle it without an <code>svg</code>.</p>
	</article>
	<article id="day-6">
		<h2>2024-12-06</h2>
		<h3>Day 6</h3>
		<p>I didn't actually get anything done today, however I did write a specific piece of code at <mark>$DAYJOB</mark> that I was really excited about. Not exciting and nothing to show, but know I was proud.</p>
	</article>
	<article id="day-7">
		<h2>2024-12-07</h2>
		<h3>Day 7</h3>
		<p>I found an issue with my <a href="https://github.com/benjifs/benji/blob/main/plugins/fetch_webmentions.js">fetch_webmentions.js</a> code related to fragments (<code>#</code>) in URLs. Fairly small fix but things work now.</p>
	</article>
	<article id="day-8">
		<h2>2024-12-08</h2>
		<h3>Day 8</h3>
		<p>This weekend got away from me to the point that I even missed most of IndieWebCamp: San Diego. I started updating my <a href="/stickers">stickers</a> page. I kinda want it to look like the stickers are on the page but need to work a little more to figure out how to display some of the captions. That's for tomorrow.</p>
	</article>
	<article id="day-9">
		<h2>2024-12-09</h2>
		<h3>Day 9</h3>
		<p>Fixed some styling related to webmentions and the <a href="/read">/read</a> page.</p>
	</article>
	<article id="day-10">
		<h2>2024-12-10</h2>
		<h3>Day 10</h3>
		<p>Small change but finally got the descriptions for the stickers to show up in a way I kinda like. I think a better idea would be to place them seemingly random on the page rather than the grid its on. I don't want to do it with <code>position: absolute</code> but I just might have to.</p>
	</article>
	<article id="day-11" class="today">
		<h2>2024-12-11</h2>
		<h3>Day 11</h3>
		<p>I was originally going to change the list to reverse order for this log but I decided instead to hide all days except today and make the calendar clickable to show that specific day. You can also a "show all" button if you want to read the full log in order.</p>
	</article>
</section>