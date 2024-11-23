---
title: "How I configure my Git identities"
summary: "This may be overkill, but it works on my machine"
tags:
- dev
- git
date: 2024-11-22
---

> **Note**: I've had this post drafted for 3 YEARS!!! It's finally time to publish it.

I like to mess with my [dotfiles](https://github.com/benjifs/dotfiles) and every so often, I find out about a new way to do things and I spend more time than I should learning how to use it.

A few years ago I learned about [includeIf](https://git-scm.com/docs/git-config#_includes) for including specific files if some condition was met for `git`. The example that I first saw was doing:

```
[includeIf "gitdir:~/code/**"]
  path = ~/.config/git/personal
[includeIf "gitdir:~/work/**"]
  path = ~/.config/git/work
```

So that `~/.config/git/personal` is only included for `git` directories under `~/code` and `~/.config/git/work` is only included for directories under `~/work`. The contents of those included files varies but usually it contains your git identity, signing keys, etc. Here's an example of what that could look like:

```
[user]
  name = benji
  email = benji@work.com
  signingkey = ~/.ssh/work.id_ed25519.pub
```

That works pretty well but I usually organize all my code in `~/workspace` regardless of whether its personal, **work-1**, **work-2**, etc. I wanted to be able to configure git depending on where that repo actually lives instead of where the directory is in my machine. Then I found out about [hasconfig:remote.*.url:](https://git-scm.com/docs/git-config#Documentation/git-config.txt-codehasconfigremoteurlcode)!

This makes it so that I can configure git conditionally if the given remote URL exists for that directory I'm currently working in.

A few examples of what I do is:

```
[includeIf "hasconfig:remote.*.url:git@github.com:orgname/**"]
  path = ~/.config/git/config-gh-org

[includeIf "hasconfig:remote.*.url:git@github.com:*/**"]
  path = ~/.config/git/config-gh

[includeIf "hasconfig:remote.*.url:git@gitlab.com:*/**"]
  path = ~/.config/git/config-gl

[includeIf "hasconfig:remote.*.url:git@git.sr.ht:*/**"]
  path = ~/.config/git/config-srht
```

Now if I'm in a directory where the remote matches `github.com:orgname/**` it would use `~/.config/git/config-gh-org`, otherwise it uses the general config file for any other GitHub repo.

<hr class="sm" />

While that handles git identities, I still need to configure SSH keys separately to be able to `pull` and `push` to remotes. The simple version of my `~/.ssh/config` looks like this:

```
Host gitlab.com
Hostname gitlab.com
User git
IdentityFile ~/.ssh/gitlab.id_ed25519

Host github.com
Hostname github.com
User git
IdentityFile ~/.ssh/github.id_ed25519
```

The only problem with this is that in order to use a different `IdentityFile` for the same `Hostname` so that I could use a different key for repos under `github.com/orgname`, I'd have to use a different value for `Host`. So in my case I would add the following to my `~/.ssh/config`:

```
Host gh-work
Hostname github.com
User git
IdentityFile ~/.ssh/work.id_ed25519
```

Finally, to use that `Host` when I'm looking for a repo in `github.com/orgname`, I would add the following to my git config:

```
[url "gh-work:orgname"]
  insteadOf = git@github.com:orgname
```

So when I `clone`, `pull`, or `push` a repo that's under my work's org account I can do:

```
git clone git@github.com:orgname/project
```

and `insteadOf` would replace `github.com:orgname` with `gh-work:orgname` so that it uses the right info from my SSH config. It's a neat trick which I saw referenced in this [article](https://www.kenmuse.com/blog/ssh-and-multiple-git-credentials/#git).

<hr class="sm" />

Are there any issues with this approach? Is there a better way to do this? I'm not sure so please let me know as I'd love to learn and I'll update this post accordingly.

## References
- https://fundor333.com/post/2021/advance-git-config-and-ssh-config/
- https://www.kenmuse.com/blog/ssh-and-multiple-git-credentials/#git
- https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities
- https://stevenharman.net/configure-ssh-keys-for-multiple-github-accounts
