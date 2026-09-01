---
source: "DTC Podcast"
category: "DTC"
url: "https://podcasters.spotify.com/pod/show/dtcpodcast/episodes/Ep-340-Google-Ads-Q4-Psyche-Up--GA4-Gut-Check--AKNF-e29lbd2"
title: "Ep 340: Google Ads Q4 Psyche Up + GA4 Gut Check | AKNF"
date: "Fri, 22 Sep 2023 18:13:16 GMT"
fetched: "2026-08-29T17:34:15.055Z"
via: "whisper"
---

The Google ecosystem really does lend itself to full funnel marketing.
And I think if people are just doing search and shopping on Pmax,
they're really missing out on its full potential.
Google themselves, on that webinar I was on a couple of weeks ago,
they can see for anything that's priced over $100,
they're seeing the touch points to get people to buy is now $10 to $15 on average.
You've got to be reaching people multiple times at all the different parts of the funnel.
And you've got to be there because if you're not,
a competitor's coming in and somebody else has got to steal your lunch.
You definitely don't want that.
TikTok and YouTube ads.
Every Sunday, you'll learn about the science.
Think about CAC and contribution margin spreadsheet tutorials,
advanced ad analysis techniques, and interviews with elite media buyers.
You'll build your analytical skills every week.
The art.
Creative cheat codes, winning TikTok ad formats,
interviews with creative directors.
You'll get practical ideas to ship winning ads faster
and new ways to fix the brand performance divide.
Subscribe at motionapp.com forward slash thumb stop.
It's all killer, no filler.
I'm Eric, and we're here with Richard from the Pilothouse Google team.
And it's funny, we see people filling out our forms,
people filling out Pilothouse's forms every day.
And we're seeing a lot of people coming into Pilothouse specifically
with questions about GA4.
They want their GA4 instance audited to make sure they're getting the most out of it.
Where are we seeing people going wrong with GA4 right now?
Oh, gosh, right from the fundamentals of the data that's coming into it
through to how they're using the reports.
And yeah, there's a number of things.
So first up, I would say it's amazing to me,
although not surprising because a lot of people aren't technical.
So they're using Shopify.
And of course, Shopify and Google between them
made a complete heims of getting this thing set up.
So late in the day, Shopify announced that the GA4 integration
was going to be handled by the Google app.
But in the meantime, people have been kind of putting their own stuff together.
Maybe because you could actually link GA3 to a new GA4 property,
and it would kind of automatically populate.
But it wouldn't populate with conversion data or revenue or anything like that.
And then some people went, well, there must be something else out there.
And so some people went for the LFRs, the triple whales, the little datas,
and there's a couple of other ones out there.
And what actually we are seeing is a surprising number of times,
instances where the data is like double counting, triple counting,
because somebody else set up the Google app,
and then somebody else went and got this third-party thing,
and somebody else linked it to GA3,
and suddenly, bang, you're getting three lots of data coming in.
And they're like, why is Google Analytics 4 telling us
we've got three times the actual number of conversions that we have?
So that's the first thing is just make sure that the number of conversions,
purchases, conversion value adds up to what you're seeing in Shopify,
because otherwise, yeah, there's probably a double or triple counting thing
going on there very easily.
I think the next thing we see is that people are just like,
where do I get my report with my conversion rates
and basic stuff that they were getting in GA3?
And again, I think Google have rolled out a very poor set of basic reports,
and sure, you can customize them,
but a lot of these people, they don't have time,
they don't have the inclination to go in and customize.
They just want the thing spoon-fed to them,
which is not surprising.
They're business owners,
and they're more sort of high-level marketing people, whatever.
They don't have the time to do it.
So that ability to customize those standard reports
and turn them into things that you really want and need.
And by going into the customized report option,
go into your metrics,
and sitting there just waiting for you are things like conversion rate,
which is, why isn't conversion rate there by default?
And then useful things that actually weren't there in GA3,
like the number of first-time purchasers,
which are referred to as FTP in the metrics.
And I'm sure a lot of people are going,
FTP?
Isn't that some sort of technical protocol thing?
It's a racing company, I think, too.
Is it a racing company?
I don't know.
Yeah, I don't know what's going on.
Who knows?
So, yeah, so first-time purchasers are there,
which is obviously great,
because then you can really see the incremental growth
that a lot of businesses are looking for.
Average Revenue Per User, ARPU.
Look out for that one.
It's sitting in there.
And the whole bunch of detail on repeat purchasers,
so repeat purchasers within the last seven days,
within the last 14 days, within the last 30 days,
a lot of repeat purchaser info.
So there's a lot of good stuff in there,
but you've got to get into the customization
of the standard reports,
and then save your own new one
and add those to your collections on the side there.
So definitely that's the sort of second thing.
And then the third thing that we are seeing a lot of, Eric,
is people looking for data that's not there,
and they think, oh, you know, GA4 must be broken.
Well, it kind of is,
because we weren't seeing these issues with GA3.
However, what's going on,
if you look up in the top right-hand corner,
maybe it's, you know, one of the standard reports,
maybe it's an exploration report
that you've kind of done yourself,
but look out for the red triangle.
And it's even there on some of the basic widgets.
You know, if you go into, you know,
your home screen on GA4, you might see it.
But look out for those little red triangles,
because those signify that you're basically missing data.
Now, the missing data could be
either because of sampling or thresholding.
And I'll quickly explain those.
So sampling is where you've got,
you've probably got too much data.
You've asked it to, you know,
give me the last 12 months or whatever,
if you've got a really busy site,
the last three months.
And so Google has decided
that it's too much data for it to process right now.
And so, and if you just click on that red triangle,
it'll tell you whether it's a sampling issue,
a threshold issue,
or potentially both sampling and thresholding.
So if you see a sampling issue,
you pretty much bring down your date range.
And you should then see that change to,
you know, I've seen 30% of data,
you know, being used to kind of construct
the rest of the report.
So it's using sampling as opposed to actual data.
So narrow your date range down and go back into it.
And hopefully you'll see the red triangle either disappear
or at least the sampling part of it,
say that it's now using 100% of the data.
The other one is thresholding.
And this is trickier.
And this is all to do with privacy
and the fact that there's data in there.
There isn't enough data in there
that Google can't categorically state
that it won't uniquely identify a user.
And I think the chances of that happening
are really slim.
But anyway, I guess they're coming under pressure
from the EU
and all sorts of other organizations and initiatives.
So yeah, so they're applying a lot of thresholding.
And you'll see a lot of those triangles appearing on your reports.
To deal with these thresholding limits,
there's a couple of things.
One is the opposite of sampling,
is you can actually extend the date range.
You know, so if you're looking at the last seven days,
potentially, you know,
by extending that out to 14 days, 30 days, 90 days,
that might help.
Because obviously the more data,
the more likelihood of, you know,
you're going to hit those thresholding limits,
whatever they are.
So that's one thing you can do.
The second thing is within the admin section of GA4,
under the property settings,
there's this thing called reporting identity.
And in there,
you've got a couple of options
to do with how the data is being reported.
And the one to choose for,
I think the default one is blended.
And there's three options in there.
And the one that will kind of potentially help
with thresholding issues
is by switching it to device ID only.
By switching to device ID only,
you're going to help potentially get around
that thresholding issue.
Don't worry about, you know,
it's not a permanent thing.
You know, literally you can switch to,
you know, blended today.
And in an hour's time,
you can go and have a look at reports
by switching to a device ID only reporting identity.
And then you can go back an hour later
and go back to blended again.
It's not affecting the data.
It's just affecting the reporting of the data.
The other thing in and around this is Google signals.
So within Google Analytics,
there's one of the settings to do with the data reporting.
It's using this thing called Google signals.
And Google signals is basically giving,
you're giving, when you turn it on,
it's giving Google permission to,
you know, look at people's Gmail address
or whatever it might be,
and then go, okay, I knew who that person is.
And by default, then pick up on their age,
gender and interests,
which are in the demographics section.
So this is where you're likely going to run
into most of the thresholding issues.
And by turning Google signals on,
it's good in that you then can get
this demographic data and detail
coming through your reports,
say for age, gender and interests.
However, in doing so,
this is where you're going to run
into your thresholding issues.
So you could potentially turn off Google,
disabled Google signals.
But if you do that,
then you're going to lose your age and gender
and interests reporting.
So it's a bit of a trade-off.
I mean, I certainly wouldn't like to lose that information.
It's pretty key to top of funnel marketing.
And of course, the other thing you can do
is you can speak to your agency
and give them more budget
and let them get more people,
more data into the site.
Spoken like a true agency guy.
There you go.
Makes sense.
Those are some of the things we're seeing with GA4.
It's been interesting.
That sounds great.
And I think, yeah,
I think everyone in the audience,
like if you haven't,
if you can't figure it out,
you know, reach out to us,
not me, reach out to Richard.
We can help.
And I want to get into some Q4 prep stuff
that I think, you know,
your team is already,
you know, really thinking about here.
But I just was Googling Google ads
and what I'm always interested
in like what's coming up in the news.
And I saw there was a big thing
that Search Engine Roundtable
was reporting on yesterday
that an advertiser went on Twitter
on this rampage
because they discovered
that their targeting had been expanded
despite being opted out of the setting.
And Google's response was,
from time to time,
the Google ads team
runs incremental experiments
on campaigns to test the impact
of a proposed change,
which seems like,
that seems like a bridge too far potentially
where they're actively changing toggles
on your campaigns for their data.
Is this something we've ever experienced?
I haven't.
Although, you know,
sometimes when you're spending millions of dollars,
you know,
if a few tens of thousands went somewhere
that Google wanted it to go
and you might not even be aware of it,
you know, so, yeah,
I haven't explicitly seen it,
but I'm not surprised.
I mean, they're testing all the time.
Yeah.
Well, this Melissa on Twitter is quite upset
because the team confirmed
that they may not provide credit
or refund to this.
So it may be irrelevant
even if you did discover it,
but it might be worth kind of checking into
to see if this is something
they're doing more often these days.
Yeah, totally.
Totally.
Yeah.
No, I can imagine
I would be pretty miffed if,
you know,
particularly if you're on tight budgets
and, you know,
as an agency,
you're working with somebody
and your efficiency ratio
you're trying to hit is,
you know, 25%
and you're sitting at 24.9
and then Google suddenly decides,
oh, let's try this little experiment here.
And you're trying to explain that
to the client at the end of the month.
You know?
If you're listening, Sergei,
we better watch that
because we're watching you, buddy.
Okay, let's talk Q4 prep a little bit
on the Google side of things.
What stage of prep are we at for Q4 today?
Probably not as far along
as we really should be.
I was sitting in on a Google webinar thing
there a couple of weeks ago
and they already know
that people are researching
and some, you know,
a small number of people are buying,
but there's quite a number of people
who are already researching for Q4
because they've got the data.
They can see it.
And so, you know,
if clients,
if people aren't, you know,
actively now starting to think about Q4,
you're, you know,
they're missing out.
I mean, they totally are missing out.
And it's not necessarily that,
you know,
you need your, you know,
your bottom of funnel action campaigns
to be, you know,
to be in full flow right now.
No, that's not what we're talking about.
But we are talking about
trying to reach those people
who are already doing,
you know,
doing that research
and let's say a small number of people
who are starting to buy in
and, you know,
sort of beat that,
beat the rush.
But of course,
a lot of people are waiting
for Black Friday,
Cyber Monday,
Cyber Week,
whatever it's going to be called
around that time.
But yeah, you know,
if you're not getting into
that conversation,
if you're not part of that awareness,
that consideration phase,
you know,
with people right now,
then, you know,
the chances of them
actually buying from you
in due course
decrease considerably.
So it's really starting
to think now
about those top of funnel
awareness campaigns
are really where,
you know,
you want to be.
And of course,
you know,
as soon as you say that,
people are like,
oh, you know,
YouTube and, you know,
maybe,
maybe display the,
the forgotten,
the forgotten platform
within Google Ads
and the display network.
But it's not just that,
you know,
because you've got,
you've got search
and of course,
we all associate search
with, you know,
at least kind of middle of funnel
and usually bottom of funnel.
But,
but,
you know,
it's also got the potential
to be a really good,
you know,
top of funnel platform
because a lot of people
are bidding on
and, you know,
they want their keywords
and search terms to be
by my amazing blue widget today
sort of type keywords,
you know,
people are going to take that action.
But as you step up,
further up the funnel on that,
you know,
and people are researching,
you know,
blue widgets
or,
you know,
pink widgets
with,
you know,
with bells on.
Yes,
the intent is a lot less,
you know,
for buying right now,
but,
but they could be ready,
you know,
doing the research
and getting ready to buy
in,
in,
in Q4
and around that Friday,
Cyber Monday time.
So loosening your,
your search campaigns
or potentially setting up
new campaigns
and,
and,
you know,
moving away from your nice,
nicely performing middle
and bottom of funnel
and,
you know,
setting some budget aside
for,
you know,
for these higher up the funnel
terms and,
you know,
using,
using broad match
and,
you know,
I'm not saying put all of your
budget into there,
but,
you know,
potentially,
you know,
siphon off some of the,
some of the budget
and put it into there.
And once you get people,
you know,
who clicking on those ads,
you know,
then use your,
your audience building capabilities
within GA4
or within the Google ads platform,
whichever,
whichever you want to do,
but start to build those,
those audiences of people
who've clicked on the ads
and shown some kind of,
you know,
some kind of engagement.
And,
and in doing so,
when you're setting up those audiences,
a lot of people default
to the 30 day audiences.
Well,
you know,
30 days from now
is only going to be
October the 13th.
You know,
we're not going to be
at Black Friday yet.
So setting up
either new audiences
or probably the best way
you could extend
your existing ones,
but setting up new audiences,
you know,
60 day,
90 day audiences
and getting these people
in there
that you can then
remarket to
further down the line.
And Google's,
you know,
latest and greatest
campaign type,
the Pmax,
which we have,
which we've talked about before,
you know,
is another good,
good way to do that
because when you give it
all of those assets
in terms of
static creative,
video creative,
you know,
obviously you're throwing
your headlines
and descriptions in there.
You've almost certainly
connected your shopping feed.
So,
you know,
Pmax campaigns
can be all across the funnel.
And so,
you know,
letting them do their,
do their thing
in terms of
not just getting,
getting conversions today
and this week
and next week,
but really starting to,
to reach those people
who are doing
the high level searching
or potentially
it's using audience signals
to find people
in certain audience buckets
to,
to show the,
you know,
the top of funnel ads to
is definitely something
that people,
people want to,
you know,
I think when I'm telling
my,
my buyers
and my clients
that this is really
where they,
where they want to be.
And of course,
you know,
the best,
best platform
to do this on
is YouTube.
It's such a,
you know,
such an amazing platform
because even,
you know,
when people hit that,
skip out after five seconds,
five seconds of video
is,
is a pretty long time
to,
to try and,
you know,
engage people with
and by,
you know,
using that five seconds
carefully and,
and thoughtfully
and planning it out
and you can get your brand
in front of them,
you can get your,
you know,
the initial part of your pitch,
you know,
your top of funnel
awareness pitch
within that,
within that five seconds.
And obviously
what you're hoping for
is that they'll,
they'll watch longer
than the,
you know,
the five,
the five seconds.
So making sure
that you're linking,
you know,
well,
first of all,
you've linked your Google ads
to your YouTube channel
because when you do that,
you get the ability
to create audiences
of people
who view your ads.
So they,
they view the ad,
you can then
populate this audience
of people who viewed
maybe that specific ad
or all of your ads,
whatever you want to,
you want to set it up.
And obviously
in doing that,
then you could then
re-market those people.
So next month
you can show them
your nice middle of funnel
ad,
which explains
why,
you know,
your company
sells the very best widgets.
And then
in due course
when it comes to,
you know,
Black Friday,
Cyber Monday
and you've got
that amazing deal on,
then you get
the bottom of funnel
action campaign
and get that action
video in front of them.
You know,
yeah,
really,
really build,
really build that funnel
because if you're not
building that funnel now,
you know,
if you wait until
October or even,
you know,
we're still November,
you know,
your funnel,
your,
you know,
your bucket of people
that you're going to be
reaching is going to be,
it's just going to be less.
So if you don't,
if you don't start now,
you're not maximizing.
And cost way more.
And cost way,
if you're trying to build
your funnel in Q4,
it'll cost a lot more.
So build out these audiences
in advance.
A hundred percent.
You know,
and I'm not saying,
you know,
waste,
you know,
waste money.
It's not,
it's not wasted money.
If you're using,
you know,
the data you've gathered
from setting up observation audiences
with your search campaigns,
you're looking at your GA4 data,
you're looking at Pmax's
audience insights,
within,
within the Pmax campaigns.
There's so much information
now that you can glean
in terms of the audiences
that are likely to perform
best at the top of funnel.
You know,
so one,
you're,
you know,
your targeting is,
is really good.
And then obviously,
you know,
look at your,
look at your view rates,
look at your view rates to,
you know,
25% of the video,
50% of the video,
et cetera,
et cetera.
Your engagement rates,
you know,
those are the,
those are the things
that are going to tell you,
you know,
how audiences are performing,
how your,
your ads,
your videos are,
are performing.
And,
and,
and your audience sizes,
you know,
just watch those audience sizes grow.
Cause that'll,
you know,
ultimately tell you how your top of funnel
efforts are,
are going.
And yeah,
there's some,
some amazing things that you can do if you start,
you know,
if you start that process now.
And if you,
yeah,
if you really visualize that funnel,
it's something we,
we talk about like meta,
the meta team.
And I've been talking about a couple other podcast people that have come on
recently about how they're really structuring their ad accounts to have
very specific messages at top,
middle and bottom of funnel.
And I was,
I think we may have talked about this with Pmax,
but I'm curious when you're building your Pmax campaigns,
are you very clearly like trying to make sure that there is top,
middle and bottom funnel messaging and imagery in every Pmax campaign?
Or are you running Pmax campaigns at bottom of funnel,
middle of funnel and top of funnel?
No,
it's,
it's,
it's,
it's a conversion based campaign type,
you know,
first of all.
So it is trying to get conversions.
However,
it's,
it's not just a bottom of funnel campaign.
So we're absolutely a hundred percent where we're putting in assets,
as many assets as we can and making sure that we're going to be
those assets one cover off all parts of the funnel and to particularly on,
on video,
you know,
cover off all of the potential video types.
So,
you know,
our shorts,
our landscapes,
you know,
we're,
we want to make sure that we're putting in as many different variations of
the videos to cover off all of the potential devices and device types that,
that people are using,
but they're absolutely,
you know,
across the funnel campaign types.
And Google's starting to gather a lot of good data on sort of proving out the
background to that.
And if people are,
you know,
using P max campaigns,
think about,
you know,
how you're structuring the asset groups within those.
So,
you know,
the equivalent of ad groups on,
on search campaigns and other campaign types.
But if you're going to break out your campaign into multiple asset groups,
then structure them so that your,
your feed of products doesn't overlap within your asset groups,
you know,
split out your,
you know,
your products that have the best,
you know,
profit margins,
the best sellers,
you know,
if you're seasonal products,
if you've got,
you know,
if you're a sports shop and you've got ski gear and,
you know,
camping gear and tennis gear,
you know,
absolutely.
You know,
those are likely,
well,
one,
those are likely to perform differently in terms of performance,
but,
but obviously in terms of the assets that you,
you want to show,
you know,
you don't want to show,
you know,
tennis videos to people who are interested in outdoor gear and skiing gear and that
sort of stuff.
So,
so structuring your asset groups to reflect the products that you've grouped
together in your,
your listing groups,
um,
certainly another one of the key things,
one of the winning strategies behind,
um,
setting up,
setting up P-Mix.
It just helps you get strategically aggressive,
right?
When you can get aggressive on specific,
specific products.
Absolutely.
And we all know,
you know,
that marketing works best whenever you give the right message to the right
person at the right time,
you know,
and,
and,
um,
I think we,
you know,
we,
we do all get a little bit lazy and we're like,
ah,
you know,
let's just show that one video to all of those,
you know,
all of those people.
Sure.
You might get a decent response from it,
but I guarantee you'll get a better response if you split the people up and,
and,
uh,
you know,
and your videos reflect one,
the audience and two,
you know,
whereabouts they are on,
on the,
on the,
on the funnel.
I want to like display,
I come from display.
I'm one of the few people that has a long story,
a career in display marketing,
sadly,
but I wanted to ask,
so YouTube,
first of all,
it's such an amazing top of funnel for the Google ad suite.
What are you finding are the best creatives in YouTube for just specifically for that purpose?
Are we,
are we talking brand videos?
Are we talking UGC?
Are we talking more content,
less salesy based things?
Like what are the things on YouTube that are being most effective for filling the top of funnel
awareness funnel?
You know,
it's,
it comes back to the,
you know,
good old fashioned,
um,
marketing.
It's,
it's,
it's the lifestyle,
you know,
the top of funnel is the lifestyle,
you know,
and I,
and I was talking to actually to one of our junior buyers,
uh,
the other day and he was asking me,
he asked me the exact same thing.
He said,
what do we do for,
you know,
for the top of funnel?
And I said,
have you ever seen a car commercial?
And he was like,
yeah,
I said,
you know,
so,
you know,
you've seen the BMW commercials where the guys,
you know,
he's,
he's in the BMW and he's on this nice piece of road.
There's nobody else around and it's a twisty piece of road.
And he's,
you know,
he's driving this,
this,
this BMW around all these amazing twists and turns.
And then you watch the,
you know,
I don't know,
Toyota ads.
And,
you know,
there's a,
you know,
group of four young people in their twenties and they're going for a night out and it's all great fun.
And,
and,
you know,
it's those,
it's those lifestyle,
those aspirational videos,
um,
that really do,
you know,
really do work.
Obviously,
if you can inject some humor in there,
but that's what,
that's what gets people's people's attention.
They,
they want to,
they want to feel better.
They want to,
you know,
in buying your product,
how,
how can that,
how can that make them make them feel?
And,
and those,
those aspirational,
um,
you know,
videos are absolutely,
you know,
what,
what works,
what works best.
You know,
they engage and then say,
once you've,
once you get that engagement,
then you've got them into your,
into your funnel,
into your audiences.
I love it.
It's,
it's really,
it's,
it's like you,
every agency is going to tell brands to open up their top of funnel.
It makes sense,
but Google,
it's got to be one of the best platforms that's suited for it because of its ability to really narrow in on the bottom of funnel.
Like you,
you,
you can get so precise getting to people in various stages of intent through all the different Google ad suites.
It's like,
if there is one platform that you could afford to like loosen up your top of funnel,
it feels like Google because you know,
you can most likely make it up with efficiency on the lower part of the funnel.
If you're doing things right.
A hundred percent,
you know,
and I mean,
if you can,
you know,
and I highly encourage,
you know,
all of our clients to split out their budget,
have your bottom of funnel budget,
you know,
and here's the row ask that you're expecting from your bottom of funnel budget.
And then you've got your middle of funnel budget and,
you know,
your KPIs there are likely to be,
you know,
pre product views,
product page views,
P2P page views,
and add to carts.
And,
you know,
maybe we can get in some audience data,
but your top of funnel is going to be,
you know,
your metrics are say your views and your engagement and,
and your audience sizes and potentially,
you know,
tie that into your,
into GA four and have a look at your organic traffic,
your direct traffic,
your,
or,
you know,
search console,
have a look at your brand searches.
Um,
you know,
there's a,
there's a,
there's a whole bigger picture there,
but,
but you're right.
I mean,
Google,
the Google e-system really does lend itself to full funnel marketing.
And I think if people,
you know,
are just doing,
you know,
search and shopping,
and we'll include Pmax into that,
you know,
on,
on Google,
they're,
they're really missing out on,
on its full potential.
Um,
and Google themselves up on that webinar.
I was on a couple of weeks ago,
you know,
they can see that,
you know,
for anything,
what the threshold was,
was anything was sort of priced over a hundred bucks,
uh,
and upwards,
you know,
they're seeing the top,
the touch points to get people to buy is now 10 to 15 on average,
you know?
So if you think about,
if you think about that and you can see it in your,
you know,
your GA reports and stuff,
you've got to be reaching people,
you know,
multiple times at all,
all the different parts of the,
of the funnel.
And sure,
you know,
we can have,
we'd have a big discussion about,
well,
is it a funnel anymore?
Is it,
is it a circle or what the heck is it,
you know?
And sure,
I'll,
I'll take what anybody's offering.
Um,
but there's multiple touch points,
you know,
there's,
there's no doubt about that.
And you've got to be there because if,
because if you're not,
then,
you know,
a competitor is coming in and somebody else has got to sleep your lunch.
And you definitely don't,
don't want that.
You don't want that,
especially heading into Q4.
You also have a note here that there's a new product launching in October
called new,
like a new demand gen campaigns that are upgrade from the discovery campaigns.
What's that about?
Yeah.
So they announced those,
I think it was that,
that,
um,
Google marketing live thing back in,
may or whatever that was.
So yeah,
so the new campaign type called demand gen and what it's doing,
it's partly,
um,
taking over discovery.
So there's a beta going on right now.
It ends within the next,
I think within the next month,
they've said sometime in October.
So if you opt in and when this becomes live,
if you've got any discovery campaigns,
they will automatically transition to demand gen campaigns,
but demand gen won't just be discovery campaigns.
They'll also be top of funnel,
YouTube,
YouTube campaigns.
Yeah.
So really what,
what they're doing is they're launching a campaign type,
um,
literally to do demand gen for you.
Um,
and they're going to cover off whether that gets shown on the discover app or
discovery app within your,
on your phone or on YouTube.
And yeah,
so it's going to kind of handle all of that,
uh,
all of that for you.
So definitely,
you know,
look out for the demand gen,
um,
campaigns.
If you're not opted into the beta,
um,
they'll,
they're,
they're coming live to everybody in October and you'll see notices about
your discovery campaigns being,
being transitioned and stuff like that,
if you are running those,
but definitely something that you're going to want to,
to take advantage of.
And I think it's a little bit of a shame that they're waiting until October
to,
to launch them.
Cause I think now is the time to really,
um,
you know,
to take advantage of them.
However,
it is what it is.
Uh,
but I would say definitely jump on them when they,
uh,
when they launch in,
in,
in October and,
um,
yeah,
use them to build those,
those audiences prior to the end of November when,
when we get that big,
uh,
when we get that big surge.
You might as well do it because if you don't,
Google's probably going to do it on your behalf anyway,
as we've discovered from Twitter,
but,
uh,
you might as well test these things out.
Uh,
and now let's,
let's finish by talking the most,
about the most exciting part of this talk,
which is the Google display network.
Uh,
you've,
I,
I,
you know,
I think of,
uh,
was it Indra's net.
I feel like that's what display is to me.
It's sort of like,
you just want it.
I think of it as like a retargeting reinforcement.
You want,
you want,
you know,
your ads,
when you have someone in a funnel,
you want to have your ads,
follow them around and increase the desire kind of thing.
That's how I see display.
How do you,
how does Google see display ads and how are you using them to the most efficacy right now?
Yeah.
I mean,
Google,
Google sees display is still a very important part of its ad network.
And,
uh,
and obviously,
you know,
it generates a lot of revenue for the,
for the,
for the company.
Um,
so we're,
we're still 100% using,
using display and,
and,
and top of funnel,
you know,
it's not just a remarketing tool.
And,
you know,
I remember those good old days.
Uh,
I don't know how many years,
15,
20 years ago,
you know,
you start up a retargeting campaign and,
but damn,
you know,
they just,
they converted at like five to 10% and they were just awesome.
Um,
and those days obviously have gone,
um,
long gone,
but,
uh,
but no,
we are still using display for top of funnel and you can actually now,
you know,
you can embed,
you know,
video into your,
into your display campaigns,
whenever you go on to,
you know,
anybody who's showing,
um,
on,
on the,
uh,
Google ad network.
So CNN,
BBC,
New York times,
whatever,
you know,
those,
all these good platforms,
um,
you know,
a lot of them now are,
are happy to let video just,
you know,
show on,
on these display ads.
Um,
and obviously you can use HTML five to get some movement in there.
Um,
there's lots of different things.
So I think the good old days of,
you know,
static creative being the thing are definitely,
you know,
largely gone,
but if you can,
you know,
use them to static and either HTML five or,
or video within your,
your display campaigns,
you will see good results.
And of course,
it's a very cost effective way of reaching people at scale,
because a lot of people are now kind of ignoring it.
Um,
it got very competitive and now people have put budget towards obviously social media sites and,
and YouTube's,
you know,
the,
the end thing right now,
but,
but the display network is definitely still reaching a lot of people.
And we're using it profitably to reach people at scale.
So it's,
it's a,
yeah,
it's a very important part of our overall,
um,
overall strategy.
I can see how video lends itself more to it being really increasing its value at top of funnel.
Cause it's,
it's just,
it's storytelling at that point.
I,
uh,
it's funny.
I have a friend that works in video serving and he,
and he works for a company that serves a lot of the sports content that goes into mobile video and stuff like that.
And I've often thought in the video experience on the web,
it's the last place where you don't have any vertical scrolling.
Like even on Tik TOK,
you now watch a video there and you can easily,
uh,
you know,
scroll through multiple videos.
I wonder if,
if,
if they'll ever figure out a way for the mobile web or for video on the web to become more of that scrolling experience,
because I feel like that's just the way everything's going.
I think they will.
I think it'll,
I think it'll come.
Um,
I'm probably not,
not too far away.
Um,
I'm guessing,
uh,
but,
um,
probably a lot of people,
some people are sitting,
you know,
maybe listening,
watching to this,
watching this,
and they're thinking,
well,
you know,
I don't have the resources to create,
create video.
Well,
within the campaign editor and,
and there's other third party,
tools that Google provide for free,
you know,
it's really easy now to get,
to get video put together by,
you know,
it'll take static creative and sort of combine it all and,
and,
and make your,
kind of make your video for you.
Um,
and as AI proliferates,
um,
there's obviously going to be some amazing tools,
which will,
you know,
more than easily be able to create,
um,
you know,
video,
video content for you.
So,
um,
I don't think that's a,
you know,
a good excuse anymore.
Um,
you know,
I think anybody can put video campaigns together.
I think about Ryan McKenzie and true earth.
It was one of our first podcasts we did.
And,
and the very first video he made was something that he made an eye movie with just some,
some product images and even just panning on still images.
And he had a,
he,
he just had a compelling story,
a compelling narrative about their product.
And I think,
uh,
it's,
it's,
you know,
multi 10 million views at this point and launch them to the easily to their first seven figures.
So don't be afraid of getting your hands dirty on,
on making those videos.
Nice.
Richard,
thank you,
uh,
for chatting with us on the all killer,
no filler D to C podcast today.
My pleasure.
Thank you,
Eric.
And if you're in the audience,
just,
just get into Richard's safe hands here on the Google side.
If you're,
if you're confused about GA four and you're worried about Q four,
come on over chat with Richard.
It's going to be fun time.
All right.
And if you want a cutting board for Christmas,
you got to talk to Richard too,
because he makes the finest cutting boards known to man.
I'm going to be buying for some relatives this year.
So I'm helping grow your top of funnel for your cutting board business as well.
So thank you,
sir.
Oh,
there was one other thing we were talking about.
The,
the Google team is actually looking for a buyer potentially as well.
So I would just open this up to the audience.
If you are a free agent,
Google buyer out there,
you should also come talk to us because we're looking to grow the Google team.
Absolutely.
We'd love to love to hear from you.
Yes.
Nice.
Just say Eric sent.
Yeah.
Thanks for listening to today's episode.
If you're not getting the DTC newsletter,
you can subscribe for free at direct to consumer.co.
And if you want to learn more about pilot houses,
all killer,
no filler services,
take off to pilot house.co.
I'm Eric Dick,
and this has been the DTC podcast.
We'll see you next time.
Bye.




























































Bye.

Bye.







































Bye.
















!
