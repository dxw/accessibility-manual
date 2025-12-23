---
title: Automated testing
tags:
  - Testing
navigation_order: 1
---

At dxw we use automated tools us to help validate our services meet accessibility criteria such as WCAG. Testing often and early helps us reduce issues raised through manual testing and audits.

Manual testing is still a necessary complement to automated checks.

## Adding automated accessibility checks to our feature tests

We integrate automated accessibility checks into feature tests using axe-core where possible. axe is one of the most popular accessibility testing suites available, with widespread usage and [good language support](https://github.com/dequelabs/axe-core/blob/develop/doc/projects.md). It enables us to easily test for accessibility issues in our code in the same way we would use unit tests and feature tests–rather than leaving testing to the end of the development process.

Find examples of our automated accessibility tests in the dxw tech team's accepted RFC for [adding accessibility tests into our feature tests](https://github.com/dxw/tech-team-rfcs/blob/main/ways-of-working/rfc-244-use-automated-accessibility-checks-in-feature-tests.md).

## Using automated testing tools in the browser

There are several tools available to run against websites in the browser. These can be used by the whole team and can be a useful complement to axe. Different tools can produce different results and it is worthwhile running them together.

Recommended in browser testing tools include:

* [Wave](https://wave.webaim.org/extension/) (WebAim)
* [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?pli=1) (powered by axe-core)
