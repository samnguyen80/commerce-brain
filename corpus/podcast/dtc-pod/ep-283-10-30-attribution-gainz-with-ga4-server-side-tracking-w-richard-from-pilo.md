---
source: "DTC Podcast"
category: "DTC"
url: "https://podcasters.spotify.com/pod/show/dtcpodcast/episodes/Ep-283-10---30-Attribution-Gainz-with-GA4--Server-Side-Tracking-w-Richard-from-Pilothouse-AKNF-e1vq6k0"
title: "Ep 283: 10 - 30% Attribution Gainz with GA4 & Server Side Tracking w/ Richard from Pilothouse (AKNF)"
date: "Fri, 03 Mar 2023 13:13:39 GMT"
fetched: "2026-08-29T19:50:11.317Z"
via: "whisper"
---

Server side tracking has come about because of the whole cookie list world that we're all
heading into. So when you do server side tracking, the data that was being handled by the cookies on
your browser is now being pushed off to a third party server. This server now becomes essentially
first party tracking to give you some stats on what we're seeing. Typically clients when they
go to server side tracking are seeing 10 to 30% increase in attribution to the various platforms.
So the amount of traffic that's being classified as direct and none is going down and we're seeing
this 10 to 30% increase in attribution for wherever you're sending your traffic from,
Facebook paid, Google paid, or wherever it might be. Is 2023 the year you launched the merch store
for your brand? If you're looking for a new revenue line and a way to increase brand loyalty
and LTV, you might want to consider it, especially when there's players out there like Printful that
make it easy to build your brand's line of merch without any of the operational headaches of inventory
management or stock forecasting. Printful's product options run the gamut from socks to hoodies to home
decor and everything super high quality with printing options that will look amazing with your brand's
design on it. If you've got merch on the mind in 2023, think Printful and go to printful.com
slash enterprise to start creating today. It's all killer, no filler. I'm Eric. This is the DTC
podcast. I'm here with Richard Clement for another absolutely riveting, but entirely necessary dig out
of Google analytics and GA4. I wanted to start with something basic. We don't have this on the notes here,
but I just wanted to start with anyone in the audience who's, who's newer that isn't maybe using
Google analytics. Like describe the stack for ad buying as you see it and the role of Google analytics
for someone maybe just starting out. Good question and riveting. Well, we'll, we'll, we'll do our best.
Um, I think it's that ability to have a source of truth. Eric is, is what I, what I view Google
analytics as, you know, when you look at Google ads, when you look at Facebook ads, when you look at
TikTok ads, whatever else you're doing, they've all got their own take on, on their conversions and,
and attribution, et cetera. So you need a source of truth. And for me, Google analytics is that,
is that source of truth. So it's kind of like my, my go-to place. If I'm looking at Google ads,
I'm going, okay, this is great, but you know, how is this looking in the, in the big picture? And,
uh, you know, Shopify and these other platforms have got, have got their, their own data, but Google
analytics goes that much deeper than, than what you get with Shopify or any com platform. So,
so for me, it's, it's, it's a really good source of truth. And it gives you, you know,
any number of views on your data that you, that you can figure out how to show and parse up. But
can you just give an example of like the most important sort of report or the most important
view that you would look at when looking at a Google analytics report for an e-commerce store?
I think my, my, the first place I always go to in GA is I go into the acquisition section.
I have a look at the traffic and the source mediums because I want to see where all the
traffic is coming from and how each of those source mediums is actually performing. So
the kind of the default report that you get has got your number of users, sessions,
bounce rates, conversion rates, revenue. Yeah. So kind of that, that one quick summary.
And if we're being, if we're going full newbie, we have to go back and be, because there's probably
marketers starting out that, that don't know about UTMs that don't use UTMs. Right. And in order to
get that source medium data at a raw level, you need to be making sure that every link you post has
UTM equals, you know, source me and source medium. So like if you're listening and you're a beginner
out there, there's so many sites out there that just can go help you easily populate your links
with, with all the, the, the source medium things to create your, your UTMs links properly. But it's
absolutely a prerequisite for making a Google analytics work.
Absolutely. I mean, tagging, yeah. And using the UTMs correctly because they are case sensitive,
you know, so, you know, if you, if you don't use them correctly, you'll end up with Facebook with a
capital F and with a lowercase F and all sorts of stuff, you know, so, so you do need to use it
correctly, but that is, you're absolutely right. Getting back to the basics, tagging everything,
email, Facebook ads, TikTok ads, you know, even links on your own site. You know, if you want to
see where people are going to getting, getting all of that property tagged, that is one of the secrets
for sure.
And you can go down to the ad level if you want to be really granular about it, right? You can tag all
the way down to different creative variables and all those things in the UTMs.
Yeah. Yeah. Yeah. Nice. Absolutely.
UTMs. Okay. So, and we, we covered this last time, but refresh my memory quickly about the big
changes in GA4 versus GA3. So GA4 is totally event driven, whereas GA3 was all about the session
and hits going really back, back in the day. So yeah, so GA4 is totally, totally event driven. So
that's the kind of the fundamental difference between the two platforms. And in doing so,
everything now has become a, has become an event. So even a page view is now an event.
And you're probably thinking, well, you know, how does that work? The good thing about having,
having events, and I was going to kind of touch on this probably a bit later, but you can then,
you can attach all sorts of parameters to events. So even the kind of the page view event,
there's all sorts of parameters you can now attach to a, to a page view event, which will tell you,
you know, the referring page, the URL of the page. Yeah. All sorts of stuff that you didn't used to be,
you didn't used to be able to. So it's, so that's the fundamental difference. And in doing so,
it actually has made Google analytics a whole lot better.
And what, what it's lost, I guess, because the session would be tied to the user, right? This,
there'd be a user agent and there'd be a session length of the, but because of all the,
the cookie apocalypse, they're losing that ability to tie it to the duration. So instead they're
trying to take disparate events and then use machine learning to tie those events into customer
personas. Is that a layman's? Yes. That's pretty good. Yeah. I don't want to get it. I don't want
to get too technical. Yeah. Otherwise, otherwise people will be switching off and, uh, and they will
say riveting. We did say riveting. We did say riveting. So let's just move into, let's move
into like a really tangible mistakes and opportunities you are seeing with some clients
who are moving over, uh, to GA4. Yeah, for sure. So first of all, believe it or not, Eric,
some people still have not moved to GA4. They've done nothing, uh, about setting GA4 up. So for the
people who've been living under, under rocks, um, GA3 will stop collecting data on the 30th of June or
1st of July. Um, so, you know, there will be no more data coming into your GA3 property, your UA property.
So, you know, if you haven't already, absolutely get onto it, get a GA4, uh, property set up.
Assuming you have, have set it up, I think the next biggest thing, um, although Google are now trying
to do something about this, which I'll come to in a second, but people aren't setting up their exclusions.
So for example, you know, if you've got a, an e-comm site and you're using shop, uh, pay,
you're using PayPal payments, you don't want traffic coming from there. You know, so people are on your
site, they jump off to shop.app to, you know, to pay, it comes back and suddenly Google analytics shows,
you know, this amazing conversion rate from this traffic source called shop.app. Well,
that's not a traffic source, that's your, that's your payment provider. So, so using exclusion lists
properly within, within GA4 is probably the next biggest, uh, kind of mistake opportunity that we,
that we see. People are kind of forgetting to connect up things like Google ads. So like UA, GA3,
um, GA4 has the ability to connect to certain properties. A lot of them of course are, are Google,
but forgetting to connect Google ads, um, is definitely something else, uh, that we, that we
see audiences, you know, if you're going to use, um, audiences for analysis, uh, and or kind of
retargeting, then, you know, Google analytics is a great place to do it. You know, you can do it
within Google ads and other, other places, but, but, uh, the GA is probably the best place to do it.
Uh, again, you know, using that kind of source of truth analogy. So, so setting up your audiences,
people are kind of forgetting to, to do that. And the other thing, just to come back to that,
um, what I said earlier about kind of Google analytics trying to help. So there is now Google
have launched this ability to connect your GA3 properties to your GA4, and it's now coming up,
um, automatically and says, do you want to connect this GA3 to this GA4? And what they're doing there
is they're giving people the ability to automatically populate, um, things like exclusion lists and
audiences and goals, um, that were in, in, in their GA3 property, um, and automatically bring
them over into GA4, um, which is, which is good potentially. Uh, but, uh, so just be careful
when you're, when you're doing that, um, and just make sure that everything is, is kind of populated,
but those were definitely the biggest kind of opportunities issues that we see when people
move over to GA4. When is AI just going to be able to do all this is my, is my one, I guess you may not
know that, but it seems like that, it seems like you just have an AI that just like crawls your site.
You put in your basic objectives of what you want to do in plain English and it just connects like a,
like one of those little matrix, uh, robots that climbs into Neo's belly, you know, probably not too
far away because if you, you know, you think about e-commerce, I mean, people are largely looking for the
same pieces of data, you know, what's, what's happening on my site in terms of conversion rates
and traffic sources and items and categories. And we're probably not too many years away from it.
I'll be glad, I'll be glad when it comes. But for now, you got to listen to this podcast,
get GA4 set up. And you mentioned the report, you know, the basic report, the, the, uh, source medium,
uh, report that allows you to see, uh, conversions by traffic source. What other sort of custom
reports do you think brands need to set up in GA4? I think there's three that I would kind of rec recommend.
So, so GA4 is definitely still missing some, some key things that are still available in GA3. Um,
but they're kind of, I don't know, hoping, expecting people to, to get in and, and sort of kind of play
around with the, with the reporting side, the explorations as they're called. And so there's three,
I think that I would recommend particularly for a lot of, um, DTC e-com sites. So the first one is,
is the funnel report. So the funnel report, as it, uh, kind of the name suggests, uh, is a report
that will kind of show you the steps that people take through your, through your site. And, you know,
for an e-com site, it might be something like the first, uh, the people that coming, coming into the
site. And then are they looking at, um, you know, key pages, possibly product pages might be a good,
um, sort of step two, and then maybe a step three would be an add to cart and step forward
would be a purchase. Um, so that would be a reasonable funnel. And there's actually a kind
of default report, um, in the X, in the explorations where you kind of put together your custom reports,
they've got a template gallery and one of them is the funnel report. And it does it,
it breaks that out quite nicely by a device category. So you can see this, the funnel data by,
uh, mobile desktop, tablet, smart TV, whatever. Um, so you mean device categories and that's a nice
little report, I think, particularly for, for e-com sites. Uh, the next one I would probably
recommend is the user lifetime report. Again, this is one of the default, uh, ones that's available in
the gallery. And the lifetime report is really interesting because it, uh, organizes it by,
um, medium, you can change that to source or whatever you want, um, in terms of the actual
data, but the default one then will show you that the total users and then the lifetime, uh, average
for those users from this particular, in this case, uh, I'll use medium as the, as the example,
and then it gives a lifetime engagement duration and the lifetime transactions. And it's a, it's a
really interesting report because you can very quickly see it's got a nice kind of bar chart
and you can very quickly see which of your mediums, you know, is providing that, you know,
that really good lifetime value. And I was looking at one for, for a client there the other day,
and we could see that people who come in from video, for example, while they're very small in
terms of the, the actual numbers compared to, you know, paid search, paid social, organic traffic,
whatever it might've been. Um, but the lifetime average was about 10 times more in terms of
dollar value compared to organic and, uh, and, and paid, uh, paid advertising. Um, yeah. And the
whole, you know, their, their, their engagement duration was, was significantly more on the, um,
and the average, uh, number of transactions was, was significantly more as well. So,
so that was a really interesting report, you know, that shows, you know,
Is that an example of one that was not available in GA3, but is available as sort of out of the box in GA4?
Yeah. I mean, there is, there are lifetime reports in GA3, but, but this one is just laid out,
just laid out that much better. And, um, it's just a really nice, really nice report. So,
so definitely that's the second one I would recommend. And then the third one, um, Eric would
be the conversions one. Again, this is very, very econ focused. The, uh, the conversions report
will show you your purchase event as it's called now, um, and your source, and you can have a look at
your, um, your conversions, your event value. Um, and it's got three tabs kind of by, by default,
and you can have a look at your, um, number of conversions by, by date is another one of the tabs.
And then the sort of the main tab is again done by device category. So your mobile desktop, tablet,
et cetera. Um, and you can see then the, the conversions, the event, the value of the conversions,
you know, if you really, if you want to add numbers to your, uh, events, not just purchases,
such as your, your add to carts and your begin checkouts and your email signups, et cetera, you
can, you can do that. Um, you can do that as well. So, so those would be the three kind of default,
um, reports that I would kind of recommend. And they're all in that nice template gallery. So the
funnel, the user lifetime and the conversions. Nice. Get them set up. Uh, and while we're going full
geek, let's go and talk about server side tracking, which is again, this, it's an alternative to the,
to the cookie world, which, which again opens up some certain possibilities. What's, what's
happening on the server to server tracking side and how maybe even back up, even for me as a layman,
just a little bit of elevator pitch on what server to server tracking is versus what came before.
Yeah. So server side tracking has come about because of the whole cookie list world that we're all,
we're all heading into. So whenever iOS 14.5 hit and Apple said, yeah, no, we're not, we're not opting
in, uh, people automatically, um, basically we're opting them out unless they want to opt back in.
And suddenly the lack of cookies meant, you know, a lot of, a big loss of data. So, so whereas
everything used to happen on your, your browser essentially is what cookie tracking is. Um, they've,
when you do server side tracking, the, the data that was being handled by the cookies on your,
on your browser is now being pushed off to a third party server. And so this server is now becomes
essentially first party tracking. So it's handling all of the data. There's no third party, there's no
cookies. Um, and it's a much better way of, of tracking. And just to give you some sort of stats on what
we're seeing with our, with our clients, typically clients, when they go to server side tracking,
are seeing between a 10 to 30% increase in attribution to the various platforms. So,
so the, the amount of traffic that's being classified as direct and none is going down and
we're seeing this 10, 10 to 30% increase, um, in attribution for, you know, wherever you're sending
your traffic from Facebook paid or Google paid or wherever it might, wherever it might be. So it's,
it's, it's, it is a very worthwhile option in terms of going, going server side tracking,
um, your options. So I think on the last podcast, I talked about a company called Elevar who are still
out there. So they're one of these companies that have got a, uh, it's got to improve tracking.
Essentially what they're doing is they're intercepting your traffic coming from Shopify. So
this would be a Shopify specific, uh, option. They intercepted, they use their server on the server
side, and then they send the data through to, to GA to GA4 in this particular example. Um,
so Elevar are still there. There's a company called Little Data who are very similar to Elevar,
who are doing server side tracking. Triple Whale, a lot of people probably have heard about, and
maybe they're using Segment, Segment.com. They're another company who are,
uh, as part of their offering or offering server side tracking. And of course you could try and do
it yourself if you've got the, the technical capability, um, set up your Google cloud server.
Um, and there's, there's lots of tutorials out there showing you how to do it. Um, but of course,
you know, setting up a cloud server has got, has got cost implications as well. So if you're probably a
small to medium size business and you're running something like Shopify, then one of those options I've
just mentioned there is probably, uh, something to go and go and explore. But definitely,
definitely worthwhile in terms of the, the better attribution that, that, um, that you will get.
Better attribution, better fidelity with your data. What I'm wondering is if you're having all
these like server to server connections, is there the opportunity to like send more data or to enrich
the data in different ways that wasn't possible in the cookie world? Um, or is it really just event
based? It's just going to send, it's just going to send cleaner events when things happen.
It's just, it just sends better. You know, it just tracks, it just tracks better. Um,
you know, people who are blocking cookies or people who are coming back again or whatever it might be,
it just gets better quality, just better quality of, of, of data. So, um, yeah.
Very cool. Anything else to add in the, uh, from the Google world, from the technical Google world?
Just kind of going back to fundamentals, Eric, what I would say was, you know, don't give up on GA3
right now necessarily. Um, couple of instances I would give for that. First was actually this past
week. Um, one of our relatively new clients came to us and said, you know, our GA4 data isn't adding
up to our Shopify data. And when we looked at it, it was because their subscription, uh, transactions
weren't being passed through to GA4. And upon further investigation, it was because the app,
who I shall not name, um, that they were using to handle their subscriptions doesn't still
support GA4. So it still only supports GA3. Um, so that might be an example where you'd want to stick
with, um, uh, I would, you know, set up your GA4 for sure, uh, because you're getting some data there
right now, but, um, you know, but if it's missing half of your conversion data, because half the people,
uh, subscribe, then, you know, it's not going to be that useful. So, so obviously that would be an
example to stick with, with GA3. Audit your tech stack and make sure that your partners are on the
same wavelength. Yeah. And even Shopify, I mean, Shopify still haven't natively gone to, to, um, to GA4,
you know, you go into that preferences section. It's, it's GA3 code that it still needs. Now,
apparently that's going to change this month, but it still hasn't. Uh, so, so that's a huge issue.
And of course, GA4 itself, uh, Eric still isn't, you know, still isn't the finished article. Um,
and they did this with GA3 because I'm old enough to remember, uh, whenever it launched, um, you know,
the beta versions were okay. And then sort of the last minute there was all of these reports suddenly,
suddenly appeared, you know, so if you're going looking for your, um, your attribution section in GA3,
is that all there in GA4? No, it's not because you can still only do model comparisons and conversion
paths, um, as opposed to some of the other stuff you can do in GA3, your conversion probability
section in your behavior part of GA3 still isn't in GA4. So there's still things that aren't there
natively, you know, you can go digging. Um, but I think if Google wants to get people, you know,
go into GA4 as their platform of choice, then they still need to beef up the, um, the kind of the
default reporting that's, that's there. I love that Google, just like the all killer,
no filler podcast is doing it live. They're moving at the speed of science and they're,
yeah, it's, it's all happening so quickly. It's, it's super interesting. And I would say until
there is an AI out there just to take all this over for you, you should just consider going to
pilothouse.co. You get to work with Richard. It's a no brainer. Uh, hope you guys enjoyed this
podcast on GA3, GA4. Uh, we'll be back with technical updates on all these platforms. Richard,
thanks for coming on all killer, no filler. You're very welcome. I hope people find it
riveting. Thanks for listening to today's episode. If you're not getting the DTC newsletter,
you can subscribe for free at direct to consumer.co. And if you want to learn more about
Pilothouse's all killer, no filler services, take off to pilothouse.co. I'm Eric Dick,
and this has been the DTC podcast. We'll see you next time.
Bye.
