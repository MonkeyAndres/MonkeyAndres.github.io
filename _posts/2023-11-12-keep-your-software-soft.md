---
layout: post
title: Keep your software "soft"
description: Philosophical thoughts after reading "Clean Architecture".
pin: false
tags:
- software-development
date: 2023-11-12 21:02 +0100
---
Some weeks ago I finished the book "Clean Architecture". Since then, I've been thinking a lot about software. Most of my thoughts are rather philosophical. However, I believe they are worth sharing as food for thought.

We all know what software is, but we might not remember why it was invented. Briefly explained, software was invented because people needed a way to quickly change the behavior of a machine. As opposed to hardware which is the "fixed" part of a system, software was meant to be "soft" and malleable.

It's in our best interests to keep software easy to change, both for our business and for us developers. Businesses gain the power to pivot as the industry needs change. We developers basically are making our job easier.

Keeping software malleable is not as easy as it sounds. It requires tons of discipline to build good systems and maintain the softness.

In general, the way we keep our software malleable is by leaving as many options open as possible. We should delay the decisions that could constrain the system making it "hard".

Every piece of software is composed by:
- Policy: the business rules and core use cases.
- Details: the rest of the pieces which are not core to the system. Examples include the database engine, web framework, GUI or IO devices.

As a rule of thumb, enforcing a separation between policy and details is a good starting point towards a good architecture.

## Software architect
The books talks a lot about the role of a Software Architect. To me every professional developer should learn how to be a good architect.

"The goal of a software architect is to minimize the human resources it requires to build and maintain the required system" - Clean Architecture.

A well-designed system should require a stable amount of effort throughout its lifetime.

Architecture is not only about high level details. A good architect gets into low level details that sustain the high level decisions. Without good understanding of the foundations one cannot define a "high level architecture".

The difficulty of changes to a system should be proportional to the scope of the change. Most times, the difficulty of changes is defined by the shape of the system. This is a smell of a bad architecture. Proper architecture prioritizes shape agnostic patters so that software could change in any direction. Remember, softness is the reason why software exists in the first place.

## Tech debt and clean code
Well-designed code matters. We write code for a machine to run it, but, more importantly we run code for us and our future selves.

Stop yourself from piling "tech debt". We all know that once tech debt starts to accumulate it's hardly cleaned afterward. Business pressure will never cease.

Remember that "getting to market first" and "adding more features" are business concerns. We as developers should defend our own ground. Reducing debt, testing, refactoring and proper monitoring are examples of our own concerns. Ask yourself this question: if you don't stand up to defend those principles in your organization, who will?

The best time to clean your code is after checking that it works, the second-best time is now. 

## Conclusion
This post doesn't follow my usual writing style and might seem vague. My goal was to share some random thoughts I had after reading "Clean Architecture".

I didn't intend to make a summary or anything. At this point, ChatGPT would probably beat me at that.

Feel free to check out the book to gain some insight on how to build clean architectures and "soft" software.