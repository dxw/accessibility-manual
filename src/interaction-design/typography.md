---
title: Typography
permalink: /:path/:basename/
---
There are several typography elements that can enhance the accessibility of web content. These elements include:
- Font size, line height, line length
- Font weight
- Typeface

You may wonder why we discuss these three elements together, while others are mentioned separately. This is because font size, line height, and line length are interrelated and adjusting one will require reevaluating the balance with the others. They cannot be isolated when considering accessibility. And this time we will look at body text first, and then heading text after.

## Body text

### Font Size
There have been various studies on the ideal font size for web content, and it is suggested to use 18-22 px for desktop and 16-18 px for mobile. This range is large enough to be readable in most situations. The GOV.UK Design System, a widely used front-end framework for public sector services, uses 19px for large screens, which is within this range. The final font size may also depend on the typeface chosen, but this recommendation should be suitable for most common web fonts.


### Line Height
Having insufficient space between lines can cause eye strain for users, while excessive line spacing can also make it difficult for users to read the next line. Line height determines the rhythm of reading and is essential for accessibility. It is recommended to use a line height between 1.3 and 1.6 times the size of the body text, with larger line heights being more suitable for larger screens.


### Line Length
Line length is a commonly overlooked aspect of design. However, when possible, designers should aim for a range of 45-75 characters per line, including spaces, for optimal readability. This translates to a width of nearly 640px for a font size of 19px. Do you find this figure familiar? In fact, this is exactly the two-third of 960px - a very commonly used grid system in web design, including the default setting of GOV.UK Design System. Lines exceeding this length may become difficult to read. Of course, the rise of mobile devices is changing reading behaviours. That’s why the suggested minimum number of characters are much lower. 

### Combining All Three Elements

When adjusting any of the three elements (font size, line length, and line height), it's crucial to keep in mind that other elements may also need to be adjusted. For instance, if the body text size is reduced from 22px to 18px, the number of characters per line will increase if the container width isn't adjusted. This could lead to overcrowded lines and excessive spacing between lines. Hence, it's important to consider all three elements when making adjustments.

___

## Heading text

While heading text is intended to convey information quickly and succinctly, accessibility still requires consideration of font size, line height, and line length.

### Font Size

The font size of heading text should be chosen based on its content hierarchy. A semantically structured web page should have h1, h2, and h3 elements in a hierarchical order, with h1 being the largest, followed by h2 and h3, etc.

For accessibility, the heading text size should be distinct from the body text size. For example, if the body text size is 19px, using a heading size of 22px should be avoided.

### Line Height

As heading text is typically larger and shorter than body text, it's important to adjust the line height accordingly. If the heading spans multiple lines, a smaller line height can help maintain a more condensed appearance. A line height of 1 to 1.2 is recommended for heading text, which aligns with the range used in the GOV.UK Design System.

###  Line Length

Line length for heading text is of relatively less importance as it typically uses the same container width as body text. However, if the heading text is very large and the line length is very short, it may result in very few words on a single line, even just one word per line, which is not very accessible. In such a scenario, decreasing the font size may be necessary if the line length cannot be changed.


### Combining All Three Elements

As stated in the section on line length, we must take into account all three elements when making any changes. This concept is the same as designing for body text. Additionally, it is best to avoid having more than three lines of heading text as we aim to keep it brief. If a heading takes up multiple lines, consider rewriting it to shorten it.


___ 

## Font weight
To be added.

___

## Typeface
To be added.

___

## WCAG 2.1 references
[Guideline 1.4.3 – Contrast (Minimum)]
(https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation)