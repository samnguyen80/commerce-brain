---
source: "B2B Commerce UnCut"
category: "B2B"
url: "https://oroinc.com/ecommerce-podcast/"
title: "B2B Commerce Uncut Ep.3: Security & Compliance in B2B eCommerce"
date: "Thu, 26 May 2022 18:00:00 -0400"
fetched: "2026-09-01T14:25:29.355Z"
via: "whisper"
---

Good morning, good afternoon, good evening, wherever you are.
My name is Jari Carter, and I'm the host of B2B Commerce Uncut.
Happy to have you here participating with us today.
I have here with me Mr. Jeff Mann, who's a Senior Information Security Consultant at Online Business Systems.
Jeff, that's a mouthful of a title.
Jeff has over, well, he's been an evangelist for data security for over 40 years.
His experience spans security research, management, product development for roles for public and private companies,
as well as government agencies like the Department of Defense and the National Security Agency.
Jeff, welcome to the podcast. Happy to have you here.
Happy to be here. One of the many things I do is podcasting myself,
so it's a fun change to be sort of on the other side of the microphone for once.
That's right. You're either out of the hot seat or in the hot seat, whatever way we look at it.
Happy to be chatting with you here.
We also have Joseph Kirkpatrick, who's the founder and president at Kirkpatrick Price.
Joseph is an IT security professional.
He specializes in data security, cyber security, IT governance, and regulatory compliance.
He's a CPA with 25 years of experience, holds a whole host of certifications,
spearheaded numerous initiatives at Kirkpatrick Price,
and led thousands of audit reports and IT security engagements around the world.
Joseph, it's an honor to have you here. Thanks for joining us today.
Yeah, really looking forward to talking to you guys and talking through this important subject with you.
Yeah, it is such an important subject. It's becoming increasingly important seemingly in recent years.
I would love to just get into introductions around the two of you.
I'd love to just understand how you got into the space and a little bit of your background from your own perspective.
You both have wildly impressive bios, but we'd love to hear kind of how you got to where you are today.
And let's just start with you, Jeff.
Sure, thanks, Jerry. I'll try to be concise.
Compress 40 years into 90 seconds or so.
Primarily, I got my start in information security working for, as you mentioned, Department of Defense.
My first real job was as a cryptographer for the National Security Agency,
which, of course, is protecting communications, protecting information.
I was there in the mid-80s to mid-90s, so sort of at the cusp of when the Internet was becoming at least publicly available
and caused the explosion that we know now today is the digital world, what we call cyber.
So I was sort of in there at the ground floor, sort of shifted over into cybersecurity,
although we didn't call that at the time in the early 90s,
because I was working with a small group of guys that were looking at how to break into computers and networks
because they were becoming more a thing.
And we'd all seen movies like War Games and Sneakers or Hackers,
and we're like, oh, that's kind of cool. We want to do that.
So I ended up looking back on it and say that I was sort of a founding member of the first NSA Red Team.
Went out into the private sector shortly after all that happened.
Primarily trying to, in the early days, try to help companies of all sizes, shapes, and forms
to figure out how to do connecting to the Internet in a secure way.
Somewhere along the line, I fell into PCI, payment card industry,
and it came out in the data security standard came out in 2004,
and I was handed it to me by a boss back in 2004 and said, here, read this.
We're going to do it.
I read it and I said, this kind of makes sense.
Been doing it ever since, basically.
So, you know, I can wrap up the last 15, 16 years by saying I've been a QSA,
working with hundreds of companies of all shapes and sizes,
you know, trying to help them understand how to do basic information cybersecurity,
given their environment, given their vertical,
and given a certain set of requirements that they're kind of bound to
if they want to engage in commerce, at least with credit cards.
So that's me in a nutshell.
That's great.
You have such an interesting and rich background.
I'm excited to ask some questions around that today.
Let's, Joseph, I would love to hear your background as well,
if you wouldn't mind just giving us a little bit of a thumbnail sketch
of how you got into where you are and what you're doing now.
Yeah, it all started for me in 1984.
And 1984 was the year of the computer.
It was the timeframe when the IBM CEO said that no one would ever want a computer in their home.
And the personal computer was the man of the year for Time magazine in that year.
And so that was the year that my parents sent me to a class on computers.
They were very forward thinking.
And I was 13 years old.
And, you know, I just decided, wow, I want to work with this.
So when I got out of college, I did systems engineering work.
We were installing windows for work groups for companies who were converting from Novell.
And I worked in systems engineering for about, I guess it was about 12 years and was doing that for banks.
And being a highly regulated space, they started coming to me with questions about
satisfying these different compliance needs and satisfying the bank examiners on the different things.
And they started asking about data security.
And as a result, we did risk assessments and penetration testing and helped them write their information security program.
And once I got involved in that and got a taste of that aspect of things, I decided I really wanted to specialize in that area.
And I saw the need for it and the importance of it.
And that's really what got me focused in cybersecurity.
Amazing.
Amazing.
You all are dating, all three of us.
I remember seeing Hackers in the movie theater, Jeff, which was like such an iconic movie for me.
Joseph, my first job was at Novell.
So my very first tech job right out of college was at Novell in 1984, going into computer class.
Your parents really were forward thinking.
I think that was not on most people's radar in sending their kids to computer class.
So very, very cool.
Let's jump into it.
There was a question kind of before as we were preparing around compliance and security.
Are they the same thing?
What is the difference?
Jeff, we're talking here about both security and compliance.
Unpack both of those for us and the differences.
Well, it's one of those questions where you ask 100 professionals, you're going to probably get 100 different opinions.
So this will be my take on it.
And the way I've really tried to help my clients over the years, there is an understanding or there is a misconception, maybe it's a better way to phrase it, that compliance does not equal security.
And the perception is, and again, it depends on who you talk to, either compliance is just kind of a silly nuisance exercise.
It's not really real security and it's not reflective of all the things that the security people do within organizations.
And so it's viewed by sort of one camp as something that's very simplistic and very checkbox oriented.
You're not really proving that you're doing anything.
You're just saying that you're doing stuff.
Right.
Now flip that around because I've worked with, as I said, in PCI, I've worked with companies for almost 20 years trying to follow this silly little list of, you know, depending on how you slice it, over 400 specific requirements that you have to do every one of them.
And companies struggle to meet every one of these requirements and they struggle to consistently meet the requirements.
A lot of the requirements, a lot of security in general has to do with continuous processes, doing things on the regular, which feeds to sort of this misconception between security versus compliance too, is that compliance is a one time, once a year, come in and see how you're doing.
And security is something that you do all the time.
Well, a lot of PCI requirements are, are you doing this thing daily?
Are you doing this thing weekly?
Are you doing this thing monthly?
Are you doing this thing periodically?
So it's meant to be reflective.
So that's my sort of backdrop.
Security is doing a whole lot of things to try to either A, prevent bad things from happening to your organization, or B, detecting that something bad is happening to your organization and hopefully minimizing the damages, minimizing the consequences.
Compliance in that context is simply, compliance in that context is simply, here's a measuring stick.
Here's a way to evaluate or assess how well you're doing all these basic security things.
So to me, compliance is just a reflection of security.
They're kind of one in the same thing.
But that's my silly little opinion.
Not silly at all.
Seemed very well thought out, well articulated.
And I appreciate that perspective.
Joseph, in the spirit of compliance, you're an expert in this.
What compliances are usually required for a manufacturer or distributor to be selling online?
And when you go into, you know, a company and talk about compliance, what are the things you're looking for?
Yeah.
So if we're specifically talking about a company that's moving online, you know, maybe they've had a traditional brick and mortar environment.
They've had, you know, a distributor model.
But now they're moving into the online presence and starting to engage with people in other states, other countries, all those kinds of things.
You know, you very quickly get swallowed up with all the compliance requirements.
Most people dive right into offering those new services or doing business online.
And there's a reactive sense of responding to things that a customer might ask or a regulatory body might ask.
But, you know, just speaking in the year 2022, I think privacy is at the forefront.
If you are moving to an online presence, if you're starting to serve people who are in different places, you have to be aware of the laws that are relevant to where your customer is.
And so if you've got a customer in California, you have to be concerned about the, you know, California Consumer Protection Act.
If you are working with a client who is in Europe, you have to be concerned about GDPR.
And so one of the things that a company has to do when they're making that change is they have to have a program to understand what data are we collecting from people?
What data do we have to maintain?
How long do we maintain it?
What is our policy to do that?
Do we give access to that data to the people that it belongs to, such as the consumer?
Who in our organization has access to it?
Is there a right for them to have access to it?
There are a lot of things to think about in terms of, you know, the data that we collect in the e-commerce world and then what we do with it.
You know, can we use the transactional data when we make a sale to someone?
And can we use that now to market additional things to them?
There are laws around that.
But also, can we share that data with another business unit or another entity that our company owns or a third party that we work with?
So these are all very important questions to ask that are really, you know, derived from a lot of the compliance frameworks that are out there.
Yeah.
So it does sound like it's a bit, you know, obviously there's a bit region and location specific.
And then there are also some guiding principles around, you know, really preserving customer privacy is at the core of a lot of what you're thinking about.
And really what a lot of the laws are thinking about and the compliances are thinking about as a framework.
I would love to understand from both of you, just the current state of affairs in enterprise tech security.
What are the biggest threats?
What are the trends?
And just maybe while we have you, Joseph, while we have you talking, I'd love for you to start with that.
Just what's kind of the current state?
What are you seeing?
You know, I thought 10 years ago I was excited with this industry and this work.
You know, I thought it couldn't get any better 10 years ago.
I love new things and I love change and I love technology and security and all that.
And I thought, well, we're at the peak, you know.
But I'll tell you what, we're just, it's never been more exciting, you know, the things that are happening.
And a lot of that excitement comes from really bad things happening.
And, you know, if you follow all of the releases that come out from government agencies, from industry groups, it's impossible to keep up, you know, with the breaches that are occurring, the vulnerabilities that are being discovered, the threats that are no longer for the military or the government to be concerned about, but for a small business to be concerned about.
And, you know, can we be breached?
Can we be shut down?
It's just really hot and heavy right now.
And so I think that the trend, I think you said, what's the trend?
It's really just what do we not know?
Because with every release, it's something that has been exploited for an amount of time that we didn't know was being exploited.
And so now we have to check our systems and the third party that we have a relationship and the technology that we have in place over here.
We have to check to see, oh, are we exposed because of this thing that has just been revealed?
And so it's just a constant revelation right now.
It feels like daily about the unknown, something that we couldn't have foreseen, we couldn't have planned for.
And so we, as organizations, you know, don't need to be reactive to that.
We need to be planning for how do we respond when we become aware of some new threat that has been published or reported.
Yeah, it's I like what you said.
All a lot of new laws and regulations come out of things that have gone wrong.
Doesn't it seem like that's how the world progresses?
Like there's a there's a law on the autobahn that it's illegal to run out of gas.
Like who is the person that ran out of gas on the autobahn and got hit it?
You know, their car got hit at 120 kilometers per hour.
But yes, it is.
You are seeing a lot of the things that are happening in the world in terms of data breaches or security, you know, where things have gone wrong that are driving a lot of the innovation laws that are happening now.
I really appreciate that perspective.
Jeff, I'd love for you to weigh in to this as well.
What are some of the things that have you excited in the current state of enterprise tech security?
Well, caveat my response by saying I don't like to think that I get excited about any of this.
I'm sort of everything that Joseph's excited about.
I find depressing.
How's you afraid?
Now we know who the optimists and the pessimists are.
But it's interesting you brought up this analogy of the autobahn and, you know, casually mentioned, you know, everything seems to be reactive.
But that's really the essence of security is we learn from previous mistakes.
We learn from bad things happening.
I can remember when I first read the PCI data security standard, you know, the 400 some odd requirements, you know, when it came out almost 20 years ago.
I'm like, oh, yeah, I know why this rule is there.
It's because this happened.
I mean, virtually every single requirement in there at the time was because it was trying to cover the bases of something that bad that had happened, some sort of compromise, some sort of breach.
I see a lot of tension in our world.
There's competing forces.
And if I get excited, it's that there's job security, maybe.
I get excited when I can sit with a client and try to help them get to the point of understanding why do we have to do all this stuff?
It doesn't seem to make sense.
And some of the things that I see, and this is certainly not comprehensive, but I think, you know, since the dawn of us emerging into this electronic, digital, cybersecurity, Internet world, there's been a belief that by consumers, let's say, including organizations, that security is something that's going to be taken care of by somebody else.
The technology should solve everything.
They're used, misconfigured, you know, users, the people elements aren't doing things properly, aren't doing things the way they're supposed to be doing.
And so you have this tension between, well, I should be able to do what I want, given the technology that I have, and I should have a reasonable expectation that it's secure, and I shouldn't have to be responsible at all.
So sort of a twist to that is, again, going back to your Audubon analogy, which I think is fascinating, is when organizations get breached, and, you know, we see them in the headlines very often.
And we always love to beat up on these companies because, you know, they didn't follow good security, they didn't have good security practices.
They weren't doing the right things.
Well, you know, there was this inherent weakness.
And we seem to forget that, at the end of the day, they're a victim of a crime, that, you know, somebody committed a crime against an organization that put them into this situation.
So this concept that, you know, there's responsibility for achieving a certain level of security so that you have, you know, in the early days of PCI, they called it safe harbor, you know, you're not going to get in trouble, you're not going to get faulted for getting compromised or breached, if you're doing some reasonable amount of security.
And after that, it's like, well, it could happen to anybody.
That hasn't really changed over the years, other than there's less and less idea of safe harbor, and there's more and more beating up on the poor victims.
And very often, it's legitimate, because either they've completely missed the boat on their employee awareness, employees doing the right things, having this sort of culture of security, knowing what you can and can't do in terms of your business processes and your daily job, your daily routine, versus that expectation, like I said, that security is being done by somebody else.
Security is somebody else's responsibility within the organization.
And so it's okay, I can get, you know, I can do what I do, because I'm covered.
So what excites me is there's this never ending tension, and there's this need to try to open people's eyes or pull the wool off some people's eyes, depending on what analogy you want to use to just try to promote better understanding of what's at play here.
What's involved in terms of securing an organization or securing data these days?
Yeah.
Can I jump in on this?
Yeah, please.
Yeah.
I love this.
I love this aspect of what's going on, you know, because there is this just strong desire for people to pass the buck on security, and they don't want to feel responsible, you know.
And it's just a strong desire that humans have to know that somebody else is responsible for this, right?
Because they feel totally inadequate.
They feel unprepared.
They don't have the knowledge.
They don't have the skills to confront this growing, complicated threat.
And so they just want somebody to be responsible for it.
And so some of the common things, I'm sure Jeff, you know, sees all this as well, but you go to an environment, oh, we moved everything to this cloud provider.
And now they're responsible for security.
We have this relationship with this managed IT or managed security company, and we've signed a contract with them, and we pay them X amount a month, and they are responsible for our security.
And they just want that to be true so bad.
And the truth is such an important issue that affects your business.
You know, you can't ever abdicate yourself of that responsibility.
You're always responsible for it.
And then you have to manage these relationships that are impacting the issue and that are critical for the issue, but you just can't, you know, not be responsible for something that's so critical to the success of your business.
One time, this was just something that stuck out in my mind.
I was doing an audit for a company in Minneapolis, and this was a big company.
And I was going to be there for a week to perform this assessment.
And every question that I asked, the answer was, we have this service provider that does that for us.
We have this service provider that does that for us.
And so that's what the entire first day was.
The first day was, we don't do anything with that because the service provider does that.
And so finally, at the end of the first day, I just said, sounds like we need to talk to the service provider about all this because you don't have any of the answers for what I'm looking for.
And so we decided to get on a plane and fly from Minneapolis to St. Louis because that's where the service provider was.
And so the next day, we had a meeting with the service provider, and I started walking through the issues.
And they said to every question, they said, well, we can do that for them, but no one has asked us to do that.
And then the customer was saying, oh, I thought that you were doing that.
I thought that you were monitoring our firewall.
We offer that, but no one has instructed us to do that.
And you haven't told us what you want us to monitor, and you haven't told us what you want us to do with the thing that we are monitoring.
And that was a long time ago, but that kind of thing still happens today, especially with the cloud providers.
People make these assumptions that the cloud providers are responsible for all of these things, but they're not unless you take responsibility for establishing the policies, enabling the controls,
assigning responsibility for people to monitor these things and take action whenever there is a finding that happens.
And so there's definitely this huge desire to relieve yourself of responsibility in this area.
Well, if I can dovetail on that or what you're saying, Joseph, very specifically, the services are available.
What you're not saying is, but it should be obvious to everyone, is it comes at a cost.
You have to pay for it.
And there's an aspect to all of this where, and maybe we should bring it up a little bit more, is that security and all the things that you have to do associated with security,
regardless of the compliance standard, costs money, if not in terms of product and technology,
in terms of time and resources and training, personnel assigned.
And I think the early selling point of the cloud, and I won't name the guilty AWS, is come to the cloud and we've got all this covered for you.
Even we're PCI compliant, but if you read the small print, they were covering what we used to refer to colloquially as lights and power.
They were a data center that was hosting servers.
It was in the magic wiffle of the cloud.
But all they basically provided the security for was the physical security of the systems wherever they were.
Now, that was 10 years ago.
Nowadays, they have full-blown programs.
They've got services for virtually every security requirement you can think of, from scanning and monitoring and testing and access control, multi-factor authentication.
You name it, they've got it, but it all comes at a cost.
And at the end of the day, maybe the best way to explain to clients in a language that they can understand is security comes at a cost, and you have to figure out how much you want to spend, where's the right way to spend it, where do you make your investments.
And, of course, then you have all sorts of solutions out there that are telling you how you increase your ROI, make security part of your profit center.
I'm not going to say I completely disagree with all that, but security comes at a cost.
Figure out where you need to spend the money, figure out the right mix, and figure out when it's cheaper, more cost-effective for you to do it versus a third party.
But for God's sake, make sure the third party is doing it for you, as Joseph was alluding to.
You know, when I see these providers and these tools use the same marketing hook, which is, use us, and we will make it easy for you.
You know, I always shudder at that, because the reason they use that in their marketing is because it works.
You know, people want that to be true so bad.
You know, everyone, oh, good, I can sign up for this, and then it will be easy.
That's like a strong selling point, you know, but the truth is, it's all these things that Jeff was just talking about, you know,
the things that you then have to engage upon and ensure that the provider is doing this and ensure that the provider has what they need in order to be able to do the thing, you know, that ultimately has to come from you.
It is a difficult thing.
And so the marketing message of, you know, work with us and we will, you know, make it harder, you know, that doesn't work.
But the truth is, sometimes a good security partner is going to bring things to you that are hard issues.
And they're going to talk to you about things that are difficult.
And, you know, to ignore those things might be easy for a short period of time, but a good security partner is going to bring some very challenging things to you.
And then they're going to work through those challenges together.
Yeah, that's great insight.
I want to just let folks know, and our producer is ready for folks that have questions.
So if you have questions, ask them in LinkedIn or here in the chat.
We want to answer as many questions as we can in the time we have.
I wanted to ask just one more question before we get to maybe some of the outside questions, which is horror stories.
You know, people, you know, we talked about learning from mistakes, learning from issues.
Any horror stories from your previous experience of failed security costing businesses, revenue, reputation?
Like, I would love to get you all's perspective on that.
And Joseph, maybe, you know, given that you've been in this, you know, doing audits for companies, I'd be curious if you have an interesting story or two.
Yeah, you know, we are usually in the line of fire in terms of being contacted by someone who has just been surprised with something and, you know, they're needing help.
And so the most recent one for us was a farm supply organization.
They traditionally had been a locally focused supplier and they were moving online.
And so this was a huge undertaking for them.
It was critical to their mission, critical to their strategy in order to get this up and running.
And they worked really hard, you know, spent a lot of money, spent a lot of time on developing the e-commerce platform.
And they were planning on having a much greater reach.
And so the time came for that to roll out and they were unable to get cyber insurance.
And that was a shock to them.
And, you know, anyone who's been dealing with cyber insurance, you've noticed that it has changed.
There was so much that was impacted because of ransomware that the cyber insurance policies have all been rewritten.
And they're a little more scrutinous in their, you know, due diligence and things like that.
And so this organization was not able to get cyber insurance.
And so now they're having to go through all these things that the insurance provider is requiring.
You know, have you had a risk assessment?
Do you have endpoint protection?
Are you doing security awareness training?
It's that compliance list that we talked about earlier.
And the truth of the matter was they weren't doing those things.
And so they couldn't get the insurance.
And so huge impact to their bottom line as a result of not considering the impact of security and compliance to this very important mission that they had as a business.
Yeah.
Great example.
Great example.
Jeff, do you have anything you would add in that?
So, yeah, I've got a million of them.
But let me share two.
One is one is more of a generic something I see very often these days, you know, especially since we're supposed to be talking about B2B, which in a PCI context is third parties, service providers, people that are sort of in the middle between a retailer, a merchant and the back end card companies, banks and things like that.
And so, especially in an e-commerce context.
You know, we've been talking about the outsourcing.
You know, we've been talking about the outsourcing and putting stuff in the cloud.
I see very often these days a scenario where you have a retailer, a merchant that wants to do e-commerce.
And so, they have to have a website.
But they don't have developers.
So, they go to a third party to create the website for them.
And, of course, there's companies out there that specialize in that.
They also need to put it somewhere, host it somewhere.
Now, it's more common to put it in the cloud somewhere.
But it's very often not the merchant that's engaging with the cloud provider.
It's one or more of these third parties.
And then, not to belabor the shortcuts that you can sometimes take in PCI, one of the streamlined things is to engage another third party that just does the checking out.
You know, if you buy something online and you go to the checkout page where you're eventually going to put your credit card in, very often that's a completely other company.
So, you've got in this scenario three, four, five different entities very often that somebody's doing the security.
We hope for overall the guide, the measurement is the PCI data security standard.
And it starts in terms of liability if there's a breach with the merchant.
They're the ones that are supposed to be reporting PCI compliance.
And they say, well, we don't do that.
We have this third party.
And then that third party says, well, we don't do that.
We have this other third party.
And very often, I have this strong belief that things aren't getting done from a security perspective because everybody thinks somebody else is doing it.
So, that's one scenario.
The second one is more of an application thing, a lessons learned type of thing.
I had this situation with a client just a couple weeks ago.
I was doing an on-site assessment, going through all the different security controls.
One of the controls in PCI is that you're supposed to monitor periodically for the presence of any kind of rogue wireless access points or any rogue devices on existing wireless networks.
This particular company had technology in place that rather than doing it periodically once every 30 days or 90 days, they're doing it basically real time.
They've got sensors that are up and running.
And just part of what they do in terms of creating a wireless environment is to continuously check and report on any presence of unknown devices or any rogue devices.
Sounds great on paper.
It's like, wow, you're just blowing the doors off the requirement.
You're going way beyond the bare minimum.
So, the issue I had, though, was we were doing site visits of different retail locations.
And this one particular site that we visited, the particular device, happened to be unplugged.
And so, I asked the question, why is this unplugged?
You know, two weeks into it, I'm still waiting for the answer.
But the bigger question I have is not why was it unplugged, but why wasn't your whiz bang reporting mechanism and automatic stuff that's going on flagging or alerting the fact that a sensor's dropped, that there's a sensor not doing anything.
So, I mean, the lesson learned is it's not enough to just simply put the technologies in place.
You also have to know what to do with the results and the outcomes and know when something weird is happening so you can respond to it.
I don't suspect that it's any nefarious activity, but I do question how well they've embraced the sort of the procedural process aspect of security when they're allowing the technology to do what it does.
And it seems like they're not paying attention to what it's producing in terms of the output.
So, I share that as more of a very strong nudge to think about how you implement a lot of the security solutions that are out there.
Yeah, it's interesting you all talk about this because I, and this will be the last thing we kind of end on, because we see, like what I'm hearing from both of you really strongly in this.
And if it's a takeaway, I think for our audience, one of the things I'm hearing is like, don't actually look to your third party vendors as a panacea for your security and compliance.
And particularly your technology vendors, don't look at them as a panacea for the compliance and security needs that you have as a business.
As a company, you've got to take responsibility and understand your market, your customers, the regulations in your industry, and really take responsibility for what's happening there.
Did I catch that right, Joseph, Jeff? Is there any final thought you have on that?
I mean, that seems like it's been coming through like loud and clear in like bright beeping lights.
Yeah, that's not where the assurance comes from.
You know, the assurance doesn't come from a product that you use or a provider that you have a relationship with.
You know, you're responsible for this thing called security, and it's something you're always pursuing.
You never actually arrive at it.
You can live in the state of security, and you can, you know, feel like you've kind of, you're experiencing it, but you have to be ever vigilant, and you have to always be pursuing it.
And, you know, I love what Jeff pointed out about, I mean, pretty much today, everybody is going to have these relationships that are all important to this security goal that you have.
And the problem that he's pointing out, which is a huge problem, is there's no one, you know, auditor or assessor or regulatory body who's looking at that in its context.
They divide it up in so many different pieces, and they say, well, this person's responsible for this, and somebody over there is looking at that, you know, exactly as he described.
And I know Jeff will be able to complete my sentence, you know, when you come in, and you want to look at things in context, and you want to look at this piece, and that piece, and that third party, the response you always get is, well, we don't want you to look at that, because that's not in scope.
It's not in scope.
And so when you hear that, you're just like, ah, it is in scope.
Your security is always in scope.
And, you know, we should be looking at it, and we shouldn't be slicing and dicing it.
And so, yeah, I'm glad you picked up on that, because it's definitely a huge concern of mine as well.
Yeah.
Any final thoughts, Jeff?
Yeah.
I want to echo what Joseph said.
You know, I think he and I met, I don't know how many years ago at a PCI meeting, where we were, we kind of got together and bonded over all the banners of all the vendors on the expo floor, you know, as he had alluded to earlier.
We can make PCI easier, compliance easy, security easy, make it go away.
15 minutes.
Ease your burden.
I'm like, oh, my God.
If you think of security as a burden, you've already lost.
So, yeah, I mean, what old timers like us try to do is try to just educate and give companies context and help them understand you really can't outsource security.
You can outsource the activities and you can outsource some of the specifics, but responsibility and that overall comprehensive, taking that logical step backward look at how does this all work together, that's very often lacking.
And there's not enough of people like us that do the auditing and assessing that seem to embrace the fact that there's something wrong here because nobody's taking that bigger look at things.
And to underscore what Joseph said is, in my analogy, in my horror story, yeah, everybody looks at the single point and says, yep, you're fine with what you're doing.
Nobody's taking that big look until something bad happens, by the way.
And when something bad happens, the people that are going to come and find you are going to first go to technically it's the acquiring bank, but the acquiring bank goes to the merchant and says it's all on you.
And it doesn't matter who you claim is supposed to be doing it for you.
It falls on you in terms of liability.
And again, that's a dollars and cents type of thing.
It's an economic decision, but don't think you're selling yourself cheap or being economical by pushing stuff out to a third party because they claim they've got you covered.
Make sure you consider all the costs.
And you can outsource perhaps the responsibility, but that doesn't mean you've outsourced the liability.
Ooh, I love that.
You can outsource the responsibility.
It doesn't mean you've outsourced the liability.
And with that, we're going to end on that quote because it was very, very good.
And I think actually encapsulates the conversation that we've had here today.
I want to thank you both for coming in, for lending your perspective, for sharing your expertise.
Today's conversation has definitely lived up to the brand.
This is B2B Commerce Uncut.
It's been definitely unfiltered.
There's been no, you know, nobody's trying to sell anything except for the fact that we want to keep you all safe as you engage in e-commerce out in the market.
And as you're out there really pushing your business forward.
I really appreciate both your perspectives, Joseph and Jeff.
I do want to say we want to follow up with any questions asynchronously.
So please submit your questions.
Ask those along the way.
We also want your ideas for upcoming topics.
So we're going to drop here a landing page in the chat for folks to submit ideas for future podcasts as we continue the B2B Commerce Uncut.
Thank you both so much for your time today.
And thanks, everybody, for tuning in.
Great to be with you.
Yep.
Thanks for having us.
Bye, y'all.
Bye-bye.
Bye.
