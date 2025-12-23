---
title: Creating page structure with HTML
permalink: /:path/:basename/
navigation_order: 1
tags:
  - Development
---

The way we write code influences how assistive technologies interpret pages. We should use HTML to create semantic structure for our pages and use the appropriate HTML tags for elements.

## Titles and headings

Headings help users navigate through a page.

Make sure that:

- every page or view has unique `<title>` and `<h1>` content - these can be the same, but titles and h1 content should not be repeated across pages
- [headings follow a logical order](/content/writing-useful-headings#applying-heading-structure) and do not skip through levels
- [headings are useful and frontloaded](/content/writing-useful-headings)

## Landmark elements

Sectioning elements, otherwise known as landmarks, create a broad outline of page content. They make it easier to navigate a page using a screen reader. Landmarks include `<header>`, `<nav>`, `<main>`, and `<footer>`.

Some landmarks automatically create ARIA roles, and so should be used appropriately. For more information see W3.org’s documentation on [landmark sectioning elements](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/#htmlsectioningelements).

Make sure that:

- Every page has a top level `<main>` landmark, which should contain the page’s main content
- Add a skip to main content link at the top of the page if your header contains content which is not unique to the page, such as a complex navigation menu
- If there is more than one of a particular landmark region (for example, two navigation menus) each should have a unique label. It could be labelled by a heading using an `aria-labelledby` attribute
- If you have multiple header and footer sections in a page, make sure to include:
  - `role="banner"` once for the primary header
  - `role="contentinfo"` once for the primary footer

## Using the right html tags

HTML tags help assistive technology to convey information to the user. Tags help tools describe content appropriately. Tags are particularly important for complex information like tables.

Make sure that the visual appearance, HTML markup and expected behaviour of a page are semantically coherent.

Using the right HTML tag for the job can reduce the burden of adding ARIA attributes and roles to elements, and avoid unnecessary complications in our code.

Here’s a minimum example of what it would look like to create an accessible link using a `<div>` tag, versus just using the tag that's built for creating (accessible) links: `<a>`.

When using a `<div>` tag for a link, you must:

- assign a role
- add a tab index
- add visual styling for focus, hover and other states
- add JavaScript to the element to navigate to the new page

```html
<div role="link" tabindex="0" 
  onclick="doSomething()" 
  onkeydown="doSomethingIfEnterKey()" 
  class="app-link">
  Link text
</div>
```

If you use an `<a>` tag you only need the `href` attribute to convey the same information and produce the same behaviour.

```html
<a href="/page-link">Link text</a>
```

Make sure to:

- Determine whether an appropriate HTML tag (with a default role) exists for your purpose
- Add the expected behaviour when assigning a role to an element. For example, adding role=”button” will need an on click action and a tab order attribute
- Be careful not to use elements for a purpose which does not match their default role
- Avoid overriding the role of elements with associated roles.

## References

- W3.org: [General principles of Landmark Design](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/#generalprinciplesoflandmarkdesign)
- W3.org: [ARIA in HTML](https://www.w3.org/TR/html-aria/)
