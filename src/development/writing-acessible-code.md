---
title: Writing accessible code
permalink: /:path/:basename/
tags:
  - Development
---

The way we write code influences how [assistive technologies](/introduction#what-we-mean-by-assistive-technology) interpret pages. We should:

- use the GOV.UK Design System (if appropriate for the service)
- create semantic structure for our pages using HTML
- use appropriate HTML tags for elements
- describe visual content
- provide accessible names for interactive elements
- provide visible feedback

## Using the GOV.UK Design System

When building digital services which meet the [Service Standard](https://www.gov.uk/service-manual/service-standard), refer to the [GOV.UK Design System](https://design-system.service.gov.uk/) for common components which have been extensively tested by users with different accessibility needs. If a Design System component doesn’t exist for what you need, use the appropriate HTML element.

Using the GOV.UK Design System or any other library does not guarantee delivery of an accessible end product. You should always check the guidance when using components or patterns from these libraries. Check GitHub for ongoing conversations about components and patterns and share your findings.

[Test the code and application](/development/what-do-i-need-to-test) in the same way you would when writing code from scratch.

## Using HTML for semantic page structure

### Titles and headings

Headings help users navigate through a page.

Make sure that:

- every page or view has unique `<title>` and `<h1>` content - these can be the same, but titles and h1 content should not be repeated across pages
- [headings follow a logical order](/content/writing-useful-headings#applying-heading-structure) and do not skip through levels
- [headings are useful and frontloaded](/content/writing-useful-headings)

### Landmark elements

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
<div role="link" tabindex="0" onclick="doSomething()" onkeydown="doSomethingIfEnterKey()" class="app-link">
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

## Describing visual content

You must [provide meaningful alternative text](/development/videos-and-images) to describe non-text content so you do not exclude people who cannot access visual content.

## Naming interactive elements

Interactive elements include buttons, links, text input fields and so on. These should all have a unique and meaningful label. This label provides context for screen reader users.

The text content in any button or link will be the default name for the element.

You will have to name any buttons or links that do not have text content - such as a button with an icon or an image of text. Use a custom CSS class to visually hide text content that will serve as the element’s name.

Using ARIA labels to name buttons can lead to complications:

- some screen readers may not recognise the ARIA label when translating content to other languages
- the ARIA label may overwrite the element’s existing name.

If an interactive element does have text content, but the text content doesn’t uniquely identify it, provide a name accessible to screen readers. For example, if you have a table of records and an actions column with an edit button for each record, you can include a visually hidden name to indicate to which record each button is linked to.

All text inputs should have an associated label element, which should ideally be visible.

### Checking names on interactive elements

Use the browser developer tools to check the name on an interactive element:

- hover over an interactive element with the selector tool to see its name
- open the [accessibility tree](https://developer.chrome.com/blog/full-accessibility-tree) in your browser developer tools to see how the name was provided (label, contents or ARIA label)

## Providing visual feedback

Users need to know where they are on a page. This can be more difficult for people using a keyboard, screen reader or speech recognition tool to navigate a site.

When adding custom styles to interactive elements using CSS, makes sure to:

- include focus, active and hover styles
- use the browser default if your design system does not provide a style.

## References

- W3.org: [General principles of Landmark Design](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/#generalprinciplesoflandmarkdesign)
- W3.org: [ARIA in HTML](https://www.w3.org/TR/html-aria/)
- Scott O'Hara: [Inclusively hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html)
