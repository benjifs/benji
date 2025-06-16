---
title: "TRMNL Metro Transit plugin"
summary: "I got a TRMNL and immediately wrote a plugin to get public transit info for my local bus stops"
tags:
- projects
- public transit
- trmnl
date: 2025-06-16T13:07:47Z
---

I recently got a [TRMNL](https://usetrmnl.com) since I wanted an e-ink display to function as a dashboard for our home
calendar, picture frame, and other things. Initially I wanted to set this up using an old kindle but even after going
through the process of jailbreaking it, I was unable to get this dashboard functionality working.

The TRMNL allows developers to write plugins which requires an additional purchase to unlock the [Developer edition](https://usetrmnl.com/blog/developer-edition).
I wasn't quite sure I wanted to commit to the whole thing but I learned that I could use [trmnlp](https://github.com/usetrmnl/trmnlp)
to develop plugins locally, and if successful, I could go ahead an purchase the frame and developer add-on.

The first thing I wanted to add was a plugin to get updates from [Metro Transit](https://www.metrotransit.org/) so that I
could easily check what my local bus stops next bus was. This is what it looks like:

![Screenshot of the TRMNL showing the next buses scheduled for stop 13207](/assets/images/projects/trmnl-metrotransit.png)

I had done a version of this before years ago for the [Pebble smart watch](https://en.wikipedia.org/wiki/Pebble_(watch))
which used my location to find nearby stops and show me the next buses scheduled for them. I never wrote about it or released
the code for it. Luckily, the [Metro Transit API](https://svc.metrotransit.org/swagger/index.html) is very easy to work
and once I figured out where that data was going, all I needed to do was write the [Liquid templates](https://help.usetrmnl.com/en/articles/10671186-liquid-101)
to display the information in a format that would most match the UI Metro Transit uses on their bus stops.

I'm very happy how this looks and I have all sorts of ideas for more plugins to write.

If you have a TRMNL, live in the Twin Cities, and like our local public transit system as much as I do, you can install this
plugin by forking the [plugin](https://usetrmnl.com/recipes/95919) and adding your stop ID. You can even do multiple stops
by forking it multiple times and adding a new stop to each of them. The [code](https://github.com/benjifs/trmnl-metrotransit)
is public as well if you'd like to check that out.

## References
- [TRMNL Developer Docs](https://docs.usetrmnl.com/go)
- [Metro Transit API](https://svc.metrotransit.org/swagger/index.html)
- [Liquid 101](https://help.usetrmnl.com/en/articles/10671186-liquid-101)