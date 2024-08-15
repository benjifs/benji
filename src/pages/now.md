---
title: /now
date: git Last Modified
---

This <a href="https://nownownow.com">/now page</a> highlights a few things that I'm working on and interested in now.

- Living in <span class="p-locality">Minneapolis</span>, <abbr class="p-region" title="Minnesota">MN</abbr>
- Working as a Lead Mobile Engineer
- Working on [sparkles: a micropub client](https://sparkles.sploot.com)

## watching
- [Bridgerton](https://www.imdb.com/title/tt8740790/)
- [Futurama](https://www.imdb.com/title/tt0149460/)
- [The Octonauts](https://www.imdb.com/title/tt1710177/)
- [The X-Files](https://www.imdb.com/title/tt0106179/)

For movie watch history, see [/watched](/watched)

## playing
- [Alien: Isolation](https://store.steampowered.com/app/214490/)
- [Portal: Revolution](https://store.steampowered.com/app/601360/Portal_Revolution/)
- [The Simpsons: Hit & Run](https://en.wikipedia.org/wiki/The_Simpsons:_Hit_%26_Run)
- [SP Football Life 2024](https://www.pessmokepatch.com/2023/09/spfl24.html)

## reading
{%- set reading = collections['read:started'] | reverse -%}
{%- if reading.length == 0 %}
Nothing right now
{% endif -%}
{%- for book in reading %}
- <a href="{{ book.url }}">{{ book.data['read-of'].properties.name }} by {{ book.data['read-of'].properties.author }}</a>
{% endfor %}

For full read history, see [/read](/read)

## other links

- [/changelog](/changelog)

<p class="text-center">Last updated: <time class="dt-published" datetime="{{ page.date | dateISO }}">{{ page.date | dateString }}</time></p>
