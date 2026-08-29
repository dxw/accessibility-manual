---
title: Naming interactive elements
permalink: /:path/:basename/
tags:
  - Development
---

Interactive elements include buttons, links, text input fields and so on. These should all have a unique and meaningful label. This label provides context for screen reader users.

## Links and buttons

The text content in any button or link will be the default name for the element.

You will have to name any buttons or links that do not have text content - such as a button with an icon or an image of text. Use a custom CSS class to visually hide text content that will serve as the element’s name.

Using ARIA labels to name buttons can lead to complications:

- some screen readers may not recognise the ARIA label when translating content to other languages
- the ARIA label may overwrite the element’s existing name.

If an interactive element does have text content, but the text content doesn’t uniquely identify it, provide a name accessible to screen readers. For example, if you have a table of records and an actions column with an edit button for each record, you can include a visually hidden name to indicate to which record each button is linked to.

## Input elements

All `<input>` and `<textarea>` elements used in forms should have an associated label element, which should ideally be visible.

## Checking names on interactive elements

Use the browser developer tools to check the name on an interactive element:

- hover over an interactive element with the selector tool to see its name
- open the [accessibility tree](https://developer.chrome.com/blog/full-accessibility-tree) in your browser developer tools to see how the name was provided (label, contents or ARIA label)

## References

- W3.org: [ARIA in HTML](https://www.w3.org/TR/html-aria/)
- Scott O'Hara: [Inclusively hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html)
- mdn: [The label element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
