---
title: links
layout: layouts/base.njk
permalink: /links/
eleventyExcludeFromCollections: true
---

<section>
	<h1>{{ title }}</h1>
	<div class="h-feed">

## Likes and Bookmarks

{% set likes = collections.likes | limit(10) %}
{% set bookmarks = collections.bookmarks | limit(10) %}
{% set links = (bookmarks, likes) | reverse %}

{%- for entry in links %}
<article class="h-entry">
	{%- if entry.data['like-of'] -%}
		{%- set entryType = 'like' %}
		{%- set linkURL = entry.data['like-of'] %}
	{%- elif entry.data['bookmark-of'] -%}
		{%- set entryType = 'bookmark' %}
		{%- set linkURL = entry.data['bookmark-of'] %}
	{%- endif -%}
	{% if linkURL %}
	{%- set linkTitle = entry.data.title %}
	{%- include "partials/icon.njk" -%}&nbsp;<a href="{{ linkURL }}" target="_blank">{{ linkTitle if linkTitle else linkURL }}</a>
	{% endif %}
	<hr />
</article>
{%- else %}
<h4>There are no entries</h4>
{% endfor %}
</div>
</section>