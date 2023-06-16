---
title: Choosing accessible colour contrast
permalink: /:path/:basename/
---
All colour combinations must have sufficient contrast. 

* headings must have a colour contrast of at least 3:1
* body text must have a colour contrast of at least 4:5:1
* very high contrast, like pure black text on a white background, can be [hard to read and cause eye strain](https://uxmovement.com/content/why-you-should-never-use-pure-black-for-text-or-backgrounds/)
* avoid placing text over images - if you must place a dark background colour behind the text

Use tools to check colour combinations
* [WebAim’s contrast checker](https://webaim.org/resources/contrastchecker/) tells you if your combinations pass or fail the [web content accessibility guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) at AA and AAA
* [Who can use](https://www.whocanuse.com/) shows how your combinations look to people with certain eye conditions and in certain light settings
* [Accessible colours](https://accessible-colors.com/) checks your contrasts and suggests alternate text or background colours that will pass WCAG AA and AAA



## Text colour vs background colour (colour contrast)

A widely held misunderstanding is that people ask "Is this colour accessible?" However, it would be more appropriate to ask "Is this colour combination accessible?" The reason for this is that accessibility is often measured by the colour contrast between two colours, and it requires the consideration of at least two colours. Simply stating that a black text is "accessible" is not accurate because it may be accessible on a white background, but not on a black background.

### Headings

Heading text is typically larger and concise. The minimum colour contrast ratio should be at least 3:1.

![When colour contrast is not strong enough for heading text](/assets/images/heading-text-fail.png)

![When colour contrast is strong enough for heading text](/assets/images/heading-text-pass.png)

### Body Text

The main content we aim to deliver to our users is referred to as body text. This text is usually longer than heading text and smaller in size. The minimum colour contrast ratio should be 4.5:1 for better readability.

However, it's important to avoid having too high of a contrast ratio as well. A full black (#000000) text on a full white background (#FFFFFF) has a contrast ratio of 21:1. This can be visually overwhelming for some users.

![When colour contrast is not strong enough for body text](/assets/images/body-text-fail.png)

![When colour contrast is strong enough for body text](/assets/images/body-text-pass.png)

### Text Over Textured Backgrounds

Placing text over textured or photo backgrounds can present challenges for readability. To improve visibility, it's recommended to use a solid or darkened background behind the text to increase the colour contrast. 

### Colour contrast checker

When testing colour contrast ratio, there are some free online tools for us to choose. [The contrast checker from WebAIM](https://webaim.org/resources/contrastchecker/) is one of the most popular ones.

- - -

## Colour as information

While it may seem natural to use colour to convey information, such as using red for "failed" and green for "succeeded," this approach may not be accessible to individuals with colour blindness.

For most users, they may see project statuses as follows:

![Using red and green to convey information](/assets/images/colours-only-coloured.png)

However, individuals with colour blindness may see it differently:

![Red and green may look similar for users with colour blindness ](/assets/images/colours-only-bnw.png)

We are not suggesting to avoid using colour entirely, but rather to complement it with other forms of conveying information. For example, adding text descriptions like this:

![Using text alongside colours](/assets/images/colours-and-text-coloured.png)

This way, even individuals with colour blindness can still understand the difference:

![Users with colour blindness can still see the difference because of the text](/assets/images/colours-and-text-bnw.png)

- - -

## WCAG 2.1 references

[Guideline 1.4.3 – Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum)