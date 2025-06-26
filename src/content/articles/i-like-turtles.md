---
title: "\"I like turtles\""
summary: "Drawing the IndieWebCamp logo with Turtle"
tags:
- turtle
- indieweb
date: 2025-06-17T14:35:00Z
updated: 2025-06-25
---

> Updated the code to improve the symmetry of the letter "C"

[Angelo](https://ragt.ag) added a [Turtle interpreter](https://ragt.ag/turtle) to his site. Here's my attempt at recreating
the [IndieWeb logo](https://indieweb.org/logo) with it:

![IndieWebCamp logo drawn with Turtle](/assets/images/turtle_iwc.png)

This is what it looks like when it's being drawn:

![Animated preview of the same IndieWeb logo from above being drawn](/assets/images/turtle_iwc.gif)

And finally, here's the code to do it yourself.

```
setwidth 4
penup
right 180
forward 150
right 180

setcolor #FF0000
pendown
repeat 2 [ forward 60 right 90 forward 20 right 90 ]
penup
right 90
forward 30
left 90
pendown
repeat 2 [ forward 60 right 90 forward 40 right 90 ]
penup
left 90
forward 30
right 90
forward 70

setcolor #ff5c00
pendown
forward 20
right 65
forward 60
right 65
forward 20
right 115
forward 75
penup
right 115
forward 30
pendown
forward 65
right 115
forward 75
right 130
forward 75
penup
right 115
forward 90

setcolor #ffb100
pendown
repeat 3 [ forward 18 right 30 ]
forward 6
right 90
forward 35
left 90
forward 6
left 90
forward 35
right 90
forward 6
repeat 8 [ right 30 forward 18 ]
```