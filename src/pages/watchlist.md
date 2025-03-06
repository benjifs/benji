---
title: watchlist
date: git Last Modified
---

{%- set relatedTag = 'movies' -%}
{%- include "partials/related.njk" -%}

<p class="text-center">Last updated: <time class="dt-published" datetime="{{ page.date | dateISO }}">{{ page.date | dateString }}</time></p>

<div class="h-feed posters">
	{% for movie in watchlist -%}
	<span class="poster h-cite">
		<a href="{{ movie.url }}">
			<figure>
				<img class="u-photo" src="{{ movie.photo }}" alt="{{ movie.name }} ({{ movie.published }}) poster" loading="lazy" width="105">
				<figcaption><span class="p-name">{{ movie.name }}</span> (<span class="dt-published">{{ movie.published }}</span>)</figcaption>
			</figure>
			<p class="p-content" hidden>{{ movie.content }}</p>
		</a>
		{%- if movie.date -%}
		<time class="dt-accessed" datetime="{{ movie.date | dateISO }}" hidden>{{ movie.date | dateString }}</time>
		{%- endif -%}
	</span>
	{%- endfor %}
</div>
