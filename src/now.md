---
layout: "page.njk"
title: "/now"
date: git Last Modified
eleventyExcludeFromCollections: true
---

This <a href="https://nownownow.com" target="_blank">/now page</a> highlights a few things that I'm working on and interested in now.

- Living in <span class="p-locality">Minneapolis</span>, <abbr class="p-region" title="Minnesota">MN</abbr>
- Working as a Lead Mobile Engineer at <a href="https://venture.org" target="_blank">Venture</a>
- Working on [sparkles: a micropub client](https://sparkles.sploot.com)

## watching
- [Ahsoka](https://imdb.com/title/tt13622776/)
- [Futurama](https://imdb.com/title/tt0149460/)
- [Miracle Workers](https://imdb.com/title/tt7529770/)
- [Only Murders in the Building](https://imdb.com/title/tt11691774/)
- [Reservation Dogs](https://imdb.com/title/tt13623580/)

For movie watch history, see [/watched](/watched)

## playing
- [The Legend of Zelda: Tears of the Kingdom](https://zelda.com/tears-of-the-kingdom/)
- [Pokémon Go](https://www.pokemon.com/us/app/pokemon-go/)

## reading
{%- set book = collections.read | reverse | first -%}
{%- set readOf = book.data['read-of'].properties %}
{%- if book.data['progress'] == 'started' %}
<a href="{{ book.url }}">{{ readOf.name }} by {{ readOf.author }}</a>
{%- else %}
Nothing right now
{%- endif %}

For full read history, see [/read](/read)

<div class="text-center">
	<p>Last updated: <time class="dt-published" datetime="{{ page.date | dateISO }}">{{ page.date | dateString }}</time></p>
</div>