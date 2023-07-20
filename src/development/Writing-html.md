---
title: Writing html
permalink: /:path/:basename/
---
How we write our code is important for how webpages are interpreted by assistive technologies. When working with govuk sites we can refer to the GOV.UK Design System for common components and patterns which have been extensively tested by users with different disabilities. After this we should use the appropriate html element. 
However, you should be mindful that using the Design System, or any other library does not guarantee delivery of an accessible end product and you should refer to the govuk guidance and below guidance when producing code. 

You should always refer to the guidance of any library or design system you are using, in addition to the below guidelines.

### Title and Headings

#### Why it matters
All screenreaders offer the ability to navigate a webpage by headings.

#### Guidelines
* Every page or view should have a unique title and h1. The title can be the same as the h1
* After the h1, headings should follow a logical, nested order 
* Do not skip heading levels

### Using appropriate html tags

#### Why it matters
Screenreaders and accessible tools interpret html tags and convey appropriate information to the user. By using the most appropriate tag we are enabling tools to describe content appropriately. This can be extremely important for representing complex information, such as a data table. The visual appearance and the semantics of a webpage should match up, as well as the expected behaviour.

For example, if we used a '\<div\>' for a link we would need to:

- assign a role
- add a tabindex
- add visual styling for focus, hover and other interactions
- add JavaScript to the element to navigate to the new page

```html
  <div role="link" tabindex="0" onclick="doSomething()" onkeydown="doSomethingIfEnterKey()" class="app-link">
    Link text
  </div>
```

On the other hand, if we use the appropriate html tag: the anchor \<a\>, the minimal information we need to add to convey the same information and behaviour is a `href` attribute containing the link.

```html
  <a href="/page-link">Link text</a>
```


Guidelines
* Determine whether an appropriate html tag with role exists for your purpose
* Adding a role to an element does not create the expected behaviour, you will need to emulate the expected behaviour (for example using JavaScript).




### Describe visual content

Why it matters


### Offer visible feedback



### Keyboard behaviour


What we should avoid

Guidelines



### Visual indicators

This is often a design consideration, but it is important to bear the following in mind when writing code:



* A valid and logical heading hierarchy
* All controls, buttons, and links have meaningful text which makes sense out of context
* Inputs correctly associated with meaningful labels
* Keyboard navigable content with visible focus states
* All content reflows and resizes appropriately for the screen size and viewport scale
* Forms correctly inform the user on any errors and how to correct them
* Markup is valid with correct properties, states, and roles which update as necessary when the page or component state changes
* Any ARIA used is implemented with caution and valid

## Progressive enhancement
