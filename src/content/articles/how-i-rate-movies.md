---
title: "How I Rate Movies"
summary: "Trying to make sense of the way I rate movies"
tags:
- movies
date: 2023-02-15T15:00:00Z
updated: 2024-03-18
---

I've had this post drafted for a bit and after reading [Robb Knight's post](https://rknight.me/no-more-ratings/) about their movie rating system, I thought it's about time I finish and post it.

I like watching movies and I try to watch a lot of movies. For the past few years I've been using [Letterboxd](https://letterboxd.com/benji) to track movies I watch. I didn't rate for a long time because I thought it was pointless and the rating only really applies to me but then quite a few times I found myself rewatching a movie that I had already watched because I didn't remember what I thought about it or completely forgot that I watched it.

The main motivation for me building a [micropub client](https://sparkles.sploot.com) was so that I could track my movie [watch](/watched) history on my site and move away from Letterboxd. I used to take a few days to log a movie on Letterboxd mostly out of forgetfulness but having my own client that I need to test makes me log movies sooner.

This rating system was created so that I could remind myself generally what I thought about the movie without having to write a review and more importantly, make it easy to know whether I thought something was worth coming back to later. It doesn't always make sense but it works for me.

Here's how I rate movies (updated 2024-01-01):

> <span class="p-rating" style="font-size: 2em">★★★★★</span>: I loved this\
> <span class="p-rating" style="font-size: 2em">★★★★</span>: I really liked this movie\
> <span class="p-rating" style="font-size: 2em">★★★</span>: **This is where all movies start**\
> <span class="p-rating" style="font-size: 2em">★★</span>: I didn't like this\
> <span class="p-rating" style="font-size: 2em">★</span>: I **really** didn't like this\
> Half stars represents "rewatchability". What this means varies but it's really just a way to let myself know that it might be worth a rewatch in the future.

To clarify a <span class="p-rating" style="font-size: 1.2em">★★★</span> and <span class="p-rating" style="font-size: 1.2em">★★★½</span> film I generally liked the same, but I'm more likely to come back to the <span class="p-rating" style="font-size: 1.2em">★★★½</span> one. Rating something under <span class="p-rating" style="font-size: 1.2em">★★★</span> is rare and it doesn't speak to the quality of the film as much of whether or not it was able to interest me.

## Totals by Rating

| rating | count |
| --- | --- |
{% for rating in [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] %}
{%- set entries = collections.watched | byRating(rating) -%}
| {{ rating | toStars }}| [{{ entries.length }}](/watched/rated/{{ rating }}) |
{% endfor -%}
| total: | {{ collections.watched | length }} |

<!--
### From [letterboxd](https://letterboxd.com/benji) (Last updated 2023-02-15)

| rating - | count |
| --- | --- |
| ½ | [1](https://letterboxd.com/benji/films/rated/.5/by/date/) |
| ★ | [5](https://letterboxd.com/benji/films/rated/1/by/date/) |
| ★½ | [8](https://letterboxd.com/benji/films/rated/1.5/by/date/) |
| ★★ | [24](https://letterboxd.com/benji/films/rated/2/by/date/) |
| ★★½ | [46](https://letterboxd.com/benji/films/rated/2.5/by/date/) |
| ★★★ | [163](https://letterboxd.com/benji/films/rated/3/by/date/) |
| ★★★½ | [179](https://letterboxd.com/benji/films/rated/3.5/by/date/) |
| ★★★★ | [250](https://letterboxd.com/benji/films/rated/4/by/date/) |
| ★★★★½ | [129](https://letterboxd.com/benji/films/rated/4.5/by/date/) |
| ★★★★★ | [103](https://letterboxd.com/benji/films/rated/5/by/date/) |
| total: | 908 |
-->
