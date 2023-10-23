---
title: changelog
layout: layouts/page.njk
eleventyExcludeFromCollections: true
---

Last published: {{ today | dateString }}

## 2023-10-23
- Temporarily moved to Netlify. Automated outgoing webmentions will be broken for a bit.

## 2023-09-21
- Show "Post types" filter in feed page
- Make [/read](/read) page similar to [/watched](/watched)
- /read and /watched should show related posts if tagged [books](/tags/books) or [movies](/tags/movies)
- Switch to [Phosphor Icons](https://phosphoricons.com/)

## 2023-06-24
- <spoiler>This is a spoiler</spoiler>

## 2023-05-24
- 🥚

## 2023-04-10
- List movies watched by ratings:
	- [★★★½](/watched/rated/3.5)
	- [★★★★★](/watched/rated/5)

## 2023-03-01
- Update to [11ty](https://11ty.dev) v2.0
- Adding [/read](/read)s

## 2023-01-13
- new [/watched](/watched) page

## 2022-11-08
- Sending webmentions is now done through a shell script within a workflow.
	> Check [send_webmentions.yml](https://github.com/benjifs/benji/blob/main/.github/workflows/send_webmentions.yml) for more information

## 2022-10-14
- Updated workflow for fetching webmentions
	> Check [fetch_webmentions.js](https://github.com/benjifs/benji/blob/main/fetch_webmentions.js) for more information

## 2022-01-11
- Update to [11ty](https://11ty.dev) v1.0.0

## 2021-12-18
- Check and send for [webmentions](https://indieweb.org/Webmention) on every build
	> Check [webmentions.js](https://github.com/benjifs/benji/blob/main/webmentions.js) for more information

## 2021-11-13
- Add [about](/about) and [uses](/uses)

## 2021-11-05
- Moved this [changelog](/changelog) from [/now](/now) to its own page

## 2021-10-25
- Added [likes](/likes) and [bookmarks](/bookmarks)
	> Read More about [likes](https://indieweb.org/likes) and [bookmarks](https://indieweb.org/bookmark)

## 2021-10-17
- Moved the shortlink creation to its own plugin and published it on [npm](https://npmjs.com/package/eleventy-plugin-shortlinks)

## 2021-10-14
- Add [twtxt](/twtxt.txt)
	> Read more about [twtxt](https://twtxt.readthedocs.io/)

## 2021-09-28
- Moved this site's repo from [GitLab](https://gitlab.com/benjifs/benji) to [GitHub](https://github.com/benjifs/benji) and made it public
- Moved micropub endpoint from [GitLab](https://gitlab.com/benjifs/micropub) to [GitHub](https://github.com/benjifs/micropub)

## 2021-09-24
- [bnj.pw](https://bnj.pw) domain purchased
- Generate shortlinks for posts and notes

## 2021-09-09
- [tags](/tags) added

## 2021-09-01
- Started attending the [Homebrew Website Club](https://indieweb.org/Homebrew_Website_Club)

## 2020-05-24
- `curl -L benji.dog`

## 2020-04-15
- Started working on a serverless [micropub endpoint](https://gitlab.com/benjifs/micropub)

## 2020-04-10
- Joined the [IndieWeb Webring](https://xn--sr8hvo.ws/directory)

## 2019-10-24
- Moved to [11ty](https://11ty.dev)
- Adding [/now](/now) page

## 2019-10-23
- Hello [IndieWeb](https://indieweb.org). Adding [h-card](https://indieweb.org/h-card)

## 2018-11-28
- 🐰🥚

## 2018-03-27
- Added the [icon](/assets/avatar.png) for this site

## 2016-11-14
- First commit to my original repo on [GitLab](https://gitlab.com/benjifs)

## 2015-04-16
- [benji.dog](https://benji.dog) domain purchased
