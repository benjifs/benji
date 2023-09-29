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
- [The Great British Bake Off](https://imdb.com/title/tt1877368/)
- [Miracle Workers](https://imdb.com/title/tt7529770/)
- [Only Murders in the Building](https://imdb.com/title/tt11691774/)
- [Reservation Dogs](https://imdb.com/title/tt13623580/)

For movie watch history, see [/watched](/watched)

## playing
- [The Legend of Zelda: Tears of the Kingdom](https://zelda.com/tears-of-the-kingdom/)
- [Pokémon Go](https://www.pokemon.com/us/app/pokemon-go/)

## reading
{%- set reading = collections['read:started'] | reverse -%}
{%- if reading.length == 0 %}
Nothing right now
{% endif -%}
{%- for book in reading %}
- <a href="{{ book.url }}">{{ book.data['read-of'].properties.name }} by {{ book.data['read-of'].properties.author }}</a>
{% endfor %}

For full read history, see [/read](/read)

<div class="text-center">
	<p>Last updated: <time class="dt-published" datetime="{{ page.date | dateISO }}">{{ page.date | dateString }}</time></p>
</div>