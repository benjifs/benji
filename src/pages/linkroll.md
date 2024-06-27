---
title: "{blog,pod,link}roll"
layout: layouts/base.njk
permalink: /linkroll/
---

# Blogroll

<div class="text-center">
	<a href="/blogroll.opml">OPML</a>
</div>

{% for k, v in linkroll %}
<section class="linkroll">
	<h2>{{ k }}</h2>
	<ul id="icons-{{ k | slug }}">
	{%- for l in v %}
		<li>
			<a href="{{ l.id }}">{{ l.name }}</a>
			{%- if l.lang == "es" %} (<abbr title="Español">ES</abbr>){% endif %}
			{%- if l.rss %} <a href="{{ l.rss }}"><img class="svg sm" src="/assets/phosphor/rss-simple.svg" alt="{{ l.name }} RSS feed"/></a>{% endif %}
			{#-
			{% if l.img %} <img src="{{ l.img }}" alt="{{ l.name }}" width="88" height="31" loading="lazy" />{% endif %}
			{% if l.extra %} {{ l.extra | safe }}{% endif %}
			{% if l.tags %}
				{% for t in l.tags %}
					<mark style="display: inline-block">{{ t }}</mark>
				{% endfor %}
			{% endif %}
			-#}
		</li>
	{%- endfor %}
	</ul>
</section>
{% endfor %}