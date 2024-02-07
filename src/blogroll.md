---
title: blogroll
layout: layouts/base.njk
eleventyExcludeFromCollections: true
---

# Blogroll

[Show icons](#icons-personal-sites)

{% for k, v in blogroll %}
<section>
  <h2>{{ k }}</h2>
  <ul id="icons-{{ k | slug }}" class="blogroll">
  {% for l in v %}
  <li><a href="{{ l.id }}" target="_blank">{{ l.name }}{% if l.img %} <img src="{{ l.img }}" alt="{{ l.name }}" width="88" height="31" loading="lazy" />{% endif %}</a>{% if l.rss %}<a href="{{ l.rss }}" target="_blank"><img class="svg sm" src="/assets/phosphor/rss-simple.svg" alt="{{ l.name }} RSS feed"/></a>{% endif %}{% if l.extra %} {{ l.extra | safe }}{% endif %}</li>
  {% endfor %}
  </ul>
</section>
{% endfor %}
