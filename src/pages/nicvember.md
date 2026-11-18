---
layout: layouts/base.njk
title: Nicvember
---
{%- set entries = collections.tagList['nicvember'] | reverse -%}
{%- include "partials/feed-watched.njk" %}
