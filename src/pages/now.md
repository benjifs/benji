---
title: /now
date: git Last Modified
---

This <a href="https://nownownow.com">/now page</a> highlights a few things that I'm working on and interested in now.

- Living in <span class="p-locality">Minneapolis</span>, <abbr class="p-region" title="Minnesota">MN</abbr>
- Working as a Lead Mobile Engineer
- Working on [sparkles: a micropub client](https://sparkles.sploot.com)

## watching
- [One Piece](https://en.wikipedia.org/wiki/One_Piece_(1999_TV_series))
- [How I Met Your Mother](https://en.wikipedia.org/wiki/How_I_Met_Your_Mother)
- [Pluribus](https://en.wikipedia.org/wiki/Pluribus_(TV_series))
- [Slow Horses](https://en.wikipedia.org/wiki/Slow_Horses)

For movie watch history, see [/watched](/watched)

## playing
- [Hollow Knight: Silksong](https://hollowknightsilksong.com/)
- [Fallout 4](https://fallout.bethesda.net/en/games/fallout-4)

## reading
{%- set reading = collections['read:started'] | reverse -%}
{%- if reading.length == 0 %}
Nothing right now
{% endif -%}
{%- for book in reading %}
- <a href="{{ book.url }}">{{ book.data['read-of'].name }} by {{ book.data['read-of'].author }}</a>
{% endfor %}

For full read history, see [/read](/read)

## other links

- [/changelog](/changelog)

<p class="text-center">Last updated: <time class="dt-published" datetime="{{ page.date | dateISO }}">{{ page.date | dateString }}</time></p>
