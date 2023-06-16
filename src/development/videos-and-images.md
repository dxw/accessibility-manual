---
title: Media
permalink: /:path/:basename/
---
## Images

Images should always have an alt property, whether the image has a purpose or not. 

See Designing alt text for a guide on how to write good alt text.

For vector-based graphics that are coded as an inline SVG, the alternative text should only be placed in the title element. If the SVG is for decorative purpose only, then add the ARIA hidden and focusable properties.

*Code example*

## Videos

Accessible captions should be included on all videos with speech, whether they’re self-hosted or on a third-party platform, such as YouTube. Use the standard HTML approach with a video element to correctly associate captions and a transcript, if one is available.

*Code example*

### WCAG 2.2 references

* [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview&tags=images%2Cimages-of-text%2Ctext-alternatives#text-equiv)
* [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
* [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation)