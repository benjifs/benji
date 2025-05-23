---
title: colophon
---

The repository for this website is public and can be found on [GitHub](https://github.com/benjifs/benji).

## Icon

<p><img src="/icon.svg" alt="benji.dog avatar" loading="lazy"></p>

I wanted a favicon and this is the best I could come up with. It's meant to read "benji" in [Elian Script](https://ccelian.com/ElianScriptFull.html).

I also made an 88x31 icon:
<p><img src="/assets/88x31.gif" width="88" height="31" alt="benji.dog 88x31 icon" loading="lazy"></p>

## Tools
To build the site I use:
- [11ty](https://11ty.dev)
- [scss](https://sass-lang.com/)
- [Phosphor Icons](https://phosphoricons.com/) ([MIT](https://github.com/phosphor-icons/homepage/blob/master/LICENSE))

To create posts and deploy:
- [sparkles: a micropub client](https://sparkles.sploot.com)
- [Micropub and Media endpoint](https://github.com/benjifs/micropub)
- [Netlify Functions](https://netlify.com)

To receive and send webmentions:
- [fetch_webmentions.yml](https://github.com/benjifs/benji/blob/main/.github/workflows/fetch_webmentions.yml)
- [netlify-plugin-send-webmentions](https://github.com/benjifs/benji/blob/main/plugins/send_webmentions/index.js)
	- [webmention.netlify.app](https://github.com/benjifs/wm)

## Workflow

I usually create new posts using [sparkles](https://sparkles.sploot.com) which sends data over to my [Micropub and Media endpoint](https://github.com/benjifs/micropub). If successful, this will `commit` and `push` to my `main` branch which will trigger a [Netlify](https://netlify.com) deploy.

During the process of a Netlify deploy, the [send-webmentions](https://github.com/benjifs/benji/blob/main/plugins/send_webmentions/index.js) plugin triggers which will:
- `onPostBuild`: After a build is successful but before it deploys it will compare the live [JSON feed](/latest.json) to the one from the current build. It will then save all the posts that need to be checked for webmentions for the next step.
- `onSuccess`: Using my fork of [remy](https://remysharp.com/)'s [webmention.app](https://webmention.app/), check every new post by calling:
	- `POST` - `https://webmention.netlify.app/check?url=`
	- [webmention.netlify.app](https://webmention.netlify.app) will check that URL and handle sending webmentions to all valid targets.

Once per day, [fetch_webmentions.yml](https://github.com/benjifs/benji/blob/main/.github/workflows/fetch_webmentions.yml) runs and checks if the site has received any webmentions. If it has, it will trigger a redeploy and add those webmentions accordingly.

## Changes

You can view all past important changes to this website in the [changelog](/changelog).

## Privacy

Javascript is used to build the site but other than some minor **fun**ctionality, disabling JS should not impact the experience. **No cookies<a title="Except this one" href="/🍪">*</a>, tracking, or ads**.
