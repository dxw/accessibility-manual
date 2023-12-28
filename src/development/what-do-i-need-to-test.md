---
title: Testing for accessibility
permalink: /:path/:basename/
tags:
  - Development
---
Accessibility testing is one of the most important parts of your role. 

You’ll always need to test, whether you’re working from an individual design or a library like the GOV.UK Design System and Frontend.

## What to test

Check that your work 

* has [alt text (alternative text)](/content/designing-alt-text/) for any non-text content
* has a [logical heading structure](https://accessibility.dxw.com/content/writing-useful-headings/)
* uses [meaningful text](/content/designing-links-and-forms/) that makes sense out of context for all controls, buttons and links
* has meaningful labels associated with all text inputs
* flows and resizes appropriately for the screen size and viewport scale
* uses valid markup with correct properties, states and roles that update when the page or component state changes
* uses ARIA correctly


Set up a checklist for all of your projects to make sure you test as many things as possible. 

The [A11Y checklist](https://www.a11yproject.com/checklist/) uses the Web Content Accessibility Guidelines (WCAG) and is a good place to start.

## When to test

Test often and thoroughly each time a new change, fix or feature request is created to include both automated and manual testing. 

Include testing

* before opening a pull request
* when reviewing someone else's pull request 
* when working on a previously untested project, plugin or other piece of code