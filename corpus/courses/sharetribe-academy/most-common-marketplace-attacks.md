---
source: "Sharetribe Marketplace Academy"
category: "B2B2C"
url: "https://www.sharetribe.com/academy/most-common-marketplace-attacks/"
title: "most-common-marketplace-attacks"
fetched: "2026-08-29T11:20:39.210Z"
via: "http"
---

- How to defend against 8 common marketplace attacks - Sharetribe 
 Skip to main content 
 
 

 
 Subscribe 

 Starting a marketplace Platform technology 

# The 8 most common attacks on marketplaces, and how to defend against them
 Online marketplaces are prime targets for attacks. Here&#x27;s what you should know about defending your marketplace against the most common risks.
 

 Mira Muurinen , Head of Content 

 Oct 1, 2025 Last update Feb 23, 2026 

 

 
 Online marketplaces are prime targets for attacks. They bring together large groups of users and process money between strangers. Many are also run by early-stage founders who don&#x27;t have the resources to prioritize security.
 In practice, every founder has to accept some level of risk. Every safeguard has a cost: extra steps for users, extra work for developers, or both. And as defenses evolve, attackers adapt. No platform is ever 100% secure.
 At the same time, many of the common risks that threaten marketplaces can be mitigated.
 At Sharetribe, we’ve powered more than 10,000 marketplaces over the past decade. That experience has taught us how attacks unfold, which defenses are most effective, and how to support founders when something slips through.
 In this article, you’ll learn:
 Why marketplaces are particularly vulnerable to attacks
- The eight most common marketplace attack types (they are: attacks exploiting the OWASP top 10 vulnerabilities , brute force attacks , credential stuffing , DDoS attacks , fake seller account attacks , fake user attacks , message spam attacks , and insider threats )
- The most effective defenses against each attack type
- Some real-life examples of marketplace attacks Sharetribe has faced
- Sharetribe’s Chief Security Officer’s checklist of the key security measures to implement on your marketplace  📌
- Why no website is 100% attack-proof   

## Why are marketplaces vulnerable to attacks?

 There are two main reasons why marketplaces can be particularly vulnerable to attacks.
 
- Their core value proposition creates inherent vulnerabilities.
- Their founders lack the necessary skills and resources to prioritize security. First of all, online marketplaces, by nature, tend to:
 
- involve money
- handle sensitive personal and business data
- have many user roles with different privileges
- rely heavily on user-generated content All of these are key characteristics that make marketplaces valuable. However, the same qualities also make them vulnerable—and interesting to malicious players.
 Secondly, thanks to no- and low-code tools, marketplaces have become a common starting point for solopreneurs or small teams with limited technical skills. These founders may not have a deep enough understanding of web security best practices to inform their choice of tech stack.
 Furthermore, security and reliability require constant work from experienced senior developers. They’re expensive investments even if the skills were readily available (which they often aren’t). It’s difficult to prioritize developing invisible security foundations over the flashy new feature users have been asking about.
 Even at Sharetribe, where reliability is a core part of our value proposition (a customer once (affectionately!) described us as “ boring but unbelievably reliable ”), we’re constantly balancing preventing attacks and being reactive if something does happen. (More on this later.)
 Regardless of the platform or technology that powers your marketplace, it’s critical to understand the specific attacks that tend to hit marketplaces—and how to defend against them when they do.
 

## What are the most common marketplace attack types & effective defenses?

 Over the past decade, Sharetribe has worked with over 10,000 marketplaces. Unfortunately, this means we’ve seen it all when it comes to attacks against marketplaces. 
 In our experience, these are the eight most common attack types against marketplaces:
 
- Attacks exploiting the OWASP top 10 vulnerabilities 
- Brute force login attempts
- Credential stuffing
- Distributed Denial of Service (DDoS) attacks
- Creating fake seller accounts
- Creating fake users for spam reasons
- Sending spam to existing users on the marketplace
- Insider threats Next, we’ll discuss how to identify each of these attack types and defend against them. For some attack types, we also have real-life examples from our history of working with marketplaces.
 

## 1. Attacks exploiting the OWASP top 10 vulnerabilities

 The Open Worldwide Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software. It maintains a top 10 list of the most critical security risks to web applications and offers recommendations for removing these vulnerabilities.
 While some risks and vulnerabilities discussed later in this article are specific to marketplaces, the risk categories on the OWASP Top 10 list apply to any and all websites. Every developer you work with, therefore, should be aware of them and able to prevent creating these vulnerabilities in your marketplace architecture. 
 

### What are the OWASP top 10 risk categories?

 The OWASP Top 10 list is a widely accepted starting point for building secure websites. The list for 2025 is:
 
- Broken access control
- Security misconfiguration
- Software supply chain failures
- Cryptographic failures
- Injection
- Insecure design
- Authentication failures
- Software and data integrity failures
- Security logging and monitoring failures
- Mishandling of exceptional conditions These risk categories can open the door to a wide range of attacks, including account takeovers, data leaks, unauthorized access to admin functionality, and full system compromise. (We’ll discuss two related, very common marketplace attack types, brute force attacks and credential stuffing, in the following sections of this article.)
 What they all have in common is that they stem from flaws in the application’s architecture or implementation, and attackers can often find and exploit them automatically, at scale. 
 For marketplaces handling sensitive user data, money, and multi-role interactions, even a single one of these vulnerabilities can have serious consequences.
 

### How to defend against attacks exploiting the OWASP top 10 vulnerabilities

 Many types of web attacks—like DDoS or spam, which we’ll discuss later—can only be mitigated, not entirely prevented. But that’s not the case for vulnerabilities on the OWASP Top 10 list.
 These risks stem from flaws in development practices that, with the right knowledge and discipline, can be prevented.
 However, not every team or individual developer has the skills or resources to follow best practices. As attackers constantly evolve, so do the recommendations. Keeping a web application as complex as an online marketplace fully up to date with web security essentials takes a lot of work and expertise.
 Still, our recommendation is to take the OWASP best practices as the default starting point for your marketplace security. As OWASP puts it:
 “Using the OWASP Top 10 is perhaps the most effective first step towards changing the software development culture within your organization into one that produces more secure code.” 
 On the OWASP top 10 page , you’ll find links to learn more about each of these vulnerabilities, attack examples, and prevention strategies. If you’re developing your marketplace from scratch or with the help of plugins, generic no-code tools, or vibe coding, OWASP’s website is a highly recommended resource. 
 

### How Sharetribe helps you prevent the OWASP top 10 vulnerabilities

 If your marketplace is powered by Sharetribe, the OWASP recommendations are built into its core architecture. In everything we build for Sharetribe, security implications are a key consideration. You won’t have to worry about any of the vulnerabilities mentioned on the OWASP top 10 list.
 If you add custom-coded elements on top of the Sharetribe-powered essentials, the security of that custom code is your team’s responsibility. That’s why it’s essential to work with experienced developers who understand and adhere to the OWASP best practices. 
 If you&#x27;re unsure about how to get started with the Sharetribe developer platform or want to make sure you&#x27;re building securely, our Developer Advocates are here to help.
 

## 2. Brute force attacks

 Failures in preventing some of the OWASP Top 10 security risks can make a website vulnerable to brute force attacks. Because these failures are common and successful attacks have high potential rewards, brute force attempts against marketplaces happen often. 
 

### What are brute force attacks?

 In a brute force attack, a malicious actor tries to get access to user accounts by repeatedly automatically guessing different variations of the credentials.
 Theoretically, a brute force strategy can break any encryption. However, if the cryptography of a web application is properly designed, there&#x27;s a minimal chance of successfully guessing the password. The longer and more complex a password is, the more resistant it is to brute force attacks.
 Brute force is a low-skill, high-automation attack type. The attacker doesn’t look for a complex vulnerability, but instead relies on poor password choices and weak account protection, and uses a relatively unsophisticated automated script to run the attack at scale.
 At the same time, poor password protections are a common vulnerability—and attackers know it. So, a brute force attack represents a low-effort, high-reward opportunity, especially on a website like an online marketplace, where access to a user account can result in financial gain. 
 

### How to defend against brute force attacks

 The best defense against brute force attacks is to follow the best practices for data storage and encryption. A well-designed security system can neutralize the threat of brute force attacks to a large extent. 
 Here are the most important preventive steps:
 
- Use two-factor authentication (2FA) to make guessed passwords useless on their own.
- Enforce strong password policies and store passwords using secure, adaptive hashing algorithms.
- Avoid reusing vulnerable components and ensure that authentication code is regularly reviewed, tested, and kept up to date.
- Apply rate limits and lockouts to block repeated login attempts from the same IP or account.
- Lock user accounts after multiple failed login attempts in a short time frame.
- Use CAPTCHA at login, either globally or triggered automatically for suspicious behavior .
- Require email verification before login is possible (practices like CAPTCHA and email verification also create obstacles for legitimate users—we’ll discuss this more later in this article) 

### How Sharetribe helps you prevent brute force attacks

 Sharetribe is built and maintained in accordance with OWASP recommendations, so brute force attacks don’t pose a significant risk to Sharetribe-powered marketplaces. 
 Sharetribe’s data storage and encryption are handled according to best practices. Two-factor authentication can be added via code, and in the no-code builder, social logins or single sign-on let you benefit from the 2FA components of social media platforms. Our engineering team also receives alerts when our systems detect anomalies in authentication behavior and intervenes if needed. 
 Brute force attempts against our customers happen regularly, but since they are unsuccessful, they often go unnoticed by marketplace owners and users.
 

## 3. Credential stuffing

 Credential stuffing is a common attack type that relies on users’ poor password choices. The attacks can be automated, so even a low success rate makes them worthwhile for attackers.
 

### What is credential stuffing?

 Credential stuffing is a subcategory of brute force attacks. Instead of trying to guess passwords, credential stuffing attacks use a list of stolen username-password combinations to attempt to log into user accounts. 
 Credential stuffing is one of the most common techniques used to take over user accounts. They work because many users— 78% of them, to be exact —reuse the same username and password combination across multiple sites.
 Naturally, on the level of a single website or user, the likelihood of finding the exact correct combination of website, username, and password is fairly low. However, the odds are still in the attacker’s favor.
 Credential stuffing attacks often use standard, readily available web automation tools or tools designed specifically for these types of attacks. This makes it possible to test thousands of leaked credentials against hundreds of thousands, if not millions, of web pages. There’s a high probability that matches will be found.
 And the attacker only needs to succeed a handful of times to already make the attack worthwhile. 
 For example, on a marketplace, access to a single user account is an opportunity to drain stored payouts, make purchases, access credit card numbers, send phishing messages or spam, and use the now-validated credentials to access other sites.
 

### How to defend against credential stuffing

 You can’t prevent users from reusing their passwords, so in theory, every marketplace with active users is vulnerable to credential stuffing attacks.
 However, much like in the case of brute force attacks, you can design your system in a way that makes the attacks almost impossible to succeed. Because a successful credential stuffing attack relies on large-scale automation, an effective defense is to make using such automation ineffective or impossible.
 Many of the best practices related to preventing brute force attacks apply to credential stuffing, too:
 
- Use rate limits to slow down bot attacks.
- Lock user accounts after multiple failed login attempts in a short time frame.
- Monitor for unusual login behavior, such as many logins from a single IP.
- Implement CAPTCHA or challenge-response after suspicious login attempts.
- Enable two-factor authentication (2FA) to make reused credentials useless.
- Use password reuse detection to flag or block credentials from known breach lists. 

### How Sharetribe helps you prevent credential stuffing attacks

 Similarly to brute force attacks, credential stuffing doesn’t pose a significant risk to Sharetribe-powered marketplaces. We use rate limiting and throttling to make credential stuffing attacks ineffective, and two-factor authentication can be added either through social logins or custom code.
 As these attacks are automated and large-scale, unsuccessful attempts against our customers’ marketplaces happen regularly. And much like brute force attacks, they pass unnoticed and move on to other targets.
 

## 4. Distributed Denial of Service (DDoS) attacks

 In a Distributed Denial of Service (DDoS) attack, a malicious player wants to harm a particular marketplace for financial gain (or other, more complex reasons). DDoS attacks can’t be fully prevented, but they can be strongly mitigated.
 

### What are DDoS attacks?

 Distributed Denial of Service (DDoS) attacks aim to make a service unavailable by overwhelming it with traffic or resource requests. 
 The traffic usually comes from multiple sources, often a network of compromised devices (or a “botnet”).
 DDoS attacks don’t directly try to steal data or credentials. However, they are very effective at making websites slow or unusable. If the attacker&#x27;s motive is financial gain, they might contact the website owner and demand a "ransom" to stop the attack.

 
 A ransom note from a DDoS attacker against Sharetribe two years ago (in which they claim they’re exploiting a vulnerability through an SQL injection attack, which they weren’t, in fact, doing). 

 DDoS attacks come in different types that target different parts of a network connection. An attacker might use many strategies and also change their approach in response to countermeasures.
 If you want to learn more about DDoS attacks and mitigation, Cloudflare’s DDoS resource is a great starting point.
 

### Real-life example of a DDoS attack against a marketplace

 In October 2022, we detected a massive amount of botnet traffic towards a Ukrainian Sharetribe customer. The attack came from more than 650 different IP addresses and wasn’t possible to locate, but the timing and target led us to believe the attack was politically motivated and related to Russia’s war of aggression against Ukraine.
 The attack continued over several days. Initially, it was successful: we had to take the targeted customer’s marketplace down twice and block all requests to their site for approximately one hour to prevent the attack from impacting other marketplaces.

 
 

 During the second attack, our core team deployed custom mitigations and rate limits that allowed us to block malicious traffic without taking the customer’s website down.

 
 

 In total, blocking the attack and deploying mitigations to keep the site live took several hours of work from two senior engineers.
 

### How to defend against DDoS attacks

 Smart DDoS attacks are indistinguishable from legitimate traffic. That’s why they can never be fully prevented, but they can be strongly mitigated or made ineffective . 
 Common best practices for DDoS mitigation include:
 
- Use a cloud provider that offers a built-in CDN and WAF protection.
- Apply rate limits to block or slow down abusive traffic.
- Enable auto-scaling and traffic filtering, offered by most cloud providers.
- Use challenge-responses like CAPTCHA. However, even with all the recommended defenses in place, DDoS attacks can still get through. 
 And when they do, mitigation often turns into a game of whack-a-mole that takes time, expertise, and constant attention. As attacks can take multiple forms and evolve in response to your defenses, stopping them often needs a tailored, reactive approach.
 That’s a problem, of course, for early-stage teams that rarely have the resources or deep technical skills to respond at that level.
 In a more recent example, Sharetribe faced a DDoS attack against our own site, which flooded us with more than 1,000 times our usual amount of requests. Mitigating the attack, again, took several hours of work from our most experienced developers and cost us thousands of dollars in additional AWS fees.

 
 Sharetribe’s CEO Juho discusses the DDoS attack against Sharetribe on Linkedin . 

 A mature, profitable company like ours can afford such an operation. For an early-stage founder without the backing of a SaaS provider, a similar type of attack would be devastating.
 

### How Sharetribe helps you defend against DDoS attacks

 Sharetribe always has a DevOps engineer on call, available 24/7. When our system alerts us that a customer’s marketplace is facing an unusual traffic spike, the engineer on call will begin to investigate.
 If the engineer notices that the customer is under a DDoS attack, our mitigation will depend on the nature of the attack. In many cases, custom defenses are needed, as in the example above. Our engineers will monitor the situation and adjust their response in order to keep the customer’s marketplace operational throughout the attack.
 

## 5. Creating fake seller accounts

 Another common attack type is creating fake seller accounts. In this attack type, seller accounts, listings, or both are created not to participate on the platform legitimately, but to exploit it for spam, phising, or financial crime . 
 The attacks are impossible to prevent entirely because any prevention would also affect legitimate users.
 

### What are fake seller accounts?

 Fake seller accounts on a marketplace refer to accounts that aren’t created for legitimate participation on the marketplace, but for some other purpose.
 Attackers may create these accounts manually or at scale (using bots or scripts) to:
 
- Post fake or scam listings
- Phish buyers into off-platform communication and payment
- Promote affiliate or spammy content
- Launder money using stolen credit card information Fake seller accounts might be identified through patterns like:
 
- Clusters of new seller accounts using similar email patterns or IP addresses, skipping steps in profile creation or using repeating patterns in description fields
- Accounts that post many listings very quickly after signup
- Low-effort or too-good-to-be-true listings (e.g. stock images and boilerplate descriptions or luxury products at unrealistic prices)
- Off-platform contact or payment details in product descriptions or messages (e.g. “Contact via WhatsApp”)
- Larger-than-usual number of purchases initiated within a short time frame Fake seller accounts exploit a vulnerability in marketplaces that is key to their value proposition: platforms want to remove all unnecessary friction from seller onboarding to make listing creation as easy as possible.
 However, if no precautions are taken, a marketplace founder may only notice an attack when it’s too late, and hundreds of fraudulent transactions have already occurred. 
 

### Real-life example of fake seller accounts on a marketplace

 In 2023, a customer contacted us after noticing that an unusually large number of listings for small sums of money had been set up. The customer didn’t use seller verification or transaction notifications, allowing the fraudster to publish listings and initiate transactions for almost 24 hours before the customer became aware of the attack.
 The situation turned out to be an example of a common marketplace attack type: a fraudulent user exploited the marketplace to launder money using stolen credit cards.
 The fraudster used a limited set of IP addresses, which gave our team a chance to successfully block them quickly.

 
 Side note, if you’re wondering about that one candy emoji reaction: it relates to an old tradition we have at Sharetribe of thanking our colleagues for exceptional work with a piece of candy we keep stocked at the office. 

 Unfortunately, the damage had already been done: hundreds of fraudulent transactions had been processed and couldn’t be reversed by Stripe. 
 Payment processing companies often view these kinds of incidents as the platform’s responsibility, which means the marketplace founder bears a significant cost (in this case, several thousand dollars) in customer refunds and dispute charges.
 

### How to defend against fake seller accounts

 Frictionless listing creation is a key value proposition on a marketplace, so defending against fraudulent users is a balancing act. 
 For example, marketplaces can add limitations to user and listing creation, such as requiring sellers to be verified before they can post listings. This adds friction and increases the workload of the admin, but also likely results in increased quality and trust, and reduces the risk of fake seller accounts.
 Another key component is escrow or delayed payouts: when a customer makes a payment, the platform should hold the payout to the seller until the customer verifies they’ve received the product or service.
 Admins should also keep a close eye on the marketplace so that suspicious activity doesn’t go unnoticed. Many payment service providers have additional fraud detection services that can be used.
 While a lot can be done to prevent these types of attacks from the outset, as long as the marketplace remains public and open to users, it will inevitably have vulnerabilities that can be exploited. And the more sophisticated the attack, the more work and expertise are required to effectively mitigate it. 
 Custom restrictions, like custom rate limits for account creation or transactions, can be temporarily implemented to block bot-generated activity.
 

### How Sharetribe helps you defend against fake seller accounts

 Sharetribe has a list of features available in the no-code builder that gives founders greater control over who can create accounts and post listings. The list includes:
 
- Seller verification : require each seller account to be verified by a marketplace admin before they can publish listings. 
- Admin notifications for new transactions (through Zapier integration).
- Escrow/delayed payouts : when a customer makes a payment, the money is held by the marketplace until the product or service has been delivered.
- Stripe integration with its fraud detection service, Stripe Radar , is available. As mentioned, Sharetribe’s engineers are always on call to address any suspicion of an attack and choose the best available approach to mitigate it. We’ll work with you to distinguish between malicious and legitimate activity, and if necessary, implement custom restrictions that allow legitimate users to interact on your marketplace while blocking spammers from creating accounts or initiating transactions.
 

## 6. Creating fake user accounts for spam purposes

 Similar to fake seller accounts, creating fake user accounts for spam purposes is a common way to exploit the key vulnerabilities of online marketplaces. 
 And in much the same way, complete prevention of spam is impossible without affecting legitimate use.
 

### What are fake user accounts?

 Fake accounts can be created on marketplaces for the purpose of sending spam. A spammer gains access to a large list of email addresses and exploits an online marketplace to deliver spam in a manner that bypasses email inbox spam filters.
 These accounts are often generated in bulk using bots, scripts, or third-party services. 
 Fake user accounts can be identified by the same kind of patterns as fake seller accounts:
 
- New users signing up in waves
- Use of random or formulaic email addresses
- Minimal, nonsensical, or formulaic profile information
- Depending on the purpose of the attack, you may also notice bios, comments, or direct messages driving traffic elsewhere Spam may seem annoying but harmless at first, but it might inflict real harm by eroding trust, skewing your analytics, and wasting resources.
 

### Real-life example of fake user spam on a marketplace

 A spam user attack is relatively common on online marketplaces. In a recent example, we noticed a spammer creating lots of user accounts on multiple Sharetribe-powered marketplaces, using leaked email addresses and adding spam content to the names of those users. 

 
 A marketplace spam tactic where new accounts were created with spam content as the user name. 

 The email addresses would receive a verification email for the account creation, which would contain the spam content.
 The spammer had managed to route the requests through the marketplace’s own backend, not the attacker’s IP, which made mitigating the attack more difficult. 
 At first, we relied on custom rate limits, which restricted the number of new accounts that could be created per minute. As the attack persisted, we had to temporarily block all new user account creation on the marketplace—affecting both illegitimate and legitimate users.
 The team kept working on the issue to lift the generic rate limit and implement a custom limit that targeted only spam users.

 
 

 

### How to defend against fake user accounts

 Spam can never be fully prevented, but there are ways to reduce it and mitigate its impact. 
 Here are some common practices:
 
- Approve each user manually at sign-up, before they can post listings or engage in transactions.
- Use CAPTCHA in account creation.
- Use rate limits to prevent auto-generating accounts or messages at scale.
- Use a honeypot , ie. a hidden field that real users won’t fill in but bots will, to identify spam accounts.
- Use email or phone number verification.
- Monitor user-generated content on your marketplace to quickly identify spam accounts. However, as with most attack mitigation strategies, marketplaces need to find the right balance between risk prevention and user experience (UX). Adding friction in the user signup process might also deter legitimate users.
 For example, today, Sharetribe doesn’t have CAPTCHA available without coding. It was available in our legacy product (Sharetribe Go), but most founders didn’t take it into use, likely due to the friction it added for legitimate users. We haven&#x27;t yet prioritized making it part of our core product, as we&#x27;re currently not convinced that its benefits outweigh the downsides.
 Sharetribe does, however, support email and phone number verification and offers founders admin tools to monitor user-generated content and be notified of new content. It also has great tools for user approval. (Some of these features need to be configured through Sharetribe’s pre-built Zapier integration.) 
 For example, founders could decide that after sign-up, each user needs to be manually approved by the marketplace admin before they can post listings or engage in transactions. 
 This strategy is likely to result in fewer user sign-ups, so it too has a cost. However, unlike an automated CAPTCHA element, manual approval can be a source of what is sometimes called “good friction”. You can use it to communicate your dedication to high quality and user protection, and curate a committed user base of individuals who truly want to engage with your marketplace. Especially in the early days, focusing on quality over quantity tends to be the winning strategy .
 

### How Sharetribe helps you protect against fake user accounts

 Sharetribe’s admin tools give marketplace admins great control over which accounts get access to the marketplace and what actions they can perform.
 Additionally, Sharetribe has global rate limits in place for all marketplaces to prevent the automated generation of spam user accounts in bulk. However, as you saw in the previous example, resourceful attackers will find ways to go around such limitations. 
 If that happens, our team will work on a custom solution in response to the specific attack type, and help you clean up the spam users from your database.
 

## 7. Sending spam to users with the marketplace messaging tools

 A spammer might not even need to go through the trouble of creating fake accounts. They could simply create a single account (or a handful) and target the users of your marketplace. Because the accounts appear more legitimate than the automated fake user accounts in attack types 5 and 6, they’re even harder to spot by marketplace admins.
 

### How your users may get spammed

 If your marketplace is publicly available, anyone can sign up and start sending spam messages to your users using your marketplace’s messaging tools.
 The goal of the spammer might be to:
 
- Promote external services (e.g., crypto scams, adult content, affiliate links)
- Trick users into off-platform communication (e.g,. "DM me on WhatsApp for a discount")
- Phish for sensitive information
- Annoy users and erode trust in your platform These spam campaigns are often automated, and while they’re typically carried out by fake users (see attack type 6), real users—or even previously legitimate accounts that have become compromised—can also be involved.
 Spam messages may be more difficult to identify than fake accounts, as admins might not pay as much attention to messages between users. If you are looking, you might notice:
 
- Sudden spikes in messaging volume, especially from new users
- Copy-pasted messages sent to multiple users (often with identical subject lines or URLs)
- Messages that include links to suspicious sites or WhatsApp numbers
- Real users reporting scams or asking, "Is this message legit?" 

### Real-life example of spamming marketplace users

 A customer using our legacy product, Sharetribe Go, encountered this type of attack two years ago. A spam user signed up to their marketplace, then used automation to message other users in bulk.

 
 Spam user plaguing the marketplace of customer of our legacy product, Sharetribe Go. 

 Our team implemented custom rate limits on transaction messages that effectively blocked the spammer.
 

### How to protect your users from spam

 As this type of attack originates from a handful of relatively legitimate-looking user accounts, preventing it from the outset is challenging. However, there are ways to mitigate the risks and ensure you act quickly when spam occurs:
 
- Approve each user manually at sign-up, before they can send messages
- Introduce a CAPTCHA element in messaging 
- Add rate limits to prevent a single user from sending a huge number of messages
- Introduce cooldown periods or rate limits between account creation and messaging
- Monitor message content and block and ban malicious users immediately
- Make it easy for users to report spam
- Use custom solutions, like custom rate limits or blocking specific IP addresses, when you encounter spam However, as noted earlier, the preventative tactics can come at a significant UX cost. If a legitimate user needs to fill in a CAPTCHA element every time they send a message or initiate a transaction, they might find the experience too cumbersome and leave your platform.
 

### How Sharetribe helps reduce spam messages on your marketplace

 At Sharetribe, we’ve so far been careful to introduce global limits on message volume or message content. Our customers’ marketplaces have varying needs and usage volumes, so generic limitations always carry the risk of blocking legitimate use and hurting the user experience.
 We can introduce marketplace-specific limitations at the customer’s request. The marketplace founders know best which kinds of message volumes or content are suspicious in their context, and with this information, we can set up automatic limits that only concern their marketplace. Our team has also occasionally proactively suggested custom limitations for our customers after detecting suspicious activity. 
 However, spammers tend to be very good at coming up with ingenious ways to bypass automatic limitations. That’s why it’s usually human reviewers—the marketplace admins or users—who first notice that something isn’t right in the messages they’re seeing. Sharetribe’s admin tools help you monitor your marketplace activity and block and ban users. Sharetribe’s developer platform also enables founders to introduce further safeguards tailored to their specific usage.
 Most importantly, if a spam attack happens, our team will step in. We’ll assess the situation and, when necessary, implement custom limitations to fully block the spammer or reduce their capability to send messages. 
 

## 8. Insider threats

 Some risks may originate from within your team, either accidentally or, in some cases, intentionally.
 

### What are insider threats against a marketplace?

 Marketplace administrators and developers have access to critical tools and user data. If these access privileges are misused, either by mistake or on purpose, the marketplace can suffer significant harm.
 Most of the time, the cause is a pure human error. A well-meaning developer or admin might accidentally:
 
- Push unsafe code to production
- Disable key security validations 
- Make bulk changes to user data without a backup
- Accidentally delete records or configurations Rarer but worse still is if these actions are taken intentionally. A disgruntled team member might intentionally manipulate data, delete accounts, expose credentials, or otherwise abuse their access privileges after leaving the team or losing trust in it. These kinds of attacks are often invisible until the damage is already done.
 

### Real-life example of a disgruntled developer causing problems on a marketplace

 Luckily, insider issues have happened very rarely on Sharetribe-powered marketplaces. Most of them have been innocent mistakes that our Developer Advocates or DevOps engineers have easily fixed. 
 But there have also been incidents where the harm was intentionally caused by developers external to the team.
 In a case from two years ago, a development agency in our Expert Network (a directory of external developers and agencies that we’ve vetted for experience working with Sharetribe marketplaces) had a disagreement with its own developer, who retaliated by deleting data from its customer’s marketplace.

 
 

 Luckily, we were able to block access to the marketplace from unsafe operator accounts and restore all the customers’ data, so the marketplace remained operational and the attack went unnoticed by the marketplace users.

 
 

 After an investigation into the incident, we determined that we could no longer work with the agency involved and removed them from our Expert Network. We also tightened our criteria for accepting new Experts to our network, ensuring we only accept a new Expert if they&#x27;ve received a positive testimonial from a founder they&#x27;ve worked with.
 

### How to defend against insider threats

 Unfortunately, it’s impossible to completely erase the risk of insider threats. People make mistakes. And sometimes, people can get upset and behave in unexpected and harmful ways.
 In the above example, the agency whose developer maliciously deleted marketplace data had successfully completed projects as a Sharetribe Expert for over two years before the incident. Even though we have a lot more visibility into our Experts’ operations than most founders hiring an agency, we couldn’t have foreseen a working relationship inside the agency turning sour enough to cause damage to our customer.
 There are, however, ways to decrease the likelihood of insider threats to your marketplace:
 
- Use centralized access management : Tools like Google Workspace, Okta, or password managers help you control logins and revoke access quickly if necessary.
- Audit and revoke access quickly : Immediately remove access when someone changes roles or leaves the team.
- Don’t rush hiring or outsourcing decisions : Take your time with your hiring process, be it for team members, freelancers, or agencies.
- Create onboarding guides : Write down the key things to learn for each role or competency, and ensure new team members get onboarded to best practices early on.
- Control admin privileges. In large marketplaces, dozens of individuals across several teams may hold admin rights. Tiered admin privileges and admin activity monitoring help manage the risk.
- Foster a healthy team culture : Most intentional insider threats stem from frustration or resentment, for which a great team culture is an antidote. 

### How Sharetribe helps you with insider threats

 Sharetribe’s Expert Network consists only of developers who we&#x27;ve verified to have provided high-quality service to our customers. 
 Unfortunately, as you saw in the example above, this doesn’t completely erase the possibility of an insider threat, but it significantly reduces the risk. And if something does go wrong and a dispute arises between a customer and a developer, we mediate. 
 If things go even more wrong, we’ll engage with the customer and help restore the damage done, for instance, by restoring affected data as in the example above.
 

## Marketplace security checklist 📌

 Here’s a list of marketplace security recommendations from our Chief Security Officer, Boyan. In the second and third columns, we’ve added information on whether the feature is available in Sharetribe without coding or in Sharetribe self-hosted.

 Recommendation Sharetribe&#x27;s no-code builder Sharetribe&#x27;s developer platform 
 Address any vulnerabilities mentioned on the OWASP top 10 list OWASP recommendations taken into account by default OWASP recommendations taken into account by default 
 SSL/TLS encryption (HTTPS) Enabled by default Requires proper server configuration 
 DDoS protection via CDN & WAF WAF included for the APIs, possible to use Cloudflare WAF included for the APIs, possible to use Cloudflare or any other similar service 
 Automated backups Included Included 
 Rate limiting on API endpoints Default protections in place Default protections in place 
 CAPTCHA or challenge-response at signup Not available Can be added* 
 Honeypots for form submissions Not available Can be added 
 Use two-factor authentication (2FA) in marketplace log-in Available through using social logins/single sign-on (as social media platforms have 2FA) Can be added 
 Manual approval for new users Available Available 
 Email verification for new accounts Can be added through Zapier Can be added through custom code/Zapier 
 Phone verification for high-risk users Available via integration Available via integration 
 Content moderation (manual + filters) Basic filters + admin tools Basic filters + admin tools (build more via custom code) 
 Control listing posting rights Available Available (build more fine-grained user rights via custom code) 
 Escrow/delayed payouts Included Included (but depends on your payment integration) 
 Admin tools to monitor activity Included Included (build more via custom code) 
 Admin notifications for new events Can be added through Zapier Can be added through custom code/Zapier 
 Spam detection & reporting tools Basic reporting + moderation tools Basic reporting + moderation tools (build more via custom code) 
 Offboarding & access revocation protocols Limited need (no direct server access) Must enforce for developers/admins 
 Audit logs for admin actions Not available Available via Events 
 Principle of least privilege for admins/devs Not available Can be configured via code 
 Regular software updates Managed by Sharetribe Backend: Managed by Sharetribe Frontend: Your responsibility 
 Third-party integration vetting Curated integrations only Your responsibility 
 

 * Currently, it’s relatively straightforward to build a CAPTCHA element that blocks most of the attacks. Building a setup that blocks more advanced attacks, where the attacker is able to figure out the marketplace’s client ID and call our API directly with it to bypass the CAPTCHA, requires significant work and an architectural change in Sharetribe Web Template. As you probably already guessed, even implementing everything on this list won’t make your marketplace completely attack-proof. That’s why you should also have some clarity on what actions you take if an attack gets through.
 

## Can you make your marketplace 100% attack-proof?

 I asked our Chief Security Officer, Boyan, this question while interviewing him for this article, and his answer was:
 “If someone promises you a 100% secure marketplace, they’re selling you snake oil.”
 In 2021, Google’s Project Zero reported a record number of real-world "zero-day" exploits targeting platforms such as Chrome and Android, some of which successfully bypassed multiple layers of protection. In 2019, over 100 million Capital One customer records were breached due to a misconfiguration in Amazon Web Services (AWS).
 These companies have tens of thousands of engineers working around the clock on security: running audits, building threat detection systems, and responding to threats. If such a world-class security operation can’t avoid attacks, chances are your marketplace will never be attack-proof either.
 The reason why even these massive technology companies can’t eliminate all risk is that security is a moving target. When you fix one vulnerability, attackers look for another. Exposure to real risk is how security matures.
 Furthermore, as your marketplace grows, so does the value it presents to attackers. More users, more data, more financial flows—all of these increase your platform’s attack surface.
 A third point is that, as you hopefully know by now, preventative measures almost always have a UX cost. Closing your marketplace behind security measures and verification tools will make it more secure, but it will also add friction for legitimate users. For most marketplaces, some added risk is worth accepting for a smoother UX.
 Finally, security also has a concrete price tag in terms of development hours required. Every company, no matter its size—including Google, Amazon, and Sharetribe—makes tradeoffs between protecting against theoretical risks and investing in features that bring concrete, immediate value to existing users. 
 A much better goal than perfection, therefore, is resilience: knowing where your vulnerabilities are, prioritizing defenses around what’s most valuable, and responding quickly when something goes wrong. If your marketplace is built on Sharetribe, you’re covered on all three.
 

## Final words: Security is a process, not a state

 Marketplaces often involve money, handle sensitive personal and business data, have many user roles with varying privileges, and rely heavily on user-generated content. 
 These are characteristics that both make a marketplace valuable to its users and vulnerable to attacks.
 In our experience, there are eight most common attacks against marketplaces:
 
- Attacks exploiting the OWASP top 10 vulnerabilities
- Brute force attacks
- Credential stuffing
- Distributed Denial of Service (DDoS) attacks
- Creating fake seller accounts
- Creating fake users for spam reasons
- Sending spam to existing users on the marketplace
- Insider threats While there are both technical and culture-related things you can and should implement to protect your marketplace against these attacks, not everything can be prevented. Therefore, it’s necessary to also consider what you can do if an attack does get through.
 If you’re building your marketplace on Sharetribe, you’re not developing your security infrastructure from scratch. You’re building on top of a platform with over a decade of experience defending against real-world marketplace attacks. While you and your team might be encountering these threats for the first time, we’ve been dealing with them for years.
 We won’t promise you a 100% attack-proof marketplace, because perfect security isn’t possible. What we can promise is that if something does happen, you won’t be alone. Our team of senior engineers has your back, just as we’ve done for marketplaces around the world for the past 12 years.

 
 

 Mira Muurinen , Head of Content 

 Oct 1, 2025 · Last update Feb 23, 2026 
 Copy article link 

 

## More articles for you
 

 
 Platform technology 

### Marketplace financial crime – how to avoid the risks
 Marketplaces can find themselves particularly at risk of financial crime. What specifically can happen on a marketplace – and how to avoid it?

 by Danielle Herndon 

 
 Platform technology 

### What do PSD2 and SCA mean for marketplaces?
 Prepare your marketplace for Strong customer authentication (SCA). Here&#x27;s what you should know about implementing 3D Secure 2 to comply with European payment regulation in 2019.

 by Mira Muurinen 

 
 Platform technology Starting a marketplace 

### Marketplace payments: The complete guide
 Marketplace payments are very complex. This guide helps you list your feature requirements and compare and choose the best marketplace payment provider for you. (Yes, there&#x27;s a comparison table!)

 by Juho Makkonen & Mira Muurinen 

 

 Start your 14-day free trial

## Create a marketplace today!
 
- Launch quickly, without coding
- Extend infinitely
- Scale to any size Start free trial No credit card required

 

 Starting a marketplace 
 Business model 
 Marketing & growth 
 Platform technology 
 Insurance 
 The Backstage
