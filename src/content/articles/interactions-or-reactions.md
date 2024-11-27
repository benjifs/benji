---
title: Interactions or Reactions
summary: Talking about webmentions and socialization in the IndieWeb.
date: 2024-03-05
tags:
- indieweb
- interactions
- reactions
- webmentions
---

I've been thinking about [Alex's excellent post about webmentions](https://alexsirac.com/webmentions-make-me-sad/) for the past few days but haven't found the right words to respond. I agree with a lot of the same points and have found myself facing similar issues in the past.

Webmentions on my site work through a combination of plugins that others have built, and even then, I've had to spend a significant amount of time figuring out the specifics that would make them work with my setup.

<details class="callout">
	<summary><b>Skippable</b> short technical overview of my webmentions setup</summary>

- Receive webmentions through [webmention.io](https://webmention.io/)
- Fetch webmentions once a day using a [GitHub Action](https://github.com/benjifs/benji/blob/main/.github/workflows/fetch_webmentions.yml)
	- Site rebuilds automatically with [Netlify](https://www.netlify.com/) if webmentions are found
- On every site build, run a [Netlify plugin](https://github.com/benjifs/benji/blob/main/plugins/send_webmentions/index.js) which checks recent posts
	- For every new post, attempt to send a webmention using my [fork](https://webmention.netlify.app) of [Remy's webmention service](https://webmention.app/)

</details>

But even when you get past the setup process, we still come down to content. It just might be my way of thinking but I try to [like](/likes) as a way of saying "I read this and agree with you" but there are times where a "like" is incorrect for that post and I don't have the right words for a full reply. I find myself sometimes even writing out replies and it feels like I'm adding extra words to meet a word count in a college essay. Nobody is saying this is how it has to be, but if its what we see everyone else doing its hard to not be hyperaware and try to make that comment much more worthwhile for the receiver.

> If we can not make technical barriers smaller, would it be at least possible to make social barriers lower?

[Sara](https://sarajaksa.eu/2024/03/interaction-on-the-web-my-addition-to-the-great-posts-by-alex-tracy-jo-and-bacardi55/) also brings up the extra challenge of feeling like a nuisance which is something I often find myself thinking as well. This is true for me in most scenarios but more so here where I really have to decide what I'm saying or doing is worth someone else's time. It's brought up earlier in the post too but I think it's interesting to **define** for ourselves what we want out of online socialization and how we want that to be accomplished.

> The check-in text message you send your old college roomie helps keeps your relationship alive*. The heart-eye emoji you send back to your sibling’s cute photo text reminds them you love them. The ‘lol’ you drop an online buddy for their clever comment is valuable too.

It wasn't until reading that part of [Tracy's post](https://tracydurnell.com/2024/03/01/indieweb-interactions-what-builds-connection/) that I actually noticed how most interactions we have are exactly that. Maybe it's just years of having these interactions be treated as a digital currency in most silos but outside of that, when there's nothing to monetize, these interactions are all but "meaningless".

> And if I was to take something away from this realisation, it is that we should use these tools and concepts the way we feel like using them, rather than wait for everyone to come around to a universal standard.

[Jo](https://dead.garden/blog/interactivity-of-personal-sites-and-webmentions.html) pretty much said it all. I'm also to blame for this since I spend so much time thinking about "the right way" of doing things rather than just going ahead and doing it. The great but also challenging thing about the [IndieWeb](https://indieweb.org/) is that we're all just trying to connect with each other even when our ways of getting there are all very different.

<hr class="sm">

All this to say, I like the idea of simple reactions to posts. I had seen "reactions" before in [GoBlog](https://github.com/jlelse/GoBlog/) (by [Jan-Lukas Else](https://jlelse.blog/)) and I'm sure in other places too. Looking a little further I found that the [Open Heart Protocol](https://openheart.fyi/) is already defining a way to send a single emoji reaction to a page and they even provide some good examples to get you up and running. I took those examples and extended it so nobody has to worry about the server component and can just add the reactions where they want them to be.

I'm not sure if this is a long term solution or whether anyone even wants this but I guess the only way to know is to try.

To add and view reactions on any page in your site, you can add the following:

```html
<!-- replace https://benji.dog with your page below -->
<open-heart href="https://corazon.sploot.com?id=https://benji.dog" emoji="❤️">❤️</open-heart>
<!-- if you want more than one emoji, add another one of ^^^ and change the emoji value -->
<!-- load webcomponent -->
<script src="https://unpkg.com/open-heart-element" type="module"></script>
<!-- when the webcomponent loads, fetch the current counts for that page -->
<script>
window.customElements.whenDefined('open-heart').then(() => {
  for (const oh of document.querySelectorAll('open-heart')) {
    oh.getCount()
  }
})
// refresh component after click
window.addEventListener('open-heart', e => {
	e && e.target && e.target.getCount && e.target.getCount()
})
</script>
```

and for some basic styling:
```css
open-heart {
  border: 1px solid #aaa;
  border-radius: .4em;
  padding: .4em;
}
open-heart:not([disabled]):hover,
open-heart:not([disabled]):focus {
  border-color: #fff;
  cursor: pointer;
}
open-heart[disabled] {
  cursor: not-allowed;
}
open-heart[count]:not([count="0"])::after {
  content: attr(count);
}
```

As long as the **base URL** that you use for `id` matches the one where you're adding this component to, it should work. If it doesn't, please [let me know](/contact). I have it limited to only accept a few emojis (❤️, 👍, 🎉, 😂, 😱, and 👀) but the only reason for that was that I wanted to make sure I could filter out unwanted emojis. I could always remove this limit or add more to the list if necessary.

## References
- [Open Heart Protocol](https://openheart.fyi/)
- [open-heart web component](https://github.com/dddddddddzzzz/open-heart-element)
- [GoBlog reactions](https://docs.goblog.app/usage.html#reactions)
- [tinylytics kudos](https://tinylytics.app/docs/showing_kudos)
- [todepond counter](https://www.todepond.com/wikiblogarden/tadi-web/lab/counter/)
