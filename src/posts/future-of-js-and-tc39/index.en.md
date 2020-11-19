---
slug: '/blog/en/tc39'
date: '2020-11-19'
title: 'TC39 the future of JavaScript'
thumbnail: 'https://user-images.githubusercontent.com/15235605/99621800-c2185400-29f6-11eb-819b-abedfa69f1ce.png'
subject: 'JavaScript'
description: 'TC39? JavaScript? ECMAScript? This article explains how JavaScript evolves and who is the process of adding new features to the language'
---

Hi everybody, how is it going?

It's been a while since i've written my last article and a lot has happened ever since, but i'm not gonna talk about this for now, i prefer to leave this convo for the end of the article and go straight to what's important: the TC39.

<hr />

Maybe you've questioned yourself before about how the innovation cycle of JavaScript works and how new features are added in the language. In this article i'll try to explain a little bit how the process works and who are the people behind it.

But, to talk about that, first i need to start with a summarized history of JavaScript and ECMAScript. Let's go?

## JavaScript/ECMAScript and the confusion of nomenclatures

![javascript-vs-ecmaScript](https://user-images.githubusercontent.com/15235605/99622226-b5e0c680-29f7-11eb-8f0e-c76fcb9c2083.png)

A lot of people get confused when it comes to talk about what is JavaScript and what is ECMAScript, and a lot of times they even think it's the same thing. So let's clarify this whole thing once for all, and in order to do that, let's talk about some concepts:

**ECMA** stands for _European Computer Manufacturers Association_, which is a non-profit organization responsible for develop Standards and it's documentations. Basically i'd say they're like ISO. Oh, and in 1994 they changed their name and became [ECMA internacional](http://www.ecma-international.org/), which makes sense since the Standards created crossed the european borders.

In 1996, was this organization that Nescape chose to submit the JavaScript specifications, so from there ECMAScript was created and it's Standards got cataloged in a living document called [ECMA-262](https://tc39.es/ecma262/).

So, to summarize:

- JavaScript: the language.
- ECMAScript: the specifications and standards that JavaScript uses in it's implementation.

**ps:** ECMA became famous because of ECMAScript, but they are also responsible for standardize other languages like Dart, C# and even the CLI (Command Line Interface).

<hr />

## Cool, but what about TC39?

![tc39](https://user-images.githubusercontent.com/15235605/99621800-c2185400-29f6-11eb-819b-abedfa69f1ce.png)

TC39 stands for _Technical Comitee 39_, but what the hell is that?

Well, now we need to understand that, ECMA is an organization that has committees for each language and the standards they own, those committees are responsible for gathering regularly to discuss and continue (or not) existing features proposals as well as discuss about new proposals that were submitted. Each committee is totally independent and made by a group of different people. In the case of ECMAScript, this committee is the committee of number 39, hence the name [TC39](https://www.ecma-international.org/memento/tc39.htm).

Remember that i said that ECMA is also responsible for standardize other programming languages? So, some other ECMA committee examples are the [TC52](https://www.ecma-international.org/memento/tc52.htm), responsible for the standards of the Dart language, and the [TC49](https://www.ecma-international.org/memento/tc49.htm), responsible for a variety of standards like C# and the CLI.

Well, now that you understand what TC39 is, let's figure how the process of adding a new feature on the ECMAScript works.

The process is divided in 5 stages, and, if the proposal gets to the last one, the feature is officially added to ECMAScript. Let's go through each stage:

<hr />

### Stage 0: Strawperson

This is the initial phase, and happens if:

- A proposal is about to be presented to the committee by a member of the TC39, or
- The proposal was already presented, but it was neither rejected nor met the criterias to reach Stage 1.

All the proposals in stage 0 can be seen [here](https://github.com/tc39/proposals/blob/master/stage-0-proposals.md).

<hr />

### Stage 1: Proposal

This stage happens when a proposal is already formalized and arouses the interest of the committee. The idea is that in this stage the problem gets explored in an experimental way, with use cases and a high-level API is already proposed and discussed. Is also in this phase that a Github repo is created to capture all those requirements.

All the proposals in stage 1 can be seen [here](https://github.com/tc39/proposals/blob/master/stage-1-proposals.md).

<hr />

### Stage 2: Draft

At this stage the committee expects the functionality itself to be developed, all the main parts of the API semantics are already created, but some details do not necessarily needs to be finalized.

It's also common that in this stage the developers start to develop the feature using a compiler like Babel (in case it's possible).

All the proposals in stage 2 can be seen [here](https://github.com/tc39/proposals#stage-2).

<hr />

### Stage 3: Candidate

At this stage it's expected that all the API semantics are done and the solution is already finished. The idea is that at this stage the public already starts to use it and give feedback, and only changes that are extremely necessary coming from those feedbacks will be implemented.

All the proposals in stage 3 can be seen [here](https://github.com/tc39/proposals#stage-3).

<hr />

### Fase 4: Finished

A proposal gets to this stage when 2 independent implementations pass the [acceptance test](https://github.com/tc39/test262).

Proposals in this stage will be added to the next ECMAScript specification, which is updated yearly.

All the proposals in stage 4 can be seen [here](https://github.com/tc39/proposals/blob/master/finished-proposals.md).

<hr />

## Some feature examples

### [Optional Chaining](https://github.com/tc39/proposal-optional-chaining)

This one i've been using for a while thanks to Babel. Without a doubt one of my favorites. If you deal with dynamic objects (specially the ones that comes from API requests), you know how hard it is to deal with properties that can be _null_ or _undefined_ and how complicated it is to deal with them inside a conditional check. The Optional Chaining comes to make our lives easier in this regard.

```jsx
// before
const city = user && user.address && user.address.city;

// after
const city = user?.address?.city;
```

There are some gotchas in it's usage, but it's totally worth it. It saves me a good amount of lines of code.

This functionality reached Stage 4 in December 2019 and was published in the 2020 specification.

<hr />

### [Numeric separator](https://github.com/tc39/proposal-numeric-separator)

Writing big numbers in JavaScript is a tricky task. This new functionality helps us to write numbers with a lot of digits in a easy to read way:

```js
// before
const oneMillion = 1000000;

// after
const oneMillion = 1_000_000;
```

This feature is also available through Babel and i've been using it for a while. I was actually surprised to know that this feature was not a part of ECMAScript yet.

At the moment i write this article, this proposal is at Stage 4 and it'll be published in the next year release (2021).

<hr />

### [Record and Tuples](https://github.com/tc39/proposal-record-tuple)

I don't want to go into too much detail about this proposal because it is too early for that, and also because, in order to explain its importance i would have to talk about **primitive** and **non-primitive** types, and this topic itself is worth an article (maybe i'll do it?). But, in summary, what we can conclude about this feature:

- Record it's sort of a Object "evolution".
- Tuple it's sort of a Array "evolution".

But the most important part for me is how simple the equality comparison works with them, you can do something like:

```js
const areObjectsEqual = {a: 1, b: 2} === {a: 1, b: 2}; // false
const areRecordsEqual = #{a: 1, b: 2} === #{a: 1, b: 2}; // true

const areArraysEqual = [1, 2] === [1, 2]; // false
const areTuplesEqual = #[1, 2] === #[1, 2]; // true
```

This will be extremely powerful! In React, for instance, using Records and Tuples will decrease by a lot the amount of unwanted re-renders. Let's hope this reach Stage 3

At the moment i'm writing this article the proposal is at Stage 2.

<hr />

### Sources:

- https://github.com/tc39
- https://tc39.es/
- http://www.ecma-international.org/
- https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript

<hr />

## That's all folks!

First of all, thanks for coming here. I hope you've learned something new today and that this article has helped you in some way.

My last article was written in February 2018, so it's been almost 3 years that i haven't done this. Since then a lot has happened: i left my hometown, dropped out (for the second time) from my college degree to fulfill my dream of living in the Canadian lands, and doing what i love. Maybe i'll write something about this in the future talking about everything: the company i work on, the process and also some advices for those who want to follow the same path.

In this crazy journey one of the things i've always thought about was writing again. Now i've spent a couple of days making this blog platform almost from scratch (although Gatsby helps a lot) because i think it's time to do that again. So if you've enjoyed this article and wants to follow my next posts, subscribe to my Newsletter below and i'll send you an email every time i make a new post :)

Andd finally, here are my social medias in case you wanna follow me:

- [Github](https://github.com/lucasfrosty)
- [Linkedin](https://www.linkedin.com/in/lucasfrosty/)
- [Instagram](https://www.instagram.com/lucasfrosty/)

I think that's it. See you next time.
Byeeeeee!!
