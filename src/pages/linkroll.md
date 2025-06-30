---
title: "{blog,pod,link}roll"
layout: layouts/base.njk
permalink: /linkroll/
---

# Blogroll

<p>You can download this blogroll as an <a href="/blogroll.opml">OPML</a> file and import it to your favorite feed reader.</p>
<details open>
	<summary><b>Want to add my site?</b></summary>
	<p>I made this 88x31 icon which you can add to your blogroll or list of icons if you'd like.</p>
	<p><a href="https://benji.dog"><img src="https://benji.dog/assets/88x31.gif" width="88" height="31"></a></p>
	<input type="text" value='<a href="https://benji.dog"><img src="https://benji.dog/assets/88x31.gif"></a>' readonly>
</details>

<hr class="sm" style="margin:2em auto">

<section class="buttons">
{% for k, v in linkroll -%}
	{% for l in v -%}
		{% if l.88x31 %}<a href="{{ l.id }}"><img src="{{ l.88x31 }}" alt="{{ l.name }}" width="88" height="31" loading="lazy"></a>{% endif %}
	{%- endfor %}
{%- endfor %}
</section>

<hr class="sm" style="margin-top:2em">

{% for k, v in linkroll %}
<section class="linkroll">
	<h2>{{ k }}</h2>
	<ul id="icons-{{ k | slug }}">
	{%- for l in v %}
		<li>
			<div>
				<a href="{{ l.id }}">{{ l.name }}</a>
				{%- if l.lang == "es" %} (<abbr title="Español">ES</abbr>){% endif %}
				{%- if l.feed %} <a href="{{ l.feed }}">{% svg "icons.svg#rss-simple" %}</a>{% endif %}
			</div>
			{%- if l.88x31 %}<a href="{{ l.id }}"><img src="{{ l.88x31 }}" alt="{{ l.name }}" width="88" height="31" loading="lazy"></a>{% endif %}
			{%- if l.extra %}<a href="{{ l.extra.href }}"><img src="{{ l.extra.img }}" alt="{{ l.extra.alt }}"></a>{% endif %}
		</li>
	{%- endfor %}
	</ul>
</section>
{% endfor %}