---
title: Describing videos and images
permalink: /:path/:basename/
tags:
  - Development
---
You must [provide meaningful alternative text](/development/videos-and-images) to describe non-text content so you do not exclude people who cannot access visual content.

## Images

Images should always have an alt property, whether the image has a purpose or not. It may be blank if it does not have a purpose. See [Designing alt text](/content/designing-alt-text/) for a guide on how to write good alt text.

For vector-based graphics that are coded as an inline SVG, the alternative text should only be placed in the title element. If the SVG is for decorative purpose only, then add the ARIA hidden and focusable properties.

### SVG with alternative text

```
<svg viewBox="0 0 267 93" fill="none" xmlns="http://www.w3.org/2000/svg" width="80px">
 <title>dxw</title>
 <path d="M48.7 27.666c4.586 ..."></path>
</svg>
```

### Decorative SVG

```
<svg aria-hidden="true" focusable="false" viewBox="0 0 267 93" fill="none" xmlns="http://www.w3.org/2000/svg" width="80px">
 <path d="M48.7 27.666c4.586 ..."></path>
</svg>
```

## Videos

Accessible captions should be included on all videos with speech, whether they’re self-hosted or on a third-party platform, such as YouTube. Use the standard HTML approach with a video element to correctly associate captions and a transcript, if one is available.

The following example demonstrates a best practice approach for including the required components for a video with accessible properties using the [track element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track), including:

* **Captions** to provide a transcription and possibly a translation of audio, suitable for users who are deaf or when the sound is muted
* **Descriptions** for textual description of the video content, suitable for users who are blind or where the video cannot be seen
* **Chapters** intended to be used when the user is navigating the media resource, suitable for longer duration media
* **Subtitles** provide translation of content that cannot be understood by the viewer

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
