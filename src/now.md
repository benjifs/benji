---
title: /now
layout: layouts/page.njk
date: git Last Modified
eleventyExcludeFromCollections: true
---

This <a href="https://nownownow.com" target="_blank">/now page</a> highlights a few things that I'm working on and interested in now.

- Living in <span class="p-locality">Minneapolis</span>, <abbr class="p-region" title="Minnesota">MN</abbr>
- Working as a Lead Mobile Engineer at <a href="https://venture.org" target="_blank">Venture</a>
- Working on [sparkles: a micropub client](https://sparkles.sploot.com)

## watching
- [Abbott Elementary](https://www.imdb.com/title/tt14218830/)
- [Delicious in Dungeon](https://www.imdb.com/title/tt21621494/)
- [Foundation](https://www.imdb.com/title/tt0804484/)

For movie watch history, see [/watched](/watched)

## playing
- [Baldur's Gate 3](https://baldursgate3.game/)
- [The Legend of Zelda: Tears of the Kingdom](https://zelda.com/tears-of-the-kingdom/)

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
