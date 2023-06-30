---
title: Navigation shortcuts and skip links
permalink: /:path/:basename/
tags:
  - Development
---
For vision impaired users, the ability to navigate pages by jumping over repeated sections and other page content is important for quick and easy access to different parts of a page.

## Skip links

Whenever you have repetitive content on a page, then make sure to include a skip link above it. Typically, users want to bypass the navigation menu, so adding a skip link above this that navigates to the main tag of the page is the best approach that's commonly implemented.

Ensure that the skip link points to a tag that's correctly referenced with a unique `id` present on all pages where the skip link is present.

A [good example of a skip link](https://design-system.service.gov.uk/components/skip-link/) documented here in the GOV.UK Design System styles the link to be visually hidden until a keyboard press activates it.

## Landmarks

Sectioning elements, otherwise known as landmarks, help not only create a broad outline of page content, but also helps users navigate a page more easily when using a screen reader. Such examples of landmarks include `header`, `nav`, `main`, and `footer`.

![VoiceOver example showing landmarks dialog in the rotor menu](/src/assets/images/screenshot-2023-06-30-at-11.44.51.png "VoiceOver dialog showing rotor menu")

## WCAG references

* [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#content-structure-separation-programmatic)
* [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-skip)