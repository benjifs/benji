---
title: "Hack the Vote (not really though)"
summary: "summary goes here"
syndication:
- https://dev.to/benji/hack-the-vote-not-really-though-1hbk
tags:
- security
- votenow
date: 2019-09-24T17:25:47Z
---
**IMPORTANT INFORMATION:** I contacted the people involved with the show and they verified the issue and confirmed that they had other methods set in place to address this issue. The following is their response after describing the issue I had found:

>Thank you for the information. It is not our policy to provide details on security practices, but there are multiple layers of post-processing that address the issues you raised. We appreciate your willingness to share your findings and the opportunity to validate that controls were in place.

I asked about posting my findings and I received the following response back:

>While we appreciate your reaching out, we are unable to provide consent to the naming of a show or the companies involved. Voting processes are active and reserved for legitimate voters.  Thank you for your understanding.

I have removed the references to the company and the show from the post and the code.

---

I came across this while voting for an unnamed companys recent TV comedy talent show. I am not an active viewer of these type of shows, but given that a comedy group I follow was competing, I wanted to watch their performances to support them.

During the semifinals, they opened up the voting for the audience. The voting process required that I signup with an email and password. One dropdown and two checkboxes later I could finally vote. Their voting system is built in such a way that an individual email account can vote up to 10 times. This is performed with a simple enough slider and once you've set your vote, you submit and you're done.

That's where I thought it ended. I had completed my duties as a fan by casting a vote and there was nothing left to do. That is, nothing left to do but open up the developer console and see how the voting system worked.

I cast my vote a few more times to see how the requests were handled and on the surface it looked pretty normal. `POST` request with an encoded `Authorization` value and the URL encoded data as part of the query string. My first thought was that the `Authorization` value was based on the original "login" I did when I first got to the website so of course it would be tied to the email:password combination I used. But after two or three requests I noticed that the `Authorization` value kept changing.

Since the network requests weren't telling me much more, I went ahead and opened up the source code. After prettifying the code and finding the spot were the vote was being cast I was surprised to find out that the `Authorization` token was actually just an encoded version of the exact query parameters. I thought it was weird that they would ask you for a login but not tie that in any way to this voting `POST` request. I also thought there was no way I could modify the data and get a successful response. **I was wrong**.

I first tried changing the number of votes from 10 to 100. Failed. 10 to 5? That worked. The email address was also a parameter so I tried changing it to a fake email address I knew would not exist in the system expecting it to fail. It didn't. 

There is no way that vote counted. I created a new account with that fake email I just used and I was very surprised to see that my new account already had 10 votes for the contestant I had voted for. That means that even if an email address is not registered, it could still cast votes and have those counted.

The obvious next step now was to write a script that I could use to send votes from random emails. This would guarantee that the contestant I wanted to would win the competition.

The code is fairly straightforward as all that is really happening is that the data is passed through the [HMAC-SHA256](https://en.wikipedia.org/wiki/HMAC) hash function from [CryptoJS](https://github.com/brix/crypto-js) and the `POST` request is sent. I also added a helper function to iterate through a list of `n` emails to send the vote for each email.

A successfull response will look like the following:

```
{
    response_code: '20',
    votestring: '{"total":10,"L1":10}'
}
```
## What's next

After a few back and forth emails with the InfoSec people at the show, they assured me that this is not exploitable as:
> there are multiple layers of post-processing that address the issues.

Without access to their database it is difficult to see how they're addressing it. A few things come to mind:

* Assuming they have a table for registered users and users votes, they should be able to crossreference votes that are not made by "real" users.
* They could be logging IPs as well and count votes only for unique IPs.

Regardless of how they are getting around this issue to count votes, I do think that the real fix would be to actually issue an authentication token that is used to verify the voting requests in the future. This seems like an oversight from the group that designed the API but I can't think of any good reason why you would pass the email address as part of the vote instead of tying that to an authentication token.

There were two shows that had opened up the voting schedule at the same time and I was able to get success responses while voting for both of them so I assume this issue would be present on all other shows that require audience voting participation.

## Source

You can find the source code along with instruction on how to run it here:

[https://github.com/benjifs/votenow](https://github.com/benjifs/votenow)

