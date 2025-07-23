---
title: /stickers
date: git Last Modified
stickers:
- url: https://daltondoodles.bigcartel.com
  img: /assets/images/stickers/daltondoodles.png
  caption: "Set of stickers from Dalton Doodle's patreon"
- img: /assets/images/stickers/dontpanic.png
  caption: "I can't find the source but someone made these for their wikireader. I have one on mine."
- img: /assets/images/stickers/donuted.png
  caption: "Got a bunch of these at a donut event years ago"
- url: https://benbrown.com
  img: /assets/images/stickers/fictionquest.png
  caption: "From Ben Brown's project: Fiction Quest"
- url: https://ko-fi.com/alistairshepherd
  img: /assets/images/stickers/goose.png
  caption: "Alistair made these great stickers inspired by the Untitled Goose Game"
- img: /assets/images/stickers/krivvy.png
  caption: "Some stickers from Krivvy"
- img: /assets/images/stickers/mnmk.png
  caption: "MN Mechanical Keyboard Meetup"
- url: https://store.mollywhite.net
  img: /assets/images/stickers/citation.png
  caption: "Molly White"
- url: https://ko-fi.com/revengeday
  img: /assets/images/stickers/revengeday.png
  caption: "Ramses Revengeday makes some great cyberpunk stickers"
- url: https://emmamake.com
  img: /assets/images/stickers/savetheoa.png
  caption: "Emma Make designed these for #SaveTheOA"
- url: https://indieweb.org
  img: /assets/images/stickers/indieweb.png
  caption: "Your new favorite band!"
---

<p class="text-center">Last updated: <time class="dt-published" datetime="{{ page.date | dateISO }}">{{ page.date | dateString }}</time></p>

I have more stickers than I have places to put stickers. Here's a list of some of the stickers I have, with credits to the artist or places to purchase them:

<style>
	figure {
		position: relative;
		max-width: 400px;
		aspect-ratio: 1;
	}
	figure a {
		display: block;
	}
	figcaption {
		display: none;
		position: absolute;
		left: 0; right: 0;
		top: 100%;
		padding: var(--spacing);
		background-color: rgba(0,0,0,.5);
		color: #fff;
		text-align: center;
		z-index: 10;
	}
	.grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) }
	figure:hover figcaption { display: block }
</style>

<div class="h-feed grid">
	{% for sticker in stickers -%}
	<figure>
		{% if sticker.url %}<a href="{{ sticker.url }}">{% endif %}
			<img src="{{ sticker.img }}">
			<figcaption>{{ sticker.caption }}</figcaption>
		{% if sticker.url %}</a>{% endif %}
	</figure>
	{%- endfor %}
</div>
