---
title: My Favorite Mugs
date: 2024-02-18
tags:
- collection
- favorite
- mugs
---

<style>
	#mugs {
		position: relative;
	}
	#mugs svg {
		background-image: url(/assets/images/mugs/bg.jpg);
		background-size: contain;
		max-width: 700px;
		max-height: 700px;
		width:  100%;
		height: auto;
	}
	#mugs img {
		position: absolute;
		top: 0; bottom: 0;
		left: 0; right: 0;
		visibility: hidden;
		pointer-events: none;
	}
	#mugs path {
		cursor: pointer;
	}
	#mugs:has(#area-pilgrim:hover) #overlay-pilgrim {
		visibility: visible;
	}
	#mugs:has(#area-raccoon:hover) #overlay-raccoon {
		visibility: visible;
	}
	#mugs:has(#area-goombay:hover) #overlay-goombay {
		visibility: visible;
	}
	#mugs:has(#area-unicorn:hover) #overlay-unicorn {
		visibility: visible;
	}
	#mugs:has(#area-naboo:hover) #overlay-naboo {
		visibility: visible;
	}
	.mug-info {
		display: none;
	}
	.mug-info:target {
		display: block;
	}
	#all:target .mug-info {
		display: block;
	}
</style>
<div id="mugs">
	<svg width="700" height="700" viewBox="0 0 185.208 185.208" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="transparent"><a id="area-pilgrim" xlink:href="#pilgrim" xlink:title="pilgrim"><path d="m65.944 99.292 2.854 55.58 1.052 3.304 3.004 3.906 7.961 4.356 8.863 1.802 10.816-.3 7.36-2.103 6.91-4.056 3.605-5.708.3-8.562 8.563.75 7.21-2.703 5.708-7.21 2.103-8.112-.15-10.064-3.455-9.013-4.506-4.807-5.709-2.554-5.257-.3-3.004.901-.3-7.21-5.559-3.756-7.81-2.103-7.662-.75-12.618.45-8.562 1.052-4.506 1.201-4.657 2.404z"/></a><a id="area-goombay" xlink:href="#goombay" xlink:title="goombay"><path d="m22.382 74.807 7.36 65.043 2.254 3.455 3.154 2.704 5.108 1.051 6.158.6 6.61-.9 6.91-1.803 3.455-1.803 3.304-2.103 1.052-2.103-1.803-39.957 1.953-3.455 2.253-1.201-.75-12.168-1.653-2.703-.751-4.507-.3-3.004-1.052-1.052-3.756-1.652-8.111-.751-6.31.15-9.763.6-8.112 1.353-5.708 1.802z"/></a><a id="area-unicorn" xlink:href="#unicorn" xlink:title="unicorn"><path d="m70.3 88.476 8.412-1.201 6.31-1.803 3.755-2.403-.751-41.46-5.258-.6h-8.111l-11.417.3-9.914.751-6.459.751.3 7.21-4.356.3-3.605.752-3.004 2.103-1.803 2.854-.901 3.155v2.854l.901 2.703 1.953 3.305 1.202.901 4.206-.3-2.404-2.103-1.802-2.253-1.052-2.854.15-3.155 1.503-2.403 2.403-1.803 2.403-.6 3.155.9 1.652 1.353 1.202 12.467h7.06l4.356.601 4.356 1.352 1.953 1.953.15.45.601 2.554v2.103l.751 2.254 1.352 1.802.451 1.052z"></path></a><a id="area-naboo" xlink:href="#naboo" xlink:title="naboo"><path d="m114.163 87.725l-8.712-1.201-4.957-1.202-3.606-1.352-1.201-1.652-1.953-1.503-.601-1.201 1.052-36.052 3.454-.901h6.76l7.661.15 8.562.601 15.172 1.052 4.206.9-.15 2.404 3.605 1.202 3.605 1.051 4.657 2.404 2.704 3.305 1.652 3.905.15 3.605-.901 3.756-1.202 2.704-.901.9-4.807-.75 2.103-2.704 1.502-3.906.15-3.154-1.352-3.605-1.952-2.254-1.653-1.351-2.103-.3h-3.905l-1.502.6-1.503 15.923H129.635l-5.107.3-4.807.751-3.154.601-1.503.751-.45.601z"/></a><a id="area-raccoon" xlink:href="#raccoon" xlink:title="raccoon"><path d="m114.313 92.833.3-21.03 5.559-1.653 12.317-.75 9.163.3L153.67 70.9l8.111 1.953 1.803 1.352-.45 5.107 5.557-.75 7.06.75 5.258 4.657 1.201 3.305.902 4.807-.902 6.008-1.502 4.657-2.403 4.356-2.404 3.155-4.807 5.407-3.154 2.554-4.657 4.056-3.004 2.553-1.652.601-.902 3.305-1.952 3.755-3.305 2.854-2.554 1.953-6.159 1.803-4.055.6 1.802-3.755.901-3.305.752-6.158-.902-6.31-.901-4.055-1.803-4.056-1.652-2.403-3.305-3.155-3.755-1.953-3.004-1.201h-3.455l-3.155.15-1.051.15V98.09l-.451-1.802-1.953-1.503z"/></a></g></svg>
	<img id="overlay-pilgrim" src="/assets/images/mugs/pilgrim_o.png">
	<img id="overlay-goombay" src="/assets/images/mugs/goombay_o.png">
	<img id="overlay-raccoon" src="/assets/images/mugs/raccoon_o.png">
	<img id="overlay-unicorn" src="/assets/images/mugs/unicorn_o.png">
	<img id="overlay-naboo" src="/assets/images/mugs/naboo_o.png">
</div>
<p>I think if you have over 30 of something then it's officially a collection. Not sure when it started for me but I've found myself finding, buying, making, and getting mugs over the years and I love all of them. After reading <a href="https://www.cassey.dev/favorite-mugs/" target="_blank">Cassey</a>'s post, I thought I'd also share some of my favorite mugs too.</p>
<p>This post is my attempt at something a little interactive. You can click on the mugs above to see more about them or just <a href="#all">read about all of them now</a>.</p>

<div id="all">
	<div id="pilgrim" class="mug-info"><img src="/assets/images/mugs/pilgrim.jpg" /><p>It's silly but I like to make replicas of small things from movies or TV. This one is from <a href="https://www.imdb.com/title/tt0446029/" target="_blank">Scott Pilgrim vs. the World (2010)</a>. This mug only shows up for a few seconds but I really liked it so I found a version of the original sketch which I then edited to try to color match as best as I could and got it printed somewhere. I use this one a lot and I keep the files just in case something happens to it and I need to reprint it.</p></div>
	<div id="goombay" class="mug-info"><img src="/assets/images/mugs/goombay.jpg" /><p>This one is harder to use because of its shape but I love it because it was something my wife got for me. It's the logo of a brand of a very sugary soft drink called <a href="https://en.wikipedia.org/wiki/Goombay_Punch" target="_blank">Goombay</a> which she grew up drinking. She got me some to try and it was very delicious and it's a good thing we can't get it here otherwise I'd drink nothing else.</p></div>
	<div id="unicorn" class="mug-info"><img src="/assets/images/mugs/unicorn.jpg" /><p>I try to be careful with this one. It has a few cracks inside which then got coffee/tea stained. I should've taken a picture of the other side too, it's a green hippogriff. I'm not really sure where I got this but its the perfect size for hot or cold drinks.</p></div>
	<div id="naboo" class="mug-info"><img src="/assets/images/mugs/naboo.jpg" /><p>This one seemed close in size to the <a href="#unicorn">unicorn</a> mug but honestly, it's a Star Wars mug. I won't get into it now but <a href="https://www.imdb.com/title/tt0120915/" target="_blank">Star Wars Ep I: The Phantom Menace</a> is very special to me.</p></div>
	<div id="raccoon" class="mug-info"><img src="/assets/images/mugs/raccoon.jpg" /><p>This one was my work mug for a long time. I stopped by a <a href="https://www.cariboucoffee.com/" href="_blank">Caribou Coffee</a> before work one day and it immediately called to me. I love raccoons and the colors were perfect.</p></div>
</div>