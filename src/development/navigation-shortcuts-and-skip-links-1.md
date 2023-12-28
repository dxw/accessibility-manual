---
title: Navigation shortcuts and skip links
permalink: /:path/:basename/
tags:
  - Development
---
People with visual impairments should be able to skip past certain content on a page.

## Skip links

Use a skip link to let users bypass content that's used repeatedly in your service, like main navigation.

Make sure the skip link points to a tag that's correctly referenced with a unique id on all pages where the skip link is present.

The GOV.UK Design System [skip link](https://design-system.service.gov.uk/components/skip-link/) is a good example. The link is visually hidden until a keyboard press activates it.

## Landmarks

Sectioning elements, otherwise known as landmarks, create a broad outline of page content. They make it easier to navigate a page using a screen reader. Landmarks include `header`, `nav`, `main`, and `footer`.

If you have multiple `header` and `footer` sections in a page, make sure to include:

* `role="banner"` once for the primary header 
* `role="contentinfo"` once for the primary footer

## WCAG references

* [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#content-structure-separation-programmatic)
* [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-skip)