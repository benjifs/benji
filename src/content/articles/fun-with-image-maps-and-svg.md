---
title: Fun with Image Maps and SVGs
summary: "Adding hover effects to images using image maps"
date: 2024-02-20
tags:
- tutorial
- image map
- svg
---

Over the past few weeks I've been playing around with making some images on my website interactive.

My "informatics" class in high school taught us some basic HTML. By basic I mean in notepad and writing everything by hand, saving to a [floppy disk](https://en.wikipedia.org/wiki/Floppy_disk#3%C2%BD-inch_disk) and turning in the homework. I don't remember much of the assignments but I remember learning about [image maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map) and spent a lot of time figuring out the coordinates to get my images to work the right way.

I had the idea of adding an image to my [about](/about) page of my family that I could then use image maps to make areas clickable and would navigate to different areas. Luckily, figuring out image map coordinates is easier now as I can use [Image Map Generator](http://www.image-map.net/), trace the [polygons](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon) and the exact output I would use on my site.

With the image map ready to go, my next idea was to take that image and add some sort of interactivity so that hovering over a region would highlight it. Here's where I learned that the [\<area\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) element doesn't actually sit on top of the image so adding some `background-color` with opacity was not going to work. On Firefox, focusing on the `<area>` does apply some style that matches its polygon which I thought was nice. The solution to me then was to create multiple images that would each highlight the section I wanted, stack them on top of each other, and hide them or show them as needed. *\*Opens [GIMP](https://www.gimp.org/)\**.

**1 hour later**

I'm really not good at image editing software but after splitting the image into separate layers, I was ready to try to put everything together.

I was done. I thought I was done. I tested this and it worked great but then when testing on mobile I found out that the `<area>` coordinates don't scale as the image gets smaller. Clearly not something I had to deal with in the early 2000s as monitors came in one size fits all. I found some solutions when dealing with responsiveness and image maps but it required adding javascript which I try not to do unless absolutely necessary.

Here's a version of my using image maps:

<style>
	map[name="image-map"] {
		display: block;
		position: relative;
		background: white;
	}
	#overlay {
		position: absolute;
		top: 0; left: 0; right: 0; bottom: 0;
		background-size: contain;
		pointer-events: none;
	}
	map:has(area:hover) #overlay, map:has(area:focus) #overlay {
		background-image: url('/assets/images/benji_o.png');
	}
</style>
<map name="image-map">
	<img src="/assets/images/benji.png" usemap="#image-map">
	<area alt="benji" title="benji" href="/about" coords="257,815,285,800,271,693,287,606,268,589,275,565,269,553,279,455,295,396,225,329,225,225,295,130,396,129,465,187,502,279,500,314,417,369,452,383,466,418,513,487,458,562,463,603,453,608,459,615,435,618,418,697,427,830,378,837,342,829,362,813,360,793,349,703,349,667,340,696,342,809,288,823" shape="poly">
	<div id="overlay"></div>
</map>
<p class="text-center"><i>This one should behave weird on mobile or screens smaller than ~700px</i></p>

There's a few other methods to achieve the same result here. You could have multiple `<img>` instead of a single `<div id="overlay">` and on hover switch from `visibility: hidden` to `visibility: visible`. You could also use a single image and have alternate `src` that it will switch to as you're hovering over them.

I looked around for what an alternate solution to responsive image maps and everything pointed to SVGs. Similar to image maps I found a [tool](https://imagemapper.pageballoon.com/) that would easily let me select areas in an image and create the appropriate area in an SVG but sadly, it only worked for rectangles. I **needed** polygons. *\*Opens [Inkscape](https://inkscape.org/)\**.

**Some more time later**

Tracing the approximate areas and exporting the SVG from Inkscape got me most of the way there. The nice thing about this approach is that since the path is actually positioned over the image in the correct spot, we can just change the `fill` color to highlight that section of the image. Putting everything together, we end up with the following:

<style>
	svg.benji {
		background: white;
		width: 100%;
		height: auto;
	}
	svg image {
		pointer-events: none;
	}
	svg a {
		cursor: pointer !important;
	}
	svg path {
		fill: var(--color-b);
		opacity: 0;
	}
	a#test-one:hover path, a#test-one:focus path {
		opacity: 0.5;
	}
</style>
<svg class="benji" width="700" height="911" viewBox="0 0 700 911" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><image preserveAspectRatio="none" xlink:href="/assets/images/benji.png"/><a id="test-one" xlink:href="/about" xlink:title="benji"><path d="m258.048 814.156 23.681-15.515-11.432-106.159 16.332-91.46-20.415-10.616-.817-8.982 11.433-20.416-12.25-10.615 2.45-8.166-4.9-39.198 17.966-89.826 13.066-18.782-66.145-53.08-3.267-33.48 4.083-40.014-4.083-62.062 49.813-62.879 65.329-22.865 67.778 13.882 53.896 52.263 37.564 71.045-3.267 56.346-75.127 56.346 24.498 8.982 25.315 43.28 41.647 69.412-57.163 70.228 7.35 43.28-9.8 2.45 2.45 11.433h-23.682l-21.231 66.961 14.699 61.246.816 83.294-55.529 8.166-26.948-8.166 19.599-17.966.816-22.865-13.882-86.56.816-37.564-11.432 25.315 3.266 122.49-56.345 10.617z"/></a></svg>

<p class="text-center"><i>Final result with path highlight</i></p>

If we wanted the highlighted section to be something more complex than a highlighted area with a single color, we can take the same idea from the map example above and overlay an image on hover.

<style>
	a#test-two image {
		opacity: 0;
	}
	a#test-two:hover image, a#test-two:focus image {
		opacity: 1;
	}
</style>
<svg class="benji" width="700" height="911" viewBox="0 0 700 911" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><image preserveAspectRatio="none" xlink:href="/assets/images/benji.png"/><a id="test-two" xlink:href="/about" xlink:title="benji"><path d="m258.048 814.156 23.681-15.515-11.432-106.159 16.332-91.46-20.415-10.616-.817-8.982 11.433-20.416-12.25-10.615 2.45-8.166-4.9-39.198 17.966-89.826 13.066-18.782-66.145-53.08-3.267-33.48 4.083-40.014-4.083-62.062 49.813-62.879 65.329-22.865 67.778 13.882 53.896 52.263 37.564 71.045-3.267 56.346-75.127 56.346 24.498 8.982 25.315 43.28 41.647 69.412-57.163 70.228 7.35 43.28-9.8 2.45 2.45 11.433h-23.682l-21.231 66.961 14.699 61.246.816 83.294-55.529 8.166-26.948-8.166 19.599-17.966.816-22.865-13.882-86.56.816-37.564-11.432 25.315 3.266 122.49-56.345 10.617z"/><image preserveAspectRatio="none" xlink:href="/assets/images/benji_o.png"/></a></svg>

<p class="text-center"><i>Final result with image overlay</i></p>

In this case the overlayed image looks pretty close to the simple highlight example so to see an example where the images look like a different color than the original image, check out my [mugs](/articles/my-favorite-mugs).

<hr class="sm" />

I wanted to write all this out because even though I feel like I've seen this before, I had a hard time searching for it and finding examples or tutorials. This may not be the best approach to get this effect but its what I came up with. If you've seen something like this implemented anywhere, let me know as I'd love to see it and try to collect them here so that myself and whoever else stumbles upon this can use it as reference and inspiration in the future.

## Other examples
- [My about page](/about)
- [My mugs](/articles/my-favorite-mugs)
- https://www.moomin.com/en/characters/
- https://patrickkettner.com/posts/responsive-image-maps/
- https://kokorobot.ca/
- https://www.c82.net/redoute/
