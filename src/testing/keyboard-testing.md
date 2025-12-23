---
title: Keyboard testing
permalink: /:path/:basename/
redirect_from: /development/keyboard-testing
tags:
  - Development
  - Testing
navigation_order: 2
---
## Check for anything interactive

When testing with a keyboard check that:

* all interactive components on a page are consistent
* the focus state is sufficiently visible for all components 

Test all interactive components, including:

* links
* form fields, such as inputs, checkboxes, dropdown (selects)
* buttons
* media play controls

## How to test

Use the `tab` key to move between interactive components. 

Use the `enter` key or spacebar to trigger components. 

You may need to use the arrow keys to test some elements, such as dropdown option fields.

## WCAG 2.1 references

* [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG20/quickref/#navigation-mechanisms-focus-visible)
* [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG20/quickref/#navigation-mechanisms-focus-order)
* [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG20/quickref/#keyboard-operation-trapping)
* [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG20/quickref/#keyboard-operation-keyboard-operable)
* [2.1 Keyboard Accessible (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#keyboard-operation)
