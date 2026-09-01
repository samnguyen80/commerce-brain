---
source: "Marketplace Risk Platform Podcast"
category: "B2B2C"
url: "https://soundcloud.com/user-285952625/the-power-of-location-identity-and-what-it-means-for-marketplaces-with-andre-ferraz"
title: "The Power of Location Identity and What it Means for Marketplaces with André Ferraz"
date: "Wed, 15 Feb 2023 22:37:07 +0000"
fetched: "2026-09-01T07:34:50.909Z"
via: "whisper"
---

Hello, and welcome to the Platform Podcast, hosted by Marketplace Risk Advisory Board
Chair, Elle Tucker, a former journalist who writes, speaks, and consults on all things
startups.
The Platform Podcast features conversations with founders, operators, and experts tackling
a myriad of topics facing the marketplace and sharing economy startup ecosystem.
Please note this podcast is for informational purposes only and is not professional advice.
For specific issues, please seek an appropriate professional or contact us at info at marketplace
risk.com for more information.
And now, without further ado, I will hand things over to Elle.
Hello, and welcome back to the Platform Podcast.
Today, I'm joined by Andre Faraz, who is CEO and co-founder of Incognia, and also one of
the newest board members of Marketplace Risk.
Welcome to the podcast, Andre.
Thanks, Elle.
It's a pleasure to be here.
It's so nice to talk to you, and I'm really fascinated to hear about Incognia, because I
don't think I have come across a location identity company and a company that specializes in that,
and I want to hear all about it.
But first of all, it's a big warm welcome to the advisory board at Marketplace Risk, and
we're really pleased to have you as part of the community.
What's your background?
How did you get into this world?
Awesome.
Yeah.
I'm also very excited to be here at the advisory board.
And quick background on myself.
I come from a computer science background, so I come from the technical side.
And more specifically, within the cybersecurity space.
So I spent most of my time in the area working, building authentication solutions and fraud prevention
systems.
And actually, my first college project was related to IoT authentication, which is when I got into
working with location signals more specifically.
And from there, I started developing my career around working with these type of location-based
technologies, location-based services, and more recently, utilizing it to help marketplaces
and other types of companies prevent frauds and scams by leveraging location verification and
location identity as a new signal.
That's fascinating because, I mean, I've heard a lot about, you know, sort of identity and
way that people, fraudsters, can be detected by things like, you know, the way that they're
using the devices and obviously the way that they're logging in and stuff like that.
But talk to me about this location thing, because I didn't really know that this even existed.
Is it quite a new phenomenon?
Yes.
Yes.
This is quite new.
And the concept behind it is that every person has to be at one place at a time, right?
So that applies not only to the legitimate users, but also to fraudsters and scammers, right?
So when we're trying to identify, like, who is the good user and who is the bad user, location
can be a great signal for that, right?
So these scammers and fraudsters, they can hide behind many other identity credentials.
There were many data breaches recently, so they can get access to real names, real document
numbers, and other types of credentials.
And they can either use that to create synthetic identities or just even use those stolen identity
credentials to say they are someone else, right?
So by leveraging location signals, we're able to link all of these different identities and
identify if there are multiple identities associated to the same location behavior.
In that case, that is a very strong indicator that there is some sort of identity fraud going
on. On the other hand, if we identify that good user is at a certain location and their behavior
is matching the other data points that we have associated to that identity, that is also a
very good signal.
For example, one of the things we see is that about 85% of the time when users are creating
accounts on marketplaces or financial institutions, they are doing that from their homes, right?
So when they disclose their home address, the likelihood of that being the current location
of the device that is opening that account is very high, for example.
Same applies to login activity, same applies to payments.
So basically, location is a very strong signal for trust and also for fraud prevention.
So why hasn't location been, I mean, it sounds brilliant, but why hasn't it been used
before?
Is it simply because the technology hasn't been there?
Because it's almost as though it's a bit of a no-brainer when it comes to the sort of
verification of people that you're talking about.
But this feels like it's something that, you know, is quite new.
So I wondered how it's evolved.
Does it become a sort of missing piece of the puzzle when it comes to actually, you know,
working out whether somebody is legitimate or not?
Exactly.
Exactly.

So the big thing here is that the technology wasn't ready for this type of application.
Because if you think about the most recent location technologies that were made available for
software developers, we're talking about mainly two things.
The first one is IP based geolocation.
So you're basically getting the IP address of a device and trying to locate it.
Or you're leveraging GPS signals, right?
Which is leveraging a network of satellites that are communicating with these devices, right?
And there are some limitations to those two types of technologies that unfortunately didn't allow for the user's location as a trust signal.
And the limitations are related to two things.
The first one is the ability that fraudsters have to spoof this type of information.
So for example, with IP address geolocation, the user can simply use a VPN or a proxy or something else to hide their true IP.
And once the user does that, you're no longer able to locate the true location of that device.
Same applies to GPS data.
It's very easy to spoof the GPS data because the operating systems like Android and iOS have enabled the developers to basically mock their true location so that they could test the application that they're building.
So for example, if I'm a developer at a global company and I'm currently in the San Francisco Bay Area, but I'm developing a feature for a different country,
the only way I would be able to test that feature without having to travel would be by mocking my location, right?
So that was actually a feature that was built by the operating systems to allow developers to test their apps.
But unfortunately, that feature has been exploited by fraudsters and scammers as a way to change their real location and hide their position.
So that's the first part of the problem, the technical problem related to location.
And the second part is around precision.
So IP addresses don't enable you to locate the user very precisely.
You're only able to understand, for example, which city or which state that user is located at.
And that's not sufficient to determine if the user is trustworthy or not.
In one city, there are going to be good users and bad users.
So you won't be able to tell the difference.
When it comes to GPS data, it is a lot more precise.
But the problem is, let's imagine a scenario in which a fraudster or scammer lives at an apartment building.
If that person is identified and you want to block that physical location, you won't be able to do that.
Because you would be blocking not only that fraudster, but everybody else who lives in that apartment building.
So you would be basically blocking a lot of good users because of one bad person.
So the precision is also super important here.
So basically what Incognit built differently was a new location technology that is spoof proof.
So people are not able to change their coordinates as they are able to do with IP addresses and GPS.
And the second thing is that Incognit's geolocation technology is able to get down to the, let's say, apartment level precision.
We're talking about 7 to 10 feet.
So it's a lot more precise than GPS data, for example.
And therefore, we're able to use it as a trust signal.
That's amazing.
So the proof of location accuracy is key for this.
Aha.
So literally two apartments right next to each other, you know, and it's able to differentiate between the location to that degree.
Exactly.
Wow.
That's incredible.
And that's so interesting about what you said, that this technology was actually sort of created, you know, for good, but has been used for evil.
Yeah.
Yes.
Wow.
And that's so fascinating.
So question for you, Andre.
So how could marketplaces use this alongside maybe other fraud prevention things that they were doing?
How does it fit into a sort of like, you know, suite of technologies that a marketplace might want to use?
Perfect.

So this could be seen as kind of like a new pair of lens for the fraud fighters and trust and safety professionals where they can see new things that they were not able to see before.
So for example, one of the most used scenarios here for this technology is around identifying the good users and providing them with a better user experience.
So for example, when someone is trying to create a new account, there is quite some friction as part of that process.
Usually those applications are asking us a lot of questions, asking us to provide a lot of information about ourselves.
But one of the signals that we use to reduce the friction is by identifying the address that the user is providing and trying to match that to the physical behavior of that device.
So basically, we see that about 85% of new accounts are open when the user is at home, which is the most typical address use for delivery or billing, for example.
So if we see that type of match, we're able to reinforce to the marketplace that the likelihood of this being a good user is very high.
Therefore, you should try to ask fewer questions to this user and provide them with a better user experience.
So that's one way of using it.
So in this case, we're really trying to promote a better user experience.
On the other hand, what we see as well is if we identify that from the same location, we're seeing multiple accounts being created, the likelihood of that being fraud is very high.
Because obviously, there are some scenarios in which a family can suddenly decide to open accounts on the same marketplace at once.
But this is less likely.
So if we see like 5, 10, 20 accounts being opened on the same website or application from the same place, that doesn't seem to be a good thing.
It's a big family.
Yeah, exactly.
Exactly.
So that's where we enter the concept of identifying suspicious locations.
So if we find repeat activity from the same place, that's not good.
That doesn't apply only to the account opening process.
So it can also be applied to other parts of the customer journey.
So when they are, for example, they can purchase, log into an application or to an account they already have within that app.
So with those signals, we're able to identify if the current behavior is related to the historic behavior that we know from that account.
And we're able to use that to remove friction from the authentication process.
So for example, instead of sending an SMS to the user to validate their accounts, if we identify that they are at one of their trust locations, like their home or their office, we can basically bypass that verification step.
Same applies to password, same applies to biometric verification.
So you're able to remove the friction from the process.
And then finally, one other thing that's also quite relevant here when using location for marketplaces is that this applies not only to the consumer side, but also to the sellers.
There are a lot of issues related to seller verification.
And one of the key things around verified sellers is to verify their physical addresses.
So let's say I'm on a home rental platform and I want to list my space on that platform to start making some money.
One of the things I need to do is to provide an address.
So if we're using location verification, we can streamline the process of verifying that listing.
And the same applies to other types of marketplaces.
What about, and this probably just seems like such a simplistic question for such a complex piece of technology.
But when I'm using certain apps, I can make sure that the app can't see my location.
But does that work?
Can I switch off the, you know, the incognito product like that?
I'm guessing not, but it just seems like how, you know, surely you have to opt in to be able to be tracked in that way.
Yes, exactly.
So the user does have full control over this.
So they can decide when to opt in or when to opt out.
And actually privacy is one of the key elements of our solution.
That's actually why the name of the company is incognito.
It has to do with like users wanting to protect their real identity.
So related to privacy and user control, we do basically three things.
The first one is we do not collect anything outside of the device and location information.
So we don't know the user's name, phone number, email address, anything like that.
It's all about the device and its behavior.
Second thing is that when it comes to the behavioral information, particularly location behavior, we only collect data once the user authorizes us to do so.
So if the user decides, no, I don't want to share location with this application, they're basically deciding not to use incognito as a way to protect them.
And then finally, when it comes to privacy, the other thing is the opt out process, right?
The user can turn this off at any time.
So why are we doing this this way?
First of all, because location data is particularly sensitive.
Yeah.
And therefore, we want to do it in a way that users understand that they have control over this.
And this was actually one of the biggest concerns while we were launching this, which is users could eventually just say, like, I don't want this.
And the company wouldn't exist.
But what we're seeing in practice is that over 90% of the users are deciding to opt in because of two things.
First one is they're more protected.
So that's something they want, like when they're opening a bank account or when they're signing out to a new marketplace.
They want to make sure that their account is not going to be accessed by someone else.
And turning this on is a great way to do that.
As an example, over the past two years since we launched the product, there was no record of any accounting or fraud on our platform.
So no one was able to access someone else's account once the accounting was turned on.
Wow.
And then secondly is related to removing friction, right?
Having a better user experience.
If the user understands that this is a technology that doesn't know them, but will be able to, for example, replace passwords, biometric verification, SMS-based authentication,
they're going to have a much better user experience.
And most people want that type of convenience.
So most people are choosing to turn it on.
We're very happy with the results of all of them.
Well, exactly.
I mean, that's what we're all after, isn't it?
We're all after an easy life and a quick and easy user experience on the apps that we've become used to.
So absolutely.
Now, Andre, I'm going to ask you something.
I noticed when I was reading about Incognia that you were founded in 2020.
During the pandemic?
Before?
What was the timing of that?
Because it's interesting when you see that a company was founded in that fateful year.
Yes.
Yes, exactly.
Well, the story was quite crazy, to be honest.
So before starting Incognia, I was actually running a different company, also related to location-based services.
And the name of the company was Enloco.
So I founded that company in Brazil.
It became the leading location-based marketing platform in Latin America.
And I was in the process of expanding that business to the U.S. market.
So I had recently moved to the U.S.
I think it was in February of 2020.
And right after I moved to the U.S., I think it was like a matter of two or three weeks, the pandemic started.
We started going through the lockdowns, et cetera.
And most of our clients were physical retailers.
And pretty much all of them had to shut down during the pandemic because of the lockdown.
So what happened then was that business, unfortunately, started going pretty badly during that time.
We decided to sell it as quickly as possible.
And right after we sold that business in August, we decided to use all the funds to invest in this new product, which I was actually already working on it.
And then we launched Incognia in September of 2020.
So it was a very intense process of shutting down the business and selling it and starting a new one very, very quickly.
Yeah.
But yeah, I'm glad that we were able to launch it.
Well, yeah.
I mean, it's like Incognia is one of these sort of, you know, kind of companies which were sort of born out of the pandemic and born out of a situation in that way.
But I think sometimes, you know, it is that, you know, necessity.
What do they say?
Necessity is the mother of invention.
And, you know, you've obviously created something really special during that difficult period.
And I know that in terms of people going online and, you know, during that 2020 period, a lot of, you know, there was a real surge in fraudulent activity just because a lot more people were going online.
So, yeah.
So, well, gosh.
And we're really, you know, three years on from that.
And it sounds like you've, you know, you've been doing really well.
And we're really glad to have you as part of the marketplace risk community.
And I'm really excited to hear about this new product.
So, just to sort of, you know, conclude really, what's ahead really?
Because you've just launched this new feature.
Obviously, you know, you're still a very new company.
What's, you know, without giving away any spoilers, what are the other plans for 2023?
Because you've already kind of, it's been quite an exciting start.
How are you going to follow that really?
Yeah.
Yeah.
Well, first of all, I'm also really glad to be part of this community.
I'm very excited about being part of the marketplace risk community and advisory board.
And, yeah, it has been a very intense journey so far.
Like, over the past two, almost two and a half years now, we went from like zero to over 200 hidden mobile users,
leveraging our technology in over 25 countries.
So, we're very excited about all this growth.
And looking ahead, I think that the key things for us are to first continue to bring the product to more companies
and enable them to use location verification as this new signal that can help them reduce fraud,
but also reduce friction on user experience.
And besides growth, I'd say that regarding the product,
we continue to double down on finding new ways to leverage location as a strong signal for verification.
I would say that we have only explored the tip of the iceberg so far.
There are a lot of other things that can be done with that type of information.
For example, we're building this network in which our customers are starting to contribute feedback data related to what they see on their side.
So, for example, if data and five, like fraudulent activity on their end, they report that to us.
And then we link that information to all of the historical geolocation information we have associated to that device
and to the accounts that that device has access.
Once we have that type of information, we're able to share it with our other customers and to start becoming more proactive.
So, for example, if we see a new account being opened on a different marketplace,
but we identify that there is location information that is indicative of potential fraud, for example,
we're going to notify the customer work back.
So, we don't need to wait for the customer to be defrauded first so that we could mark that physical location and block it.
Like from that point onwards, we can actually start being more proactive.
So, that's one of the most exciting things we just launched, which is the idea of suspicious locations.
So, that network is growing very quickly.
And besides that, we're also investing in enabling our customers to apply our technology to other parts and other channels that they have with their customers.
So, we started enabling our technology only for mobile applications.
We just launched our solution for web applications as well.
So, it also can be now used on browsers, on laptops and desktops, which we were not covering so far.
So, yeah, those are the key things that we're investing in right now to enable customers to explore more of our platform.
That's great.
And, well, it sounds like you've got an exciting year ahead.
So, well, we'd look forward to hearing more from you and from Incognia and getting to know you at some of our in-person events this year, as well as online and on today's podcast and also hopefully on some webinars as well.
So, look forward to it.
And thanks again, Andre, for being on the podcast today.
Thank you, Elle.
It was a pleasure.
Thank you for tuning into the Platform Podcast.
Be sure to check us out at MarketplaceRisk.com for information and resources to help startups launch, grow, and succeed.
And follow us on social media at Marketplace Risk to stay up to date on all of our conferences, summits, virtual events, and more.
