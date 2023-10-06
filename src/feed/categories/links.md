---
title: links
layout: layouts/base.njk
permalink: /links/
eleventyExcludeFromCollections: true
---

<section class="page-wrapper">
	<h1>{{ title }}</h1>
	<div class="h-feed">

## inspiration
- https://eli.li/portal
- https://johnnydecimal.com/

## people
- https://eli.li/portal
- https://johnnydecimal.com/

## Inspiration
- https://eli.li/portal
- https://johnnydecimal.com/

## 11ty
- https://eli.li/portal
- https://johnnydecimal.com/

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