---
title: changelog
className: timeline
---

Last published: {{ today | dateString }}

> This changelog is also available through [RSS](https://journal.miso.town/atom?url=https://benji.dog/changelog/) via [HTML Journal](https://journal.miso.town)

<article>
	<h2>2025-05-27</h2>
	<p>Moved from <a href="https://webmention.io">webmention.io</a> to my <a href="https://github.com/benjifs/webmention-receiver">webmention-receiver</a>.</p>
</article>
<article>
	<h2>2025-04-04</h2>
	<p>You can now get hints for all the eggs -> <a href="/🥚">🥚</a></p>
</article>
<article>
	<h2>2025-03-11</h2>
	<p>Styled code blocks to include line numbers.</p>
</article>
<article>
	<h2>2025-03-06</h2>
	<p>Adding a <a href="/watchlist">/watchlist</a> page for the movies I want to watch. Imported from Letterboxd.</p>
</article>
<article>
	<h2>2025-02-21</h2>
	<p>Adding a <a href="/wikipedia">/wikipedia</a> and <a href="/blank">/blank</a> page</p>
</article>
<article>
	<h2>2024-11-22</h2>
	<ul>
		<li>Updated this changelog page based on something I learned at <a href="https://indieweb.org/Front_End_Study_Hall">Front End Study Hall</a></li>
		<li>New 88x31 button. Now animated! <a style="display:inline-block" href="https://benji.dog"><img src="/assets/88x31.gif" width="88" height="31" alt="benji.dog 88x31 icon" loading="lazy"></a></li>
	</ul>
</article>
<article>
	<h2>2024-10-16</h2>
	<p>Adding a <a href="/stickers">/stickers</a> page</p>
</article>
<article>
	<h2>2024-10-15</h2>
	<ul>
		<li>Updated to <a href="https://11ty.dev">11ty v3.0</a></li>
		<li>Also took the opportunity to reorganize my <a href="https://github.com/benjifs/benji/blob/main/eleventy.config.js">eleventy.config.js</a></li>
	</ul>
</article>
<article>
	<h2>2024-08-15</h2>
	<p>Replace the current way of doing syntax highlighting with a <a href="https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/">Font with Built-In Syntax Highlighting</a>.</p>
</article>
<article>
	<h2>2024-06-27</h2>
	<ul>
		<li>Adding a <a href="/feeds">/feeds</a> page</li>
		<li>Adding a <a href="/slashes">/slashes</a> page</li>
	</ul>
</article>
<article>
	<h2>2024-05-24</h2>
	<p>Adding syntax highlighting for code blocks using <a href="https://www.11ty.dev/docs/plugins/syntaxhighlight/">11ty's Syntax Highlighting plugin</a></p>
</article>
<article>
	<h2>2024-05-21</h2>
	<ul>
		<li>Add <a href="/feeds">/feeds</a> page to link to all feeds available on this site</li>
		<li>Moved to <a href="/linkroll">/linkroll</a></li>
		<li>Add related info for <a href="https://alexsci.com/rss-blogroll-network/">Blogroll Network Map</a></li>
	</ul>
</article>
<article>
	<h2>2024-02-05</h2>
	<ul>
		<li>Restructured a bunch of things</li>
		<li>Add <a href="/blogroll">/blogroll</a></li>
		<li>Add <a href="/photos">/photos</a></li>
	</ul>
</article>
<article>
	<h2>2023-11-03</h2>
	<ul>
		<li>Making move to Netlify permanent for now.</li>
		<li>Replace <a href="https://github.com/benjifs/benji/blob/main/.github/workflows/send_webmentions.yml">send_webmentions.yml</a> with <a href="https://github.com/benjifs/benji/blob/main/plugins/send_webmentions/index.js">netlify-plugin-send-webmentions</a>.</li>
	</ul>
</article>
<article>
	<h2>2023-10-30</h2>
	<p>Clean up css</p>
</article>
<article>
	<h2>2023-10-23</h2>
	<p>Temporarily moved to Netlify. Automated outgoing webmentions will be broken for a bit.</p>
</article>
<article>
	<h2>2023-09-21</h2>
	<ul>
		<li>Show "Post types" filter in feed page</li>
		<li>Make <a href="/read">/read</a> page similar to <a href="/watched">/watched</a></li>
		<li>/read and /watched should show related posts if tagged <a href="/tags/books">books</a> or <a href="/tags/movies">movies</a></li>
		<li>Switch to <a href="https://phosphoricons.com/">Phosphor Icons</a></li>
	</ul>
</article>
<article>
	<h2>2023-06-24</h2>
	<p><spoiler>This is a spoiler</spoiler></p>
</article>
<article>
	<h2>2023-05-24</h2>
	<p>🥚</p>
</article>
<article>
	<h2>2023-04-10</h2>
	<div>
		<p>List movies watched by ratings:</p>
		<ul>
			<li><a href="/watched/rated/3.5">★★★½</a></li>
			<li><a href="/watched/rated/5">★★★★★</a></li>
		</ul>
	</div>
</article>
<article>
	<h2>2023-03-01</h2>
	<ul>
		<li>Update to <a href="https://11ty.dev">11ty</a> v2.0.0</li>
		<li>new <a href="/read">/read</a>s page</li>
	</ul>
</article>
<article>
	<h2>2023-01-13</h2>
	<p>new <a href="/watched">/watched</a> page</p>
</article>
<article>
	<h2>2022-11-08</h2>
	<div>
		<p>Sending webmentions is now done through a shell script within a workflow.</p>
		<blockquote>Check <a href="https://github.com/benjifs/benji/blob/main/.github/workflows/send_webmentions.yml">send_webmentions.yml</a> for more information</blockquote>
	</div>
</article>
<article>
	<h2>2022-10-14</h2>
	<div>
		<p>Updated workflow for fetching webmentions</p>
		<blockquote>Check <a href="https://github.com/benjifs/benji/blob/main/fetch_webmentions.js">fetch_webmentions.js</a> for more information</blockquote>
	</div>
</article>
<article>
	<h2>2022-01-11</h2>
	<p>Update to <a href="https://11ty.dev">11ty</a> v1.0.0</p>
</article>
<article>
	<h2>2021-12-18</h2>
	<div>
		<p>Check and send for <a href="https://indieweb.org/Webmention">webmentions</a> on every build</p>
		<blockquote>Check <a href="https://github.com/benjifs/benji/blob/main/webmentions.js">webmentions.js</a> for more information</blockquote>
	</div>
</article>
<article>
	<h2>2021-11-13</h2>
	<p>Add <a href="/about">about</a> and <a href="/uses">uses</a></p>
</article>
<article>
	<h2>2021-11-05</h2>
	<p>Moved this <a href="/changelog">changelog</a> from <a href="/now">/now</a> to its own page</p>
</article>
<article>
	<h2>2021-10-25</h2>
	<div>
		<p>Added <a href="/likes">likes</a> and <a href="/bookmarks">bookmarks</a></p>
		<blockquote>Read More about <a href="https://indieweb.org/likes">likes</a> and <a href="https://indieweb.org/bookmark">bookmarks</a></blockquote>
	</div>
</article>
<article>
	<h2>2021-10-17</h2>
	<p>Moved the shortlink creation to its own plugin and published it on <a href="https://npmjs.com/package/eleventy-plugin-shortlinks">npm</a></p>
</article>
<article>
	<h2>2021-10-14</h2>
	<div>
		<p>Add <a href="/twtxt.txt">twtxt</a></p>
		<blockquote>Read more about <a href="https://twtxt.readthedocs.io/">twtxt</a></blockquote>
	</div>
</article>
<article>
	<h2>2021-09-28</h2>
	<ul>
		<li>Moved this site's repo from <a href="https://gitlab.com/benjifs/benji">GitLab</a> to <a href="https://github.com/benjifs/benji">GitHub</a> and made it public</li>
		<li>Moved micropub endpoint from <a href="https://gitlab.com/benjifs/micropub">GitLab</a> to <a href="https://github.com/benjifs/micropub">GitHub</a></li>
	</ul>
</article>
<article>
	<h2>2021-09-24</h2>
	<ul>
		<li><a href="https://bnj.pw">bnj.pw</a> domain purchased</li>
		<li>Generate shortlinks for posts and notes</li>
	</ul>
</article>
<article>
	<h2>2021-09-09</h2>
	<p><a href="/tags">tags</a> added</p>
</article>
<article>
	<h2>2021-09-01</h2>
	<p>Started attending the <a href="https://indieweb.org/Homebrew_Website_Club">Homebrew Website Club</a></p>
</article>
<article>
	<h2>2020-05-24</h2>
	<p><code>curl -L benji.dog</code></p>
</article>
<article>
	<h2>2020-04-15</h2>
	<p>Started working on a serverless <a href="https://gitlab.com/benjifs/micropub">micropub endpoint</a></p>
</article>
<article>
	<h2>2020-04-10</h2>
	<p>Joined the <a href="https://xn--sr8hvo.ws/directory">IndieWeb Webring</a></p>
</article>
<article>
	<h2>2019-10-24</h2>
	<ul>
		<li>Moved to <a href="https://11ty.dev">11ty</a></li>
		<li>Adding <a href="/now">/now</a> page</li>
	</ul>
</article>
<article>
	<h2>2019-10-23</h2>
	<p>Hello <a href="https://indieweb.org">IndieWeb</a>. Adding <a href="https://indieweb.org/h-card">h-card</a></p>
</article>
<article>
	<h2>2018-11-28</h2>
	<p>🐰🥚</p>
</article>
<article>
	<h2>2018-03-27</h2>
	<p>Added the <a href="/assets/avatar.png">icon</a> for this site</p>
</article>
<article>
	<h2>2016-11-14</h2>
	<p>First commit to my original repo on <a href="https://gitlab.com/benjifs">GitLab</a></p>
</article>
<article>
	<h2>2015-04-16</h2>
	<p><a href="https://benji.dog">benji.dog</a> domain purchased</p>
</article>