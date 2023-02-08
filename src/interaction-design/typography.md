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


### Line length
Line length is a commonly overlooked aspect of design. However, when possible, designers should aim for a range of 45-75 characters per line, including spaces, for optimal readability. This translates to a width of nearly 640px for a font size of 19px. Do you find this figure familiar? In fact, this is exactly the two-third of 960px - a very commonly used grid system in web design, including the default setting of GOV.UK Design System. Lines exceeding this length may become difficult to read. Of course, the rise of mobile devices is changing reading behaviours. That’s why the suggested minimum number of characters are much lower. 

### Combining Three Elements

When adjusting any of the three elements (font size, line length, and line height), it's crucial to keep in mind that other elements may also need to be adjusted. For instance, if the body text size is reduced from 22px to 18px, the number of characters per line will increase if the container width isn't adjusted. This could lead to overcrowded lines and excessive spacing between lines. Hence, it's important to consider all three elements when making adjustments.

___

## Heading text

Although the key function of heading text is to convey information in a short and quick manner, which is different to body text, accessibility of heading text still takes font size, line height and line length into consideration.

### Font size 

The choice of heading text size should also depend on the hierarchy of the content. A semantically well structured web page should contain h1, h2 and h3 in a hierarchical way. And h1 should always be the biggest one, and then h2 and h3 etc. 

An accessible heading text should be in the size that allows users to distinguish between heading and body text. If body text size is 19px, we should avoid using heading size at 22px. 

### Line height

Heading text are usually larger in size and shorter. If the heading is going to be multiple lines, we should keep the line height smaller so that the larger heading text will look more condensed. We recommend a line height between 1 to 1.2 for heading text. Line height of  heading text in GOV.UK Design System also falls in this range. 

### Line length

Line length of heading text is relatively less important as it usually uses the same container width as body text. However, if the heading text is very big and the line length is very short at the same time, we may see very few words in one single line - could be even one word per line only, which is very inaccessible for users. In this case, we may need to decrease the font size if line length is unchangeable. 


### Combining all three elements together

As mentioned in the line length section above, we will need to consider all three elements again when we change any of them. This principle is the same as designing for body text. And we should also avoid having more than three lines of heading text because we always want to keep heading text short. If we see a heading text occupying multiple lines, let’s consider rewriting it so it becomes a shorter heading. 

___ 

## Font weight
To be added.

___

## Typeface
To be added.

