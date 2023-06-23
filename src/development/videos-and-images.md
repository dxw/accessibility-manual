---
title: Media
permalink: /:path/:basename/
tags:
  - Development
---
## Images

Images should always have an alt property, whether the image has a purpose or not. 

See Designing alt text for a guide on how to write good alt text.

For vector-based graphics that are coded as an inline SVG, the alternative text should only be placed in the title element. If the SVG is for decorative purpose only, then add the ARIA hidden and focusable properties.

### SVG with alternative text

```
<svg viewBox="0 0 267 93" fill="none" xmlns="http://www.w3.org/2000/svg" width="80px">
 <title>dxw</title>
 <path d="M48.7 27.666c4.586 3.3 7.753 7.709 9.57 13.225V0H69.5v91.395H58.27v-17.3c-1.817 5.515-5.006 9.923-9.57 13.224-4.563 3.3-10.145 4.94-16.724 4.94-6.003 0-11.364-1.396-16.06-4.21-4.696-2.79-8.373-6.822-11.054-12.027C2.16 70.794.831 64.636.831 57.57c0-7.066 1.329-13.246 4.01-18.518 2.68-5.272 6.357-9.303 11.053-12.116 4.696-2.791 10.034-4.21 16.06-4.21 6.6 0 12.183 1.64 16.746 4.94zM18.552 39.34c-4.164 4.408-6.224 10.477-6.224 18.208 0 7.753 2.082 13.822 6.224 18.208 4.165 4.408 9.703 6.601 16.614 6.601 4.452 0 8.417-1.019 11.917-3.079 3.5-2.06 6.247-4.962 8.218-8.705 1.972-3.744 2.969-8.085 2.969-13.025 0-4.94-.997-9.303-2.969-13.091-1.971-3.788-4.718-6.69-8.218-8.706-3.5-2.015-7.465-3.034-11.917-3.034-6.911.022-12.45 2.215-16.614 6.623zM124.06 91.395l-17.655-25.94-15.927 25.94H78.007l22.24-34.954-22.373-32.85h12.848l17.167 25.185 15.684-25.185h12.471l-22.107 34.09 22.971 33.714H124.06zM243.834 23.59l-19.516 67.805h-12.094l-18.674-55.2-18.763 55.222H162.56l-19.272-67.804h11.364l14.442 57.06 18.785-57.06h11.74l18.896 56.928 14.575-56.928h10.744v-.022z" fill="#243746"></path>
 <path class="accent-fill" d="M255.338 69.612h-7.566V92.26h7.566c6.258 0 11.339-5.07 11.339-11.313 0-6.242-5.081-11.334-11.339-11.334z"></path>
</svg>
```

### Decorative SVG 

```
<svg viewBox="0 0 267 93" fill="none" xmlns="http://www.w3.org/2000/svg" width="80px" aria-hidden="true" focusable="false">
 <path d="M48.7 27.666c4.586 3.3 7.753 7.709 9.57 13.225V0H69.5v91.395H58.27v-17.3c-1.817 5.515-5.006 9.923-9.57 13.224-4.563 3.3-10.145 4.94-16.724 4.94-6.003 0-11.364-1.396-16.06-4.21-4.696-2.79-8.373-6.822-11.054-12.027C2.16 70.794.831 64.636.831 57.57c0-7.066 1.329-13.246 4.01-18.518 2.68-5.272 6.357-9.303 11.053-12.116 4.696-2.791 10.034-4.21 16.06-4.21 6.6 0 12.183 1.64 16.746 4.94zM18.552 39.34c-4.164 4.408-6.224 10.477-6.224 18.208 0 7.753 2.082 13.822 6.224 18.208 4.165 4.408 9.703 6.601 16.614 6.601 4.452 0 8.417-1.019 11.917-3.079 3.5-2.06 6.247-4.962 8.218-8.705 1.972-3.744 2.969-8.085 2.969-13.025 0-4.94-.997-9.303-2.969-13.091-1.971-3.788-4.718-6.69-8.218-8.706-3.5-2.015-7.465-3.034-11.917-3.034-6.911.022-12.45 2.215-16.614 6.623zM124.06 91.395l-17.655-25.94-15.927 25.94H78.007l22.24-34.954-22.373-32.85h12.848l17.167 25.185 15.684-25.185h12.471l-22.107 34.09 22.971 33.714H124.06zM243.834 23.59l-19.516 67.805h-12.094l-18.674-55.2-18.763 55.222H162.56l-19.272-67.804h11.364l14.442 57.06 18.785-57.06h11.74l18.896 56.928 14.575-56.928h10.744v-.022z" fill="#243746"></path>
 <path class="accent-fill" d="M255.338 69.612h-7.566V92.26h7.566c6.258 0 11.339-5.07 11.339-11.313 0-6.242-5.081-11.334-11.339-11.334z"></path>
</svg>
```

## Videos

Accessible captions should be included on all videos with speech, whether they’re self-hosted or on a third-party platform, such as YouTube. Use the standard HTML approach with a video element to correctly associate captions and a transcript, if one is available.

### Code example of accessible video

```
<video id="video1" preload="auto" width="480" height="360" poster="../media/wwa.jpg" data-able-player data-skin="2020" playsinline>
 <source type="video/mp4" src="../media/wwa.mp4" data-desc-src="../media/wwa_described.mp4">
 <source type="video/webm" src="../media/wwa.webm" data-desc-src="../media/wwa_described.webm">
 <track kind="captions" src="../media/wwa_captions_en.vtt" srclang="en" label="English" default/>
 <track kind="captions" src="../media/wwa_captions_es.vtt" srclang="es" label="Español"/>
 <track kind="descriptions" src="../media/wwa_description_en.vtt" srclang="en"/>
 <track kind="descriptions" src="../media/wwa_description_es.vtt" srclang="es"/>
 <track kind="chapters" src="../media/wwa_chapters_en.vtt" srclang="en"/>
 <track kind="chapters" src="../media/wwa_chapters_es.vtt" srclang="es"/>
</video>
```

### Able Player

Consider using an accessible media player like [Able Player](https://ableplayer.github.io/ableplayer/) for video and audio content when embedding content directly from the source.

## WCAG 2.2 references

* [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview&tags=images%2Cimages-of-text%2Ctext-alternatives#text-equiv)
* [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
* [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation)