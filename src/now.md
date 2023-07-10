---
layout: "page.njk"
title: "/now"
updated: 2023-07-04
date: Last Modified
eleventyExcludeFromCollections: true
---

This <a href="https://nownownow.com" target="_blank">/now page</a> highlights a few things that I'm working on and interested in now.

- Living in <span class="p-locality">Minneapolis</span>, <abbr class="p-region" title="Minnesota">MN</abbr>
- Working as a Lead Mobile Engineer at <a href="https://venture.org" target="_blank">Venture</a>
- Working on [sparkles: a micropub client](https://sparkles.sploot.com)

## watching
- [Oshi no Ko](https://imdb.com/title/tt21030032/)
- [And Just Like That...](https://imdb.com/title/tt13819960/)
- [How I Met Your Father](https://imdb.com/title/tt14500082/)
- [Secret Invasion](https://imdb.com/title/tt13157618/)
- [Star Wars: Rebels](https://imdb.com/title/tt2930604/)

For movie watch history, see [/watched](/watched)

## playing
- [The Legend of Zelda: Tears of the Kingdom](https://zelda.com/tears-of-the-kingdom/)
- [Star Wars Jedi: Survivor](https://ea.com/games/starwars/jedi/jedi-survivor) (**ON HOLD**)
- ~~[Pokémon Go](https://www.pokemon.com/us/app/pokemon-go/)~~

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