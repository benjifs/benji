---
title: TODO
---

- Add mastodon link to posts that are published there
- Finish cleaning up webmention responses imported through brid.gy
- Should replies be `unlisted`?
- Move `eleventy-plugin-shortlinks` to netlify function
- Add `want` to [/watched](/watched)
- [TODO](/todo) page should get content from `tags:todo`
  - Content with todo should be unlisted?
- Update summary of posts imported from letterboxd
- Import all letterboxd watches using their [export](https://letterboxd.com/user/exportdata)
- ~~Generate `.opml` for [/blogroll](/blogroll)~~
  - ~~Add blogroll to `<head>` - see: [Blogroll Network Map](https://alexsci.com/rss-blogroll-network/)~~
- ~~Add width to poster images~~
- ~~Fix header styles~~
- ~~CSS stuff~~
  - ~~Default to light mode so icons looks ok with no CSS~~
  - ~~Remove inline styles and add to stylesheets~~
- ~~`code` blocks should wrap or scroll~~
- ~~Add `<comments>` to RSS~~
- ~~Add "Reply with webmention" and count to footer even if 0~~
- ~~Add info on how to reply to posts even if no webmentions~~
- ~~Add `latest.json` to use with webmention.netlify.app~~
- ~~Add `h2` for years in [/read](/read)~~
- ~~Combine contact and elsewhere~~

## Others
- https://ciccarello.me/drafts
- https://garrit.xyz/todo
- https://ragt.ag/todo
- https://dead.garden/blog/new-header-image--various-to-dos.html
- https://marisabel.nl/tasks.php
- https://anhvn.com/garden/website-tasks/

---

- Add to /about or /colophon: info about benji.dog and bnj.pw (Pacific Waters)
- Write follow up to https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities
- here be dragons
- ~~Unlisted should be RSS Club~~
  - Unlisted should not be RSS club
  - Private should be RSS club
- Archive page like this: https://weakty.com/archive/
- I like how this avatar is presented: https://hugo.soucy.cc/
```css
#hs.hcard .u-photo {
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
  float: right;
  margin: 1rem;
  max-width: 240px;
  shape-outside: polygon(50% 0,100% 50%,50% 100%,0 50%);
}
```

## Easter Egg
- https://nuel.pw/house/
  - Add a 🎁 emoji somewhere
  - When clicked, take to a new page that tells people to email you
  - Maybe send a postcard, stickers, or other trinkets

## TODO
- Standalone todo (https://www.manifest.app/)
	- host under subdomain
```bash
ssh -t SHATTERDOME 'vi ~/workspace/www/todo/todo.txt'
# nvim doesn't work. https://stackoverflow.com/questions/52263678/neovim-scp-doesnt-prompt-for-password
vi scp://[user@]machine//absolute/path/to/file.txt
function status-update() {
  T=`mktemp` && curl -so $T https://plan.cat/~mrus && $EDITOR $T && \
    curl -su mrus -F "plan=<$T" https://plan.cat/stdin
}
```
