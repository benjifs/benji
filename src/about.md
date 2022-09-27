---
layout: "page.njk"
title: "about"
eleventyExcludeFromCollections: true
---

## whoami
Born in [Guayaquil, Ecuador](https://en.wikipedia.org/wiki/Guayaquil) 🇪🇨 and now living in [Minneapolis, MN](https://en.wikipedia.org/wiki/Minneapolis). I primarily work as a native Android and iOS developer but also spend some time doing frontend and backend development.

## now

See [/now](/now)

## colophon

The repository for this website is public and can be found on [GitHub](https://github.com/benjifs/benji)

The website is built with:
- [11ty](https://11ty.dev)
- [scss](https://sass-lang.com/)
- [fontello](https://fontello.com/)
- [Berkeley Mono font](https://berkeleygraphics.com/typefaces/berkeley-mono)

And uses the following for creating posts and deploying:
- [Micropub and Media endpoint](https://github.com/benjifs/micropub)
- [Netlify Functions](https://netlify.com)
- [Digital Ocean](https://digitalocean.com)

Automated builds for branches get deployed to [Netlify](https://netlify.com) as well as using [GitHub Actions](https://github.com/features/actions) to deploy to production in a [Digital Ocean](https://digitalocean.com) droplet.

<details>
<summary>New post process</summary>
<pre><code>
     ┌──────────┐
     │ micropub │       ┌────────┐    ╔═════════╗
     │  client  │    ┌─▶│ github │───▶║ netlify ║
     └──────────┘    │  └────────┘    ╚═════════╝
          │          │       │
          │          │       ▼ 
          ▼          │  ┏━━━━━━━━━┓   ┏━━━━━━━┓
     ┌──────────┐    │  ┃ actions ┃──▶┃ build ┃
     │ micropub │────┘  ┗━━━━━━━━━┛   ┗━━━━━━━┛
     │ endpoint │           ╔════════╗    ║    ╔═══════════╗
     └──────────┘           ║ github ║◀───╨───▶║ benji.dog ║
                            ║ pages  ║         ╚═══════════╝
                            ╚════════╝               │
                                                     ▼
                                              ┏━━━━━━━━━━━━━┓
                                              ┃ webmentions ┃
                                              ┗━━━━━━━━━━━━━┛
</code></pre>
</details>

You can view all past important changes to this website in the [changelog](/changelog).

There is some JavaScript in this website but disabling JS should not impact the experience. **No cookies, tracking, or ads**.

## icon

<p class="img-block">
	<img src="/assets/icons/favicon-96x96.png" alt="benji.dog avatar" />
</p>

I wanted a favicon and this is the best I could come up with. It's meant to read "benji" in [Elian Script](https://ccelian.com/ElianScriptFull.html).

## webrings
- [IndieWeb Webring](https://xn--sr8hvo.ws/)

<!--
### interested
- [250kb Club](https://250kb.club/)
- [512KB Club](https://512kb.club/)
- [1MB Club](https://1mb.club/)
- [Merveilles Webring](https://webring.xxiivv.com/)
-->

## uses

See [/uses](/uses)
