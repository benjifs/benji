---
title: I'm Online Now
summary: I was missing MySpace's "online now" badge so I built my own
date: 2024-05-22T17:06:15.054Z
tags:
- projects
- this
---

You may have noticed my homepage now features an image which sometimes has a basic border around it, and other times it has a blinking <mark data-person="b">orange</mark> border around it. The orange border is meant to represent that I'm **online now**.

By **online now** I mean that I am at my desk sitting at my computer. I'm never at my computer unless I am working on something, personal or professional, but it could also mean that I'm in a meeting or available for a chat.

I've shown this to a few people before but since I had some questions about it I thought it would be helpful to have a write up on how I built everything I needed to get this to work.

> **NOTE**: Everything after this is going to cover the separate pieces of code I wrote so if that does not interest you, you can stop reading here.

### Table of Contents
- [Server](#server)
- [Client](#client)
- [Web](#web)

<hr id="server">

## Server

I don't use PHP a lot but here's what I came up with. When this part is called the following happens:
- Check if the token is set
- Check if it's a `PUT` request
- Check if the **token** matches my "secret token"
- Read and parse `status.json`, update the `lastSeen` key with the current time, and save that back.

```php
<?php

$TOKEN_HEADER = 'HTTP_X_TOKEN';
$TOKEN = getenv('TOKEN');

if ($TOKEN === null || trim ($TOKEN) === '') {
  http_response_code(500);
} else if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
  http_response_code(405);
} else if (!isset($_SERVER[$TOKEN_HEADER]) || $_SERVER[$TOKEN_HEADER] != $TOKEN) {
  http_response_code(401);
}
if (http_response_code() != 200) die();

$json = file_get_contents('./status.json');
$json_data = json_decode($json, true);
$json_data['lastSeen'] = floor(microtime(true) * 1000);
$json = json_encode($json_data);
file_put_contents('./status.json', $json);
```

<hr id="client">

## Client

I've been using [xbar (formerly bitbar)](github.com/matryer/xbar) for a few years, even contributing to a few [plugins](https://github.com/matryer/xbar-plugins) myself. Its a nice way to run a script ([many languages supported](https://github.com/matryer/xbar-plugins/blob/main/CONTRIBUTING.md#supported-languages)) and have that output display in the macOS menu bar. Everything is pretty boilerplate to how an xbar plugin works and the interesting part happens in the last few lines.

```bash
#!/usr/bin/env bash

PARAMS="terminal=false refresh=true shell='$0'"

if [ ! -f .online-now ]; then
  echo "△"
  echo "---"
  echo "Go Online | $PARAMS param1=online"
else
  echo "▲ | color=#00ff00"
  echo "---"
  echo "Go Offline | $PARAMS param1=offline"
fi

if [ "$#" -eq 1 ]; then
  if [ "$1" = "online" ]; then
    touch .online-now
  elif [ "$1" = "offline" ]; then
    rm .online-now
  fi
  exit
fi

[ ! -f .online-now ] && exit

# https://apple.stackexchange.com/a/103346
# $displayState is 0 when OFF and 4 when ON
displayState=$(ioreg -n IODisplayWrangler | grep -i IOPowerManagement | perl -pe 's/^.*DevicePowerState\"=([0-9]+).*$/\1/')
[ $displayState == 4 ] && curl -X PUT -H 'x-token: xxxxxxxxxxxxx' https://update.domain.tld
```

Because of the way macOS works, my computer wakes every so often and does whatever network requests it does in the background. xbar runs in the background too even when the screen is locked and off and because I wanted to actually only mark myself online if I'm on my computer, I needed to handle this case a different way. I found a few different answers but they did not work for me as they did not return what I thought to be the correct values.

```bash
# https://stackoverflow.com/a/1391162
# Does not work. $ssstate is always false
ssstate=$(osascript -e 'tell application "System Events"' \
 -e 'get running of screen saver preferences' \
 -e 'end tell')

# https://stackoverflow.com/a/66723000
# Does not work. $screenLocked is always false
function screenLocked { [ "$(/usr/libexec/PlistBuddy -c "print :IOConsoleUsers:0:CGSSessionScreenIsLocked" /dev/stdin 2>/dev/null <<< "$(ioreg -n Root -d1 -a)")" = "true" ] && return 0 || return 1; }
```

The following snippet actually returns the `idleTime` in minutes so while it could be useful for this case, it ultimately wasn't as clean as my chosen solution.

```bash
# https://apple.stackexchange.com/a/74394
# This gives you the idle time in minutes
# Could be used by saying only mark online if $idleTime is less than X
idleTime=$(( $(ioreg -c IOHIDSystem | grep HIDIdleTime | sed -e 's/[^0-9]//g') / 1000000000 ))
```

My chosen solution was actually to check the `DevicePowerState` and if its **ON**, mark myself online:

```bash
# https://apple.stackexchange.com/a/103346
# $displayState is 0 when OFF and 4 when ON
displayState=$(ioreg -n IODisplayWrangler | grep -i IOPowerManagement | perl -pe 's/^.*DevicePowerState\"=([0-9]+).*$/\1/')
[ $displayState == 4 ] && curl -X PUT -H 'x-token: xxxxxxxxxxxxx' https://update.domain.tld
```

<hr id="web">

## Web

The final part was to get that value and use it somewhere on my site. I don't really like adding javascript unless absolutely necessary and I couldn't really find a way around it for this case. Since I was already going to use javascript, I figured I might as well build it as a [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components).

```javascript
class OnlineNow extends HTMLElement {
  connectedCallback() {
    this.fetchStatus()
    setInterval(() => this.fetchStatus(), 60 * 1000)
  }

  get href() {
    return this.getAttribute('href')
  }

  get interval() {
    return this.getAttribute('interval') || (5 * 60 * 1000)
  }

  async fetchStatus() {
    const res = await fetch(this.href, { headers: { 'Accept': 'application/json' } })
    if (!res.ok) return
    const json = await res.json()
    this.setAttribute('value', json && json.lastSeen + this.interval > Date.now() ? 'online' : 'offline')
    this.innerHTML = this.getAttribute('value') === 'online' ? 'Online Now' : ''
  }
}

customElements.define('online-now', OnlineNow)
```

And then I can add the following to where I want it displayed and things should start working.

```html
<online-now href="https://status.benji.dog"></online-now>
<script src="/component/online-now.js"></script>
<link rel="stylesheet" type="text/css" href="/component/online-now.css">
```

As Web Components go, it doesn't have a lot going on but I like that its all selfcontained to this block of code. The `OnlineNow` component does the following:
- Loads the **status** from the `href` defined in the tag
- If valid, check if `lastSeen` was in the past *5 minutes*
- Set the `value` attribute with `online` if it is, offline otherwise
- Recheck every **1 minute**

I have some basic styling in `online-now.css` but I also added some additional styling to my `h-card` so that is visually different when online:

```css
details.h-card:has(online-now[value='online']) img {
  animation: borderBlink 2s infinite;
}
@keyframes borderBlink {
  from, to { border-color: transparent }
  50% { border-color: var(--color-b) }
}
```
