---
title: "Slack Team Notifications"
summary: "Slack notifications on the macOS menu bar with xbar"
date: 2019-05-25
tags:
- projects
- Slack
- xbar
- bitbar
---

<p class="img-block">
	<img src="/uploads/1632289020_slack.jpg" alt="Slack Team Notifications screenshot" />
</p>

After missing several Slack notifications, I decided to write a plugin for [xbar](https://github.com/matryer/xbar) (formerly known as Bitbar) to show my current unread messages in the macOS menu bar.

----

At first it was just meant to display the notification count for my work Slack but then I decided I also wanted to be able to have multiple Slack workspaces available. One other thing that I wanted to see on there was an easy way to mark a channel, conversation, or workspace as read.

There were a few hurdles along the way, specifically some changes in the [Slack API](https://api.slack.com/) and the way tokens worked. This was also before Slack updated their docs so it was fun to try to figure out the way some things worked as well as send over bugs and recommended doc updates to them.

Instructions to download xbar and the plugin can all be found in the [GitHub repo](https://github.com/benjifs/bitbar-slack-team-notifications).

I've built other small xbar plugins but those have really just been for internal use to dead with some annoying things I find about the macOS menu bar. It's pretty fun and fairly easy to write something for xbar so its worth taking a look if you have a need for it.

## Links

- [https://github.com/matryer/xbar](https://github.com/matryer/xbar)
- [https://github.com/matryer/xbar-plugins](https://github.com/matryer/xbar-plugins)
- [https://github.com/benjifs/bitbar-slack-team-notifications](https://github.com/benjifs/bitbar-slack-team-notifications)
