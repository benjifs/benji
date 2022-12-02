---
title: "sparkles"
summary: "I built a micropub client"
date: 2022-12-01
tags:
- projects
- sparkles
- micropub client
---

![sparkles: a micropub client](/assets/images/sparkles-icon.png)

I've been working on a [micropub client](https://indieweb.org/Micropub/Clients) on and off for a few months now and since its [IndieWeb Gift Calendar](https://indieweb.org/2022-12-indieweb-gift-calendar) season, I figured it was the perfect time to write about it.

**tl;dr:** [sparkles](https://sparkles.sploot.com) is a micropub client. It supports [IndieAuth](https://indieauth.net/) for login and expects a [micropub endpoint](https://indieweb.org/Micropub/Servers) to communicate with to publish posts. It supports basic micropub content types and you can also add movies you have watched.

## Motivation

I wrote a [micropub and media endpoint](https://github.com/benjifs/micropub) sometime in 2020 and since then I've been using several micropub clients to post content to my site. There are some extensions I would have liked to add to those but I felt like they were so specific to how I want to publish content to my site that it wouldn't have made sense to add there. I could have also just built the specific additions I wanted but I took this as an opportunity to build the one micropub client I would like to use.

## Development

Similar to my micropub endpoint, I wanted to build this so it could easily be deployed to [Netlify](https://www.netlify.com/) with a single click and some minor environment variable configurations.

I initially tried to keep things as close to vanilla JS as possible but in the end chose to use [Mithril.js](https://mithril.js.org/) as a framework. I already use several of the other popular Javascript frameworks in other projects so I took this as an opportunity to learn something new.

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors started showing up and the quickest way I figured at the time to handle these errors was to use [Netlify's functions](https://www.netlify.com/products/functions/) to proxy requests to the [IndieAuth](https://indieauth.net/) and micropub endpoints. There is probably a better way to handle this but I figured this could be future Benji's problem.

## The Actual App

![sparkles: main menu](/assets/images/sparkles-menu.jpg)

On login there are options to add content based on the basic content types. Clicking on notes for example will open up a basic `textarea` and an input field for comma separated tags.

![sparkles: adding note content](/assets/images/sparkles-note.jpg)

One of the custom content types that I wanted to support on my site is [watched](/watched) movie posts. I currently manually run some code to convert my RSS feed from [Letterboxd](https://letterboxd.com/) and it works well enough but ideally this could all be done directly to my site using micropub. For movie search I am using [OMDb API](https://www.omdbapi.com/) which gives me all the basic info I would want to display for a movie.

![sparkles: movie search](/assets/images/sparkles-movie-search.jpg)

After a movie is selected, you can select if you have rewatched it and whether or not to rate it.

![sparkles: adding The Empire Strikes Back as a watched post](/assets/images/sparkles-movie-add.jpg)

The last bit of features I wanted to add where all dependent on sparkles being a [Progressive Web App (PWA)](https://web.dev/progressive-web-apps/). With the website installed on my phone as a PWA I could now share content from other apps to sparkles which will let me create a "reply", "bookmark", "like", or "RSVP" post.

![Android share menu](/assets/images/sparkles-share-android.jpg)

![sparkles: handle share target](/assets/images/sparkles-share.jpg)

Lastly, I can also create a quick note or add an image using the `shortcuts` option.

![sparkles: shortcut sample](/assets/images/sparkles-shortcuts.jpg)

## Issues

PWA support is sort of iffy in my experience. I think Safari on iOS doesn't have full support for <code>[shortcuts](https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts)</code> or <code>[share_target](https://developer.mozilla.org/en-US/docs/Web/Manifest/share_target)</code> which I think makes sense since these are still marked experimental.

On Android, only Chrome or Samsung Browser on Samsung devices seem to have access to a [WebAPK minting server](https://bugs.chromium.org/p/chromium/issues/detail?id=1243583) which is necessary for the full PWA experience.

While the website can still be added as a shortcut, it will lose those key features if its not installed with a browser that supports PWAs.

## Future plans

The code for [sparkles](/tags/sparkles) is still not open source but once I get stuff cleaned up I plan to make it public.

I don't usually write out reviews for movies so I completely forgot to include that when building the movie editor out. I plan to add an optional `textarea` with a checkbox to mark whether or not the content itself contains a spoiler.

The other type of content that I wanted to be able to publish from here are recipes. I have the basic idea for how to structure them but I'm still in the early planning stages on how to handle the different parts of a recipe. I also have to add support for this type of post on my [micropub endpoint](https://github.com/benjifs/micropub) first which is why I'm leaving all of this for later.
