---
title: /now
date: git Last Modified
---

This <a href="https://nownownow.com">/now page</a> highlights a few things that I'm working on and interested in now.

- Living in <span class="p-locality">Minneapolis</span>, <abbr class="p-region" title="Minnesota">MN</abbr>
- Working as a Lead Mobile Engineer
- Working on [sparkles: a micropub client](https://sparkles.sploot.com)

## watching
- [Seinfeld](https://thetvdb.com/series/seinfeld)

For movie watch history, see [/watched](/watched)

## playing
- [Blue Prince](https://www.blueprincegame.com/)

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
