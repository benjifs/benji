---
title: "December Adventure 2024"
tags:
- december adventure
- adventure log
date: 2024-12-01T13:51:00.342Z
updated: 2024-12-02
---

I wanted to do [December Adventure](https://eli.li/december-adventure) last year but as I was getting back to work after parental leave and had a newborn at home, it wasn't the right time. This year is still busy, but I think I can do it. What's great about December Adventure is that it's a little more open ended and not competitive and that works really well for me.

I don't know what, if any, my goals are but I have a few changes I want to make to this site. There's also a few drafts I want to publish which I will count in my adventure log. But really I want to do this because at the very least I want to write a little bit every day about what I've done here.

<section>
	<article>
		<h3>Day 1</h3>
		<p>As is tradition, I reactivated my <a href="https://github.com/benjifs/benji/blob/main/src/scss/_winter.scss">winter theme</a> which you should be seeing right now. There are several great examples of snow animations elsewhere but I wanted to write my own that was just HTML + CSS. This time around, I also added animating colors that are meant to mimic the lights we have at home. I'm still not super happy with the colors on both dark and light mode but that's for another day.</p>
	</article>
	<article>
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
</section>