---
layout: "page.njk"
title: "colophon"
eleventyExcludeFromCollections: true
---

The repository for this website is public and can be found on [GitHub](https://github.com/benjifs/benji).

### Tools
To build the site:
- [11ty](https://11ty.dev)
- [scss](https://sass-lang.com/)

To create posts and deploy:
- [sparkles: a micropub client](https://sparkles.sploot.com)
- [Micropub and Media endpoint](https://github.com/benjifs/micropub)
- [Netlify Functions](https://netlify.com)
- [Digital Ocean](https://digitalocean.com)

To receive and send webmentions:
> **NOTE:** These work but I want to clean them up and make them their own plugin soon.
- [fetch_webmentions.yml](https://github.com/benjifs/benji/blob/main/.github/workflows/fetch_webmentions.yml)
- [send_webmentions.yml](https://github.com/benjifs/benji/blob/main/.github/workflows/send_webmentions.yml)

### Workflow
Whenever there's a `git push` to the `main` branch, the site is automatically deployed. Initially I set this up to test **three** different targets to deploy to:
- [Netlify](https://netlify.com) does this automatically
- [GitHub Actions](https://github.com/features/actions) builds the site and adds the files to a `gh-pages` branch
  - The same build that is added to the `gh-pages` branch is uploaded to a Digital Ocean VPS.
- After a successful deploy to Digital Ocean, the [send_webmentions.yml](https://github.com/benjifs/benji/blob/main/.github/workflows/send_webmentions.yml) action is run which will check for recent posts and send webmentions if it finds any.
- Once per day, [fetch_webmentions.yml](https://github.com/benjifs/benji/blob/main/.github/workflows/fetch_webmentions.yml) runs and checks if the site has received any webmentions. If it has, it will trigger a redeploy and add those webmentions accordingly.

> I plan to remove deploying to GitHub Pages and Digital Ocean and instead stick with Netlify as it seems to build quicker. A build takes under 1 min usually through GitHub Actions which isn't bad but I'd rather go with Netlify as it seems to deploy in about 20s.

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

### Changes

You can view all past important changes to this website in the [changelog](/changelog).

### Javascript

Javascript is used to build the site but other than some minor functionality, disabling JS should not impact the experience. **No cookies, tracking, or ads**.
