---
source: "B2B Commerce UnCut"
category: "B2B"
url: "https://oroinc.com/ecommerce-podcast/"
title: "Dock to the Future: AI, Freight and Customs with Jack Moberger of DocUnlock"
date: "Fri, 14 Mar 2025 07:20:03 -0400"
fetched: "2026-09-01T13:23:14.096Z"
via: "whisper"
---

theoretically, I should use them for whatever I need. But at some point, I'm going to have
some very specific pinch point where I need something and I can't get it from them. So
I'm going to go try and find it. Welcome to B2B Commerce Uncut, a journey through change.
On this podcast, we have honest, hard hitting conversations with thought leaders, distributors,
and innovators in digital commerce and transformation. We explore not only the
success, but also the challenges that manufacturers, distributors, and wholesalers can face in achieving
successful digital transformation for their companies. This episode is brought to you by
Oro, a leading innovator and provider of customer-driven, powerful, and connected open-source
software for B2B digital transformation. Oro seeks to build long-term, trustful relationships with its
customers, integrators, developers, and technology partners by empowering people with the best tools
to digitalize their business. Find out more at oroinc.com. That's O-R-O-I-N-C dot com.
And here's your host, Aaron Sheehan.
Welcome back to the B2B Uncut podcast sponsored by Oro Commerce. I am still your host, Aaron Sheehan.
And with me today is our first, no, not our first. We've had a couple of Jacks on, I suppose. I think
you're the second Jack that I have recorded an episode with. Jack Moberger. Am I saying that right,
Jack? You are saying it right. And as common as the name is, I'm amazed I'm only the second.
Yeah, I think, I don't know if it's a generational name, but I don't see a lot of them. But yeah,
you are the second. The first Jack we had on was, I don't want to generalize,
but he was definitely older than you by a bit. Yeah, that's an old school name.
Yeah, it's an old school name. So clearly your parents were kind of classicists, I guess. They
liked the old. Well, Moberger's so long, it's three syllables. My two brothers and I ended up
being Jack, Ty, and Chad, all full names, because that just seemed like a lot to spell, I think,
for like a little kid. That's really well thought out. That's a good strategy. So Jack,
I want to let you have an interesting bio in the B2B space. I want to let you introduce yourself
and tell everybody who's listening who you are, why they should care what you think,
and also why in your LinkedIn bio, you have the phrase, corporate poly crisis is my happy place.
So maybe if you could start, if you could start by the brief bio and introduction,
and then maybe answer what the hell that means. That'd be great.
Yeah, of course. Thank you very much for having me here. And I love the bot and I've been listening
for a long time. But my name is Jack Moberger. Obviously, I live in St. Petersburg,
Florida with my wife, who is also in software sales. And our little dog named Fisch, who is named
after a meme. We can get into that later. But I love rollerblading around St. Pete, posting photos
to Instagram, reminding people there are places you can see dolphins on a daily basis when they get
too grumpy and cold this time of year. But I grew up in finance. So studied finance at Ohio State,
went to GE. After that, spent a bunch of time in corporate FP&A, sort of on the large corporate side.
And as I was there, eventually, I ended up moving over because I lived in Boston to software,
where since then, I've basically just been chasing leverage and trying little things
as we sort of revolutionize business models across a whole bunch of different industries.
Professionally, getting back kind of into the corporate poly crisis thing, I get a kick out of
short people that like the things that they think are obvious. Usually, they're not like obvious,
but they act like they're obvious. And often they're wrong and not just wrong, but like ridiculous.
And corporate poly crisis is this term that I kind of adapted or stole from pop culture a few years
ago. The term poly crisis got coined by some media outlet. It was trying to describe the feeling of
like being on the brink for a new reason, every single day and, you know, all of the stuff going
on in the world politically and socially. I'd say corporate poly crisis in kind of a tongue in
cheek way to describe the feeling that things are just crazy at work and everybody's chasing after
some terrible outcome that they're trying to avoid and nobody's happy. They're all running around grumpy.
That makes no sense to me. And almost every real business problem worth addressing has been solved
something like 57 different ways. And the roadmaps are all published online and accessible with natural
language at this point. So you just have to know what to ask. And I think people get themselves all
kind of tied up. So for me, that place is very comfortable because usually all that's missing is
context. And I think the world of LLMs has taught us a lot about context and how important it is to get
good answers. But, you know, maybe it's just my tongue in chief way of telling people they need to read a
little bit more. Well, that always goes over well as a consultant, I found.
Exactly. Yeah. The change management piece of that is always the sticky bit. I was Googling
the crisis as you were speaking. And the AIO, the helpful AI overview says that the term was first
used in 1999 by a pair of French philosophers. So I think actually it should be properly pronounced
the poly crisis. Perhaps my French general manager here is if he's listening to this podcast will give me
feedback on my accent. And my former team from El Royo will be right behind him.
Of course. Well, perfect. So that is a great way of sort of segueing into Algolia. So you mentioned
them. That's where I first ran into you. So I saw you speaking, I think it was a B2B online,
probably Chicago, maybe Orlando. They all sort of run together after many years. You were sort of
titled a B2B practice leader at Algolia. And you were talking about, I believe, product search and
discovery, as you might expect from Algolia. For anyone listening who's not familiar, is a French-based
search and discovery vendor that's been in the space for a long time. I mean, I implemented Algolia
10 years ago when I was an engineer. Like, it certainly got the pedigree. But the title that you
had, B2B practice leader, was really unique to me in search and discovery vendors. And we had a
previous guest on, Jason Hine, who had kind of a similar sort of title at and role at Bloomreach.
But you both sense he's not there anymore. You're not there anymore. And that title was not as nearly,
as I can tell, backfilled by somebody else. So I could absolutely be wrong about that.
So I am super curious, like, what is it about B2B that is so difficult for search and discovery
vendors? Why don't more companies keep a sustained focus on this area? And maybe talk a little bit
about what that, what B2B practice lead meant in practicality for you at Algolia.
Yeah, totally. Well, so first of all, Jason is like a brilliant guy and so much fun to be around.
So awesome that you had him on the pod. And I think I listened to that episode. It was great.
But I think there's some truth to this statement about sustainable focus. But first of all, I kind
of want to challenge it. So I think that B2B is like this sort of ridiculous alliance of convenience
among this group of companies that have very little in common with each other, except for the fact
that they sell to this customer who happens to be a company at the end of the day. So like in the
beginning of the internet, that was kind of all that mattered, because things were super rudimentary.
And of course, this is just like a massive chunk of the economy. And even just between like a
manufacturer and a distributor, for example, you're covering so many diverse business models.
Even just at the B2B online conference, you'll run into Home Depot, some manufacturer of like a
specific industrial laser that costs $289,000, as well as Wattsco, who sells HVAC equipment,
and then Delta Airlines trying to get people to book corporate flights. And I think if I want to
answer the question, honestly, like there just aren't that many people in the world who have
the level of business context required, like Jason, to speak to the whole group of audience that sits
inside of that group in like a very compelling way that resonates with all of them.
And that's why you get like these extremely vague messages about personalization and buyer experience
and all the things in the market, right? And the only thing the marketers can say that makes sense
to all of those different people in any way is like, you must be personalized. Okay, great.
What does that mean?
Yeah, exactly. Like what is that even, you know, for me, personalizing it, the ability to buy flight
tickets is very different than personalizing my journey to buy a wave. So the people who are really
good at this job, like Jason, they can kind of go like up and down the altimeter
and speak broadly about these business challenges and then jump into individualized contexts that
somehow like resonate with everybody in the room across all these different industries as well.
And I think it's just really hard to do that. And it's a bit ridiculous and like inauthentic
to call somebody a B2B practice leader if they can't do it. And you for sure see those people as
well walking around the conference, you sort of like speak in platitudes and then walk away and
nobody remembers that experience. So if I had to make a prediction about the future,
especially like the way that things are going with AI, I think you're probably going to see sort
of like a broad based rejection of the idea that you even need to speak to B2B, which is like two
thirds of the entire global economy as like this one specific audience, you probably have to go
further down the categories. And I think what's driven that is, is that like the pie has grown.
So it's not just like put your checkout online, create a commerce experience, you need a website.
Like, yeah, when everyone needed to hear that, it made a ton of sense. Now I think it's getting to
like a level of sophistication where you actually want to go speak to the laser manufacturers or
the airlines or the Home Depots of the world very, very differently. And I think you're probably just
starting to see that kind of be consumed into a traditional product marketing function, like the
world of B2C, where of course, everybody would assume it's ridiculous to have a B2C practice leader.
Got it. That's a really interesting show. And I think I honestly would love to follow up with you
offline on this topic, because this is absolutely my daily life and something I've observed for a long
time. I completely agree that B2B is broad and it encompasses a lot of different models, a lot of
different products, a lot of different audiences. And certainly what I would say from an ecosystem
standpoint is that a lot of software vendors like Aura and others are seeing the amount of
opportunity in B2B. The difference for us, right? I mean, that was literally what Aura was built to do.
Like, that's not a pivot for Aura. That's always for the last 12 years, that's been Aura's focus
is all the different ways and flexibility that our customers need to transact digitally,
right? To digitize information and processes and then get paid online. For a lot of other
vendors like the Algoldius, like the Bloom Reaches, like the other sort of e-commerce platforms out
there, they're all starting to, they're all having to learn to speak this language after I think not
being sort of deliberately constructed in this market. They are trying to come into this market.
And that's why you see a lot of fake platitudes, because it takes a long time and a lot of,
you need to have dug the coal in order to be able to speak about digging the coal. And if you haven't
dug the coal, you can't really talk about it. That's interesting and worth a longer conversation.
So I really appreciate that explanation though, because I think it goes some way to
describing the current landscape of what B2B is, because I've had a conjecture now for a while that
most of the people who listen to this podcast and be really interested in comments and email from
people who are listening, don't necessarily think of themselves as being part of a group of B2B.
Exactly.
That's a description of a sort of a channel or a description of a business, but that's not
necessarily a description of their business model and what the value that they see that they provide.
That person would say, well, I manufacture high-end lasers for scientific research, right?
They're not thinking I'm a B2B man, I'm a manufacturer selling B2B. Like the selling point is
almost less relevant than the product that's being produced.
And there are huge implications of that, right? Like if you think about the physical experience
of selling those goods, it is like extremely differentiated. So you definitely do not have
the same experience walking into a physical Home Depot store as you do walking the factory floor with
somebody who's manufacturing these lasers, making your configuration choices and running test runs
and trials, et cetera. It's actually much more similar in that case to kind of buying software.
And so I think you're just going to see that the online experience starts to catch up.
Now that everybody's got, you know, a site, a form and an ability to check out conveniently online,
you're going to need to see a lot more focus for those high-end configurable products on exactly
that kind of experience. And everyone on the more transactional individual goods side
going to be selling things very similar.
Like, yeah, totally agree with that. I want to move forward because you're not at Algolia anymore.
Yeah, true.
It's a true story. Would you switch? Switch roles?
Early in November, I had a colleague actually from Algolia who had joined up with a friend of
his from previously Flexford to start this new company, Doc Unlock.
Got it. Okay. So you are at a place called Doc Unlock. We obviously, we spoke before this recording
and I spent a little bit of time on the Doc Unlock website. And of course, you're linked in.
The world of freight forwarding and brokerages are, is sort of fascinating to me. I'm going to read off
your LinkedIn description of your job. And then I want you to translate this a little bit. So you
have posted on your LinkedIn in describing Doc Unlock. We sort through, digitize, find typos,
and extract cross-check reference numbers from each doc, just like a person would do. We check the
totals, make sure the counts add up, and ensure the right units are used to declare weight and quantity.
We ensure consistency on HS codes. We drop the end output directly into your ABI,
and your CHPs can review and submit the click. So without describing Doc Unlock specifically,
the process that you just described, you are digitizing a process that is not digitized,
I think is what I am extracting from that paragraph. What does the process work like today
for the average broker or freight forwarder, this workflow that you're describing? What does that
mean in English? Yeah, totally. And you can tell that I'm talking to somebody very specific in that,
in that blurb, huh? So, okay, let's do this. So start, I think, with the idea that every business
that makes yourselves a physical thing these days is an international business. They have a supply chain
across the world, but they're also operating to some degree on a just-in-time basis. So that means lots
of small, fast-moving parts are going over and back along the border, all over the place.
So our audience can probably really feel this distinction because they're familiar with the
distribution model. So in the old world of customs, you do demand planning, then you import
things in bulk wholesale, you stick it in a warehouse, and then you sell it for profit to a
bunch of people in the US, and you start over and you do it again. And that's super convenient,
right? So the traditional distributor model has always been kind of what has powered the global
economy. You import things in bulk, you do it in a few shipments, and because of that,
you're able to handle all of the administrative overhead with relatively low effort.
Problem with that is that it's kind of slow and not very efficient for the end customer.
So you've seen this just-in-time or lean fixed-sigma approach to supply chains across the entire world.
Toyota started it, and then everybody took it on. And you've also seen kind of like a D2C-like
approach taken in these B2B markets too, which means lots of smaller shipments that move around.
So even our audience here, the manufacturers and the distributor world knows that supply chains have
gotten significantly more complicated as they've sort of atomized and gotten closer to like an
individual part moving directly to a customer like Aaron or Jack. So the freight forwarder is the
company who literally moves these goods physically. So whether it be Ocean or Air or Rand, like they
contract with the importer or the manufacturer, get their stuff across the line. But along the way,
they have these checkpoints with the world's governments. So what are you bringing into our
country? Is it safe? Who regulates it? And what do they need to know about it? The tariff supply,
tariffs have become obviously a big spotlight. It's very, very funny because when I sort of
came to this company, nobody knew what a customs brokerage was. It's a very niche part of the economy
and not something that a lot of people talk about. A month ago, the Wall Street Journal published an
article that says something along the lines of tariff chaos elevates customs brokers to star role in
supply chain. So now the focus is very, very fundamentally on them. And so this is where
they come in. They take all this information from all these different parties and they classify goods
to make sure they pay your tariffs properly. They make disclosures to parties like the FDA or the EPA
or APHIS or whoever has jurisdiction over the goods. They ensure security filings get made. They figure
out whether you need to post bonds if you're moving things in and out of free trade zones. And all of
these terms will be familiar to folks who are moving goods on a distribution or manufacturing basis.
And maybe the tariffs don't apply if you're in certain areas, or maybe you do need to post a
bond to get something across. So they ensure that all of that has been formally cleared by customs and
the customers are doing things properly. And in reality, it basically means that they just get
thousands of emails on a daily basis with all these crazy documents, right? So they have to
understand it, transcribe it, make decisions about it, eventually make declarations electronically to
the government. Your CPA does when you send them all of your stuff, you know, at the end of the year to
go declare an income tax form. And the forms they fill out look a lot like those income tax forms.
So effectively, that is what customs brokerages are doing. And it's this really highly complex
knowledge work that requires a ton of sort of document manipulation and data entry.
Okay. So that makes total sense. Yeah. It sounds very familiar to sort of tax preparation or the,
I started off my tech journey in insurance and property casualty insurance. There's quite a few
pieces of insurance and I've done healthcare IT. There's a lot of this where the regulatory
compliance for sourcing products and providing goods and services gets very complex. And there's a lot
of forms to fill out, I guess, would be one way of putting in a lot of regulations to comply with.
So now you get the chance to pitch, how does Doc Unlock, which is where you are now, make that
better? Because it sounds like what the industry needs is like TurboTax for customs brokers. That's sort
of what was in my head as you were describing it, but maybe that's the wrong metaphor.
Yeah. I would even take it sort of one step beyond. I think all of us would love like never
to log into TurboTax again for the rest of our lives, you know, despite the fact that it's much
simpler than regulating receipts into a form, you know, it's still like this thing that you have to
go do and click on and spend all of this time sorting through. So very, very simply imagine as a
distributor or a manufacturer that you're able to stay, and this is not a very common thing to say in
this industry, my customs broker is very fast. So, you know, I send them these things and in just a
few minutes, generally speaking, my entry is written and customs has received it and I'm cleared. And
that matters a lot because there might be a person in a truck literally waiting for a phone call that
says, hey, customs is going to let this through, you're good to go. And so you need to be able to
do that very quickly. But you also need to do it accurately, because if you don't, you're going to
have major fine problems with the government. And you're going to need to do it across various
sort of formats and all kinds of different ways that customers may send you things.
And so as a customs broker, if you're using us, basically what's happening is those documents
are coming through, we are doing all of the data manipulation to get to the point where the entry
has been drafted. And then the customs broker is effectively just reviewing and submitting that
through the custom system. So it sort of takes away the need to go fill out that TurboTax form,
and it puts them in more of a kind of audit position, which matters because right now,
everyone needs their attention. So they need to be calling their customers and talking about what
the strategy looks like for the next, you know, six, 12, 18 months, as opposed to sorting through
their inbox and taking 500 documents and doing data entry to make sure that stuff is all declared
to customs. Got it. Makes sense to me. So when I think about a little bit, if I'm trying to draw a
common thread then between what you're doing at Doc Unlock, so head of sales at Doc Unlock and B2B
practice leader at Algolia, when I think about what Algolia does, ultimately, you are taking
something that has been offline product discovery, paper catalogs, think calling my rep, think waiting
for someone to show up in my office with a sample case, even depending on what I'm selling, and
bringing it online to where there's rich enough information to make a sort of a product and buying
decision based on what I see online, as opposed to having to pick up the phone and call somebody,
and then looking at what you're doing at Doc Unlock. Doc Unlock, obviously, as you just described,
is sort of taking a lot of online phone calls, compliance, even reading emails, person reading
emails, and moving it into something that is, I don't know, rules-based, data-driven rules-based,
so that it can sort of like scale and make some level of decision that a person had to do before
now an algorithm can do on behalf of that end user or on behalf of that business user.
It's labor-intensive compliance that you're sort of like digitizing, I think, and building rules
around on the custom side and product discovery on the Algolia side.
So you've been doing, you said you started in November, so it's been about, what, five months
or so since you've been at Doc Unlock. Is there a common thread between the kind of customer
conversations that you would get at Algolia as the B2B practice lead when you're talking to
manufacturers and distributors around like, presumably, why you need Algolia, and then now
you are talking to brokerages and freight forwarders around why you need Doc Unlock. Is there a common
thread there in the conversations that you're having?
Totally. Yeah. So I think the commonality between the manufacturing and distribution market and
customs and sort of the world of freight is that both of these markets are very complex and they've
taken a longer time than sort of the rest of the world to digitize and come online. They both have
these really complex sets of data that underlie whether all of this works. So if you're an Algolia
customer, let's say you're a massive global HVAC distributor, you have this huge pin with millions
and millions of products in it and that data needs to be manicured properly in order for search to work
properly. The same thing is true of customs work and oftentimes what happens is that there's no real
way to know that the customer, for example, hasn't made a mistake as they're telling you what there is
to declare to customs. So what we do is we first, we digitize the data. We sort of scan these documents
and we're looking for what's going on and we have some very specific special ways of sort of making sure
that the data is correct. And I think that the search market benefits a lot from now these LLM
technologies that are able to sort of run a very similar workflow, but up until recently that really
hasn't been possible. So I think the core commonality is that these businesses have a much more complex
workflow and it takes them a lot more effort and investment to try and figure out how they're going to
to digitize that process. But the shared challenge is that the data on the way in needs some very
specific tooling to be correct and to be right. And I think search is now developing that in the same
way that we sort of have here for customs brokers, which is that you've got these agents that are able
to sort of check the work redundantly in ways that allow you to operate at a bigger scale than you would
have been able to in the old world.
Got it. Okay. That makes complete sense to me. That's interesting because when you think about
the end user of, let's say, both sort of companies, what is it that they are primarily concerned with
in your experience? What is this sort of like, and like, who is that? Well, I guess for Doc Unlock,
who is the end user for your product? How would you describe that person?
Yeah. So the Doc Unlock product is really trying to complete a workflow. So there's this,
I think generation of companies that is growing up right now. And one of the reasons that I sort of
made this jump is that what Doc Unlock is trying to do isn't necessarily get more people to log into
Doc Unlock. What Doc Unlock is trying to do is actually do the work properly in order to make it much,
much more efficient for customs brokers to operate as an entity. So the output of Doc Unlock is a
customs entry or a filing. And that filing then goes to the customs broker to use their own insight and
experience to sort of validate that this is the right thing to then to go and declare to customs.
But they, along the way, they've saved 98% of the time and effort to do that. And I don't think
there are that many parallels outside of very recently formed companies the last couple of years
exclusively, because this level of sort of knowledge work automation wasn't really possible until we had
sort of the latest vintage of AI and LLM companies and technologies available to actually process some
of the softer side of those rules and make decisions as they needed to. So for me, I think the end user
of Doc Unlock is more of like an end beneficiary. I've sort of removed work from a process and made
it much more efficient. And then as a result of that, much more work can be done. And so these firms can
grow on a totally different cost basis than they would have previously.
That's interesting. I might push back a little bit on that. I mean, I think it's fair to say I'm
older, but by the amount of the volume of gray hair in my beard. And there's definitely been a lot of
companies promising, at least some level of technology business process outsourcing, you might say,
which is I'm going to deploy this suite of software tools and it is going to now with a lot less
autonomy, I think, than the current generation of LLMs to be absolutely fair to your statement. But
through a bunch of nested if statements, I'm going to make decisions about a body of structured
data and we're going to do things with it. And it's going to automate what was a person sort of
like pulling a lever or pushing a button or like making some kind of like real-time decision.
I don't know that it's necessarily different. The digitization of human decision-making has been
going on, I think, for a long time. Sometimes it's a pneumatic tube pushing a lever. Sometimes it's a,
like I said, it's an if statement. What's I think different and new about this current
generation of companies is there's a lot less domain-specific knowledge that needs to go into
developing the technology than there used to be because the LLMs are capable of understanding
natural language to a degree that you had very highly specialized digital systems
that were trying to solve this problem, like taking text, let's say, digitizing the text,
beating it into some kind of machine that then does something with it based on the text.
We've had OCR for a long time. We've had a lot of technologies. I think for me,
it is the ability of the LLMs to enable these products to be deployed and adopted very quickly.
There's just a lot less proprietary, I guess, handling that goes into seeing the value. You
get to value much quicker now than you could, I think, even five years ago. But in general,
yeah, I totally agree with you. And I think this trend is going to accelerate. We will get to some
futurism questions in a moment.
The one place where I might push on that is that the number of cases that you needed to code
specifically into the older school of products that you're talking about sort of obviated the
problem. It just became impossible to deal with the full number of eventualities in those kinds of
workflows. And so if there's one kind of core change that I think really created a much more powerful set
of companies with this technology, it's that it actually can, it's the genericism of it. It's
that it sort of can think like a human in some cases, so to speak, where you're able to look at
a document that is not exactly like that other document, but you know that this and this are
the same thing and you know how to check that is correct. And I think if you had to actually go
through and create the, you know, if and or statements for all of the hundreds of thousands
of stuff can work, you simply wouldn't be able to.
I agree with that. I mean, I've been in software for a very long time and I mean, I've used the
Pareto principle to talk about sort of automation and digitization with my clients for 20 years. And
I can create basically rules that handle 80% of your use cases, but 20% of them are going to require
a person basically because of the fact that like it is an endless series of, it becomes increasingly
complex logic that has to be hand coded and then maintained to handle the corner cases. And there's
always corner cases. And the flip side of that is 20% of your issues create 80% of your work.
And so like I can digitize the easy stuff and the hard stuff, sorry, can't do anything about that.
And what I'm now seeing is to your point, the ability of an LLM to think like a person in that
80-20 where like, okay, the machine can handle 80% of the use cases. It becomes 85, 90, 95%. It'll
probably never be 100 because we have infinite diversity and infinite combinations as a species
and we create unique ways to screw things up all the time.
Annoying habits slash productive habits of like forming new knowledge.
But I will say that I think there's also a reason for, and this is something that I think a lot of
folks can benefit from understanding. There are certain kinds of workflows where there sort of
is a correct answer. And when that's the case, you sort of allow a more guardrail version of these
products. So when you look at what is actually currently moving into these kinds of workflows,
it's accounting, it's tax, it's compliance, it's legal. And these workflows have a verifiably
correct answer based on either precedent or regulation or some large body of context that
exists out in the world. And I think that is why you're seeing, I think a lot of focus from AI
companies on those sorts of workflows.
That's right. I think that's, yeah, that's completely fair. Moving on, I'm going to switch
gears a little bit because you made a comment when we were talking, I think you wrote this actually
to me in an email. You said, I'm going to quote, I mean, I'm reading a lot of direct quotes from you
today. I don't even normally do this for guests, but there was so much there to work with.
You said, sales isn't going out of business. Think about what software companies went through
with free trials and PLG, product-led growth, in the early 2010s. Are there more or fewer AEs now?
B2B is doing the same today. They think it's channel risk, but actually it's the biggest,
this is fascinating, the biggest telemetry, transparency, and intent signal resolution
they've ever seen. I've described myself as professionally ignorant before. I think it's
useful. I think it's a useful thing in a podcast host. Would you change any of those words? And
then what does that mean? I found it really interesting and I think I know what you mean,
but I'm not a hundred percent sure. We haven't talked about it, but when you talk about sort of
the future of sales and you're putting it in a B2B context specifically, you talk about telemetry,
transparency, and intent. I know what those words mean individually. What is your whole thesis for
this statement?
It's like extremely ironic that as we're dealing with sort of the digitization of B2B businesses,
we're also dealing with this really large scale concern that this is somehow competitive with
salespeople. And the reason I think it's ironic is because we just did this in software. So in 2010,
2005, you had Salesforce and all of these other companies that were starting to develop a new
business model. And that meant that software was going to be sold online instead of on the golf course.
And, you know, it was going to be sold on a subscription basis instead of on a giant investment
basis. Then you start having free trials. And so the buyer can actually go and they can experience
the product themselves. And everybody's thinking, oh my God, there's not going to be any more sales
people. People are going to sign up for these products. They're going to buy them themselves,
even for big purchases. It's just, I really need to oppose this if I want any kind of career
longevity. Now, flash forward and you have exactly the same conversation happening in the room
between like the VP of marketing and the VP of sales at these big manufacturing companies where,
you know, the VP of marketing wants to put everything online. The VP of sales goes, well,
then what's the point sort of on heat of my people. And what I think they don't realize is that there's
this principle that like as something gets easier and easier, you know, more and more people will do
it. And you'll create sort of like a demand wave that allows you to sustain even better growth when
you become more transparent. But it's very scary initially because maybe you do have a lot of sales
people at your company who that could have been reorder volume. Like maybe that could have been done
online. And there's some truth to that for sure. There are people who are sort of poaching business
that would have been had anyway. But when I say actually it's the biggest telemetry, transparency,
and intense signal revolution they've ever seen. What I mean is the minute that experience is online,
you can now sort of watch your customer base as a portfolio of activity. And it's a little bit
impersonal to think about it like that, but imagine these clicks, you can watch them grow.
You can watch an account start to buy more from you. You can watch them buy different things and
you can get signals from all of that activity. And from a sales enablement perspective, it's
incredible. And so if somebody goes online and they sign up for more information or they request a quote,
like, of course, that's direct intent. But being able to actually watch them buy and now notice that
a new customer in the mid market is starting to grow quickly and is probably going to need some
strategic effort on the sales front to turn them from a $2 million account into a $50 million account.
That's where I think sales is going. And I think a lot of salespeople, once that has actually happened,
will realize like, well, we need a lot more sales attention now because there's a lot more buyer
exposure to our catalog and people are able to make some of those simple decisions by themselves,
which gets them hooked. And now I can take them forward.
Totally understand what you're saying. This is a conversation that's near and dear to my heart
because I've had this conversation with sales leaders repeatedly for the last 10 years.
And fundamentally, it's a worldview difference. It is the pie a fixed size. The pie is my channel.
So something I've heard many times from sales leaders is, well, e-commerce is just another
channel. An e-commerce sale is just cannibalizing a sale from a rep. I think that is, to your point,
right, that's kind of the default view often is that I would have gotten this sale anyway.
The sale was the important part. This sale represents the sum total of all the engagement
with this customer that I have now and will ever have. I would have gotten it regardless because
we have a contract. They have entitlements with us. They've been buying with it from us for 30 years.
Why do I care about the internet? To, can I make the pie bigger? Does that account have more buyers?
And are there people that don't talk to us that don't place orders with us? Or are there assortments
or products that we have that they don't know about that we've never told them because they are used to
ordering the same thing over and over again? And so maybe that it's the same buyers, but the AOV can
go up or the mix of products, mix of line items on an average order can go up. And then there's also
the sort of self-service aspects of this, which is what happens when that customer wants to order
on a weekend and your rep is into there, at there, sitting in front of the AS400 that is your ERP,
ready to type it in.
That's the most important piece. And I think this is business won and lost in B2B in moments of crisis.
So if I have an existing vendor, theoretically, I should use them for whatever I need. But at some
point, I'm going to have some very specific pinch point where I need something and I can't get it
from them. So I'm going to go try and find it. If you actually think about the 28-year-old or the
34-year-old sitting behind that computer, who's going to need to be doing that because they need to go
order something very urgently, they are going to try and find it online. And I think a lot of
these salespeople don't really think about the rooms they're not in, which is that person goes
to your website. They can't find pricing. They can't find catalog. They just don't order it.
They go somewhere else. And that customer or that provider now has an opportunity to win their
business because that purchase has now been made. The intent signal is there and that account might
be open to switching, but they never talk to you because they couldn't do that transaction they
needed by 8 p.m. on a Friday so that they could make launch next week.
That's exactly right. And flipping a background also too, I know this because we are in the
platform business. And so we have a lot of features built into our platform that provide data on
that user intent and that user journey. We can tell you what pages someone has clicked on
inside of a particular account. We can tell you what quotes they've started. We can tell you what
they've added to cart, but not started in order for it. We can tell you how often they've logged in
and all the rest of how many users they're adding. And all that information is available with our
platform. And I wonder sometimes how often that gets, how much of it gets used or looked at,
because that requires a sort of a cultural change in a lot of companies or it requires a view of the
business as not one fixed pie. That is my job is the same series of processes that I've engaged upon,
engaged in every day for the last 20 years. And then like money comes out and I get a piece of it.
Like that's a normal sort of like a manufacturer distributor AE mentality.
I think that that is so important what you just said, like, because, and I think this is something
that not enough people understand. Like the little quippy line is if your e-commerce team is not
sitting in your sales forecast meeting, you have a problem. And I think that specific activity of
reviewing the actual demand and showing it as a sales enablement tool, same thing with your search
team should sit in your sales forecasting meeting. This account's doing, this is growing. Here are the
changes. These are the terms. This is what's going on. Here's how we're merchandising this account.
We're going to start to bump up because we've noticed that they've started ordering this new
kind of part. And so we're going to change the merchandising outcomes for this $50 million account,
because that's a business in and of itself. And I think the salespeople and the e-commerce teams,
they sit in different places right now, but what needs to happen is as you're reviewing
your business, you want them in the room and you want them pulling levers on the commerce side.
You want them sharing insight with the salespeople so that we can go, Hey,
we've got a 20% gap to number this quarter, but we've got these seven accounts that are showing
real potential in terms of their commerce growth. Who's going to call them this week?
Let's talk about it. That's exactly right. And this is a conversation we have quite often. And
it can be a little disheartening. For many years, I've had these kinds of like personalization type
features as lie items on RFPs for manufacturing distribution, which is, well, does your platform do
this or will your services, can you enable this for me? And we're like, yes. So the technology
has grown faster than the typically the business's ability to implement and learn from the technology.
And that is maybe shifting. And that is maybe the biggest shift of the last few years is more
digitally native people are walking into that job, understanding what technology is capable of doing
as opposed to needing to be educated in their spare time about what technology is capable of doing,
and not just capable of automating, but capable of teaching. I think that wasn't there before.
I know we're short on time here. I want to get through the last sort of like a couple of questions here.
You don't describe yourself as a futurist, but I think it's fair to say you've made some sort of
futurist adjacent observations around digitization and AI and LLMs. I want to pick your brain on a
couple of predictions. We love predictions here. We try not to make them ourselves because we can be
held accountable to them. And I don't want that. If I wanted accountability, I wouldn't be in marketing
and hosting a podcast. But there's been a lot of sort of like activity around tariffs announced
the last few days. You mentioned this. I think I chuckled. I'm kind of curious in general,
what does this mean for brokers and freight forwarders? And how is Doc Unlocked preparing
for that? Because you mentioned the Wall Street Journal article comes out, suddenly being a broker
is like being the belt of the ball. So I'm assuming that's good for you or not, or maybe don't phrase
it in terms of like what's good for Doc Unlocked and not good for Doc Unlocked. But in general,
what is your prediction for the world of brokerages going forward in the next year under the current
current regime? Yeah. So if I zoom it out, the actual businesses that everyone is serving
are the most important here. So who's moving goods? How often are they moving goods? And is the economy
sort of driving? So in one way, what's happening right now could be considered sort of bad for them,
because when you've got an uncertain environment, and when you're not sure what's going to happen,
it's very difficult to make investments. So over the course of the next couple of months,
quarters, maybe years, what we're going to see is a huge amount of noise coming from an
administration that uses that as a tool, and a huge amount of reaction coming from all of the
businesses who are just trying to operate and move things across the border. For freight forwarders,
life gets way more complicated, because I may need to start using new countries to supply goods,
which means that I'm going to go ask my freight forwarder to adjust my supply chain so that I can go
and get things from that place, I might need to move things into free trade zones and out of free
trade zones. It's just more complex to operate in an environment where you're trying to avoid some
punitive thing that may be imposed on your business. Customs brokers have become significantly
more important, but even they don't necessarily want this level of chaos, because what it means to
their customers is they import less. And at the end of the day, if you import or export less,
everybody involved in import and export makes less money. But they are way more important to that
conversation when things are changing. It's kind of like if a regulation just changed, who's the
first person you're going to call? You're going to call your lawyer. If tariffs change, you call your
business broker. And your goal is to make sure that you're not going to do anything wrong. And your goal
is to make sure that you're going to optimize for the profitability of your business in the context
of whatever the rules are. So prediction-wise, what I think a lot of people understand at this point
is that big statements are made. They are walked back to some extent to the extent that there are
some level of concessions made from the other side. So just as apolitically as possible, we're
going to come out with a big point of view, and we're going to wait for some level of coming to the
middle from the other side, at which point some amount of that statement is going to be retracted,
depending on how happy we are with the outcome we've received from that other country.
We're seeing a lot of this happen mostly because the deadlines to renegotiate all of
the things that are currently being targeted with tariffs are later. So USMCA wouldn't have
otherwise been up for renegotiation until 2026. What have we done? In this case, we've brought it
into the very near term and the current administration is able to do it now. So I think
this is probably going to be the noisiest time because they're trying to kick off many workflows,
plant many seeds, and start a lot of conversations so they can deliver win early in what is definitely
only a four-year term. And you're going to see a lot of people chasing these things.
But you also see a fair amount of sobriety from the custom brokers, the break forwarders who have
been around a long time, who recognize like, look, we did this once. It's never as bad as you think
it's going to be when the initial statement is made. And maybe, you know, they'll have to go through
with a couple just to show that they are serious sometimes if that continues to be the perception.
But I think you'll watch a lot of this stuff get rolled back as some level of balance is at least
perceived by the people negotiating.
So high noise, low certainty is your prediction for the near future and then evening out of the
process and a move towards a sort of a managed method, you might say.
Yeah. And if we want to really think about what's going on, you could make a good faith argument that
in a multipolar world, we're trying to sort of move away from a little bit of the investment that's
being made in the US being the global facilitator of all things. And as a result of that, a lot of
different relationships need to be reassessed. And so if you're looking for some level of
understanding of what's going on, if you're trying to find the narrative in all of this chaos,
one way to sort of steel man the argument for what's happening right now is that we pay
as a country for a lot. And the current administration is under the belief that they need to reassess those
investments and sort of become a little bit more jointly supported by all of these other parties,
because at the end of the day, we are no longer the put the gavel down and the decisions been made
global unipolar decision maker. And as a result of that, you know, there are investments that they
may or may not be happy to continue to make. And so if you're looking for a reason, you know,
you may be able to find it there.
It makes sense. I have a longer sort of extended sort of economic history riff on the sort of like
effectiveness of tariffs and where that revenue actually goes that can maybe wait for a different
podcast. I bet everybody has to relearn this lesson, I think. Let's move. I know we're almost
at the end. I'm going to move to just ahead to the last question, which is never on the prepared notes,
which if you've been listening to the podcast, you know what question I'm going to ask you,
which is name a piece of media that you've watched, read, consumed in some way in the last
few months that stood out to you that you would recommend to our guests. It does not have to be
customs brokerage related. In fact, probably I wouldn't believe you if you said that it was.
So is it a Netflix original? Is it a podcast? Is it a magazine? Is it a book, a particularly good
article? Whatever. You name it. What's something that Jack is enjoying right now?
I have listened to the podcast many times and I'll give you two just because I'll give you a
business focus and a personal focus. So business focus, there's this lesser known technology podcast
that I don't think gets enough attention. It's called BG2. It's Brad Gurley and Bill,
or it's Bill Gurley and Brad Gerstner, who are maybe a bit more of a sort of sober approach to
discussing what's going on in the world of sort of technology, AI. They are both investors. There's
nothing inflammatory about it. What they do is they talk about what's going on in the world and they are
absolutely direct participants. And I have listened to probably every single episode of that podcast
that came out and I have always found it to be extremely illuminative of what is actually going
on, which I very much appreciate. So that's one that I don't think gets enough love. And then on
the personal side, I've just rebread the three body problem series, which is a three part, incredible
work of fiction that I think is one of the best books out there. The first book has a description of
a computer that is sort of written as if people are operating with flags. And I think that for most people,
it'll be the first time you really understand how a computer works, but it's also just a beautifully
done metaphor. Netflix made a series about it, which was fine, but I think the books are just
exceptionally good. Fantastic. Yes, that is an excellent series. They are the excellent series
of books. I've started the Netflix show. I have only watched the first couple of episodes. I have to
be in a particular frame of mind to sit through that. It's not the most sort of like sit down and watch
or read at the end of the day when you're looking to relax and feel good. It does require
It does require it and it produces some emotional responses, I would say. So, but yeah, both very
good. So BG2, I was looking at this while you were saying it, BG2pod.com. We'll put that in the show
notes as three body problem. Maybe the link to the books as well. If you've got an affiliate,
Amazon affiliate code, Jack, now's the time to pass it on. So you get credit for all sales.
No, that's fine. I want to say that this podcast moves product. I don't know that we do. We haven't
started asking for sponsorships yet from the outside world, but like if you want to go that route,
we can certainly make something happen. Jack, I really appreciate your time. This was a
fascinating conversation. I have a feeling we could have gone for considerably longer on a lot of other
different topics. Maybe we'll have you back at some point to follow up on some of these,
but really appreciate your time. Thank you for joining us and enjoy the rest of sunny, beautiful
St. Pete, Tampa. And this is a beautiful time of year to be there.
Awesome. Thank you very much, Aaron. Yes, it is. Move to St. Pete. There are places where you can
feed dolphins on a daily basis. This is one of them and it's much happier than Northeast.
So get on down here.
Yes, highly recommend. Thanks so much.
Oro seeks to build long-term trustful relationships with its customers, integrators, developers,
and technology partners by empowering people with the best tools to digitalize their business.
Find out more at oroinc.com. That's O-R-O-I-N-C dot com.
