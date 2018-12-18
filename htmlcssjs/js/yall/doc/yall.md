# yall.js (Yet Another Lazy Loader)

[![Build Status](https://travis-ci.org/malchata/yall.js.svg?branch=master)](https://travis-ci.org/malchata/yall.js) ![](https://img.badgesize.io/malchata/yall.js/master/dist/yall-2.2.0.min.js?label=Uncompressed) ![](https://img.badgesize.io/malchata/yall.js/master/dist/yall-2.2.0.min.js?compression=gzip&label=gzip) ![](https://img.badgesize.io/malchata/yall.js/master/dist/yall-2.2.0.min.js?compression=brotli&label=brotli)

yall.js is a featured-packed script that lazy loads content for `<img>`, `<picture>`, `<video>` and `<iframe>` elements, and can also lazy load CSS background images. It works in all modern browsers including IE11. It uses [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) where available, but falls back to `scroll`, `touchmove`, `resize`, and `orientationchange` events where necessary. It can also monitor the DOM for changes using [Mutation Observer](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/) to lazy load media elements that have been appended to the DOM after initial page render, which may be desirable for single page applications. It can also (optionally) optimize use of browser idle time using [`requestIdleCallback`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback).

## Usage

This is version 2 of yall.js, and introduces breaking changes over version 1. While version 1 only required you to include the script and tag elements with a `class` of `lazy`, this script must be explicitly initialized like so:

```html
<script src="yall.min.js"></script>
<script>document.addEventListener("DOMContentLoaded", yall);</script>
```

The above syntax is sufficient if you don't want to pass in any options. [If you want to specify options](#api-options), however, you'll need to use a slightly more verbose syntax:

```html
<script src="yall.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    yall({
      observeChanges: true
    });
  });
</script>
```

From there, lazy loading elements with yall.js is a snap!

### `<img>`

Let's look at a typical `<img>` element use case:

```html
<!-- An src-only <img> element example -->
<img class="lazy" src="placeholder.jpg" data-src="image-to-lazy-load.jpg" alt="Alternative text to describe image.">
```

In this case, we specify an optional placeholder image in the `src` attribute, and point to the image we want to lazy load in the `data-src` attribute. Attaching a `class` of `lazy` exposes elements to yall.js, and is necessary for the lazy loader to work (although this class value can be overridden via the API options). Let's look at an example using both `src` and `srcset`:

```html
<!-- A somewhat more complex src + srcset example -->
<img class="lazy" src="placeholder.jpg" data-srcset="image-to-lazy-load-2x.jpg 2x, image-to-lazy-load-1x.jpg 1x" data-src="image-to-lazy-load-1x.jpg" alt="Alternative text to describe image.">
```

### `<picture>`

Since `<picture>` is a thing now, yall.js supports that, too:

```html
<!-- A more complex <picture> + <img> + src/srcset example -->
<picture>
  <source data-srcset="image-to-lazy-load-2x.webp 2x, image-to-lazy-load-1x.webp 1x" type="image/webp">
  <img class="lazy" src="placeholder.jpg" data-srcset="image-to-lazy-load-2x.jpg 2x, image-to-lazy-load-1x.jpg 1x" data-src="image-to-lazy-load-1x.jpg" alt="Alternative text to describe image.">
</picture>
```

### `<video>`

yall.js covers two possible lazy loading patterns for video.

#### Lazy-loading videos intended as replacements for animated GIFs

You can use yall.js to lazy load `<video>` elements intended to [replace animated GIF with autoplaying video](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/):

```html
<video class="lazy" autoplay loop muted playsinline>
  <source data-src="video.webm" type="video/webm">
  <source data-src="video.mp4" type="video/mp4">
</video>
```

The pattern is largely the same as it is with the `<picture>` use case, only the `lazy` class is applied to the `<video>` element. **Tip**: If you're embedding videos that _don't_ emulate animated GIFs (i.e., non autoplaying video), it's better to _not_ lazy load them. Instead, lean on the [`preload` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-preload) to defer loading of video content. _**Please note that video autoplay policies may change at any time, meaning your video may not autoplay on some platforms!**_

#### Lazy-loading `poster` placeholder images for non-autoplaying video

Sometimes you have video you'd rather not autoplay, such as when your videos have an audio track, or perhaps you want to be more considerate of your user's bandwidth. In cases like these, the [`poster` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-poster) can be used to load a placeholder image. However, these images can also be rather large, especially if you have a number of videos on the page that use this pattern. As of version 2.2.0, you can now lazy load `poster` images with the following markup pattern:

```html
<video class="lazy" data-poster="placeholder.jpg" controls preload="none">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>
```

This pattern is slightly different than the one above. Because we're not trying to replace animated GIFs, we've removed a number of attributes from the `video` tag that aren't necessary in this use case. Instead, we've done away with the usual `data-src` attribute, and specified `preload="none"` to ensure the browser doesn't preload any of the video. To lazy load the `poster` image itself, we specify the image to load in a `data-poster` attribute. The `controls` attribute is added in this case to give the reveal the browser's interface to control video playback.

**Note:** For the sake of your users, don't mix the above markup patterns. If a video is going to use `autoplay` to replace an animated image, lazy loading a placeholder image via `data-poster` isn't necessary.

### `<iframe>`

As of version 2, you can also lazy load `<iframe>`s:

```html
<iframe class="lazy" data-src="some-other-document.html"></iframe>
```

### CSS images

Last, but not least, you can use yall.js to lazy load images referenced in CSS. This might be useful if you have some very large background images you'd like to defer. Using this feature requires using _both_ HTML and CSS. To start, let's say you have a `<div>` that loads a very large masthead image:

```html
<!-- I bet this loads a giant stock photo... -->
<div class="masthead lazy-bg"></div>
```

The key here is the `lazy-bg` class, which is the class yall.js attaches to (and can be changed via the `lazyBackgroundClass` option). When yall.js sees elements with this class, it will remove said class and replace it with a class of `lazy-bg-loaded` (which can also be changed with the `lazyBackgroundLoaded` option). From here, it's up to you to author CSS that makes use of this class to swap the image in. That CSS might look like this:

```css
/* Note the lack of a `background` in this style. */
.masthead {
  background: #e6e6e6; /* A little placeholder color */
  height: 16.66vw;
  margin: 0 0 1rem;
}

/* BAM! Lazy loaded! */
.masthead.lazy-bg-loaded {
  background: url("masthead.jpg");
}
```

This works because unlike HTML which loads most resources immediately, CSS loads resources only if the current state of the document builds a CSSOM which includes them. That means if your document's style tree changes later on to request a background image, the browser will fetch it the moment the change is applied. Leaning on this behavior is more sensible than using a mess of `data-` attributes pointing to possible image candidates, which could potentially add a bunch of extra markup and introduce edge cases that are difficult to code for.

## What about users without JavaScript?

Slap on some `<noscript>` goodness:

```html
<!-- A <noscript> example using <img> with src and srcset. -->
<img class="lazy" data-srcset="/img/image-to-lazy-load-2x.jpg 2x, /img/image-to-lazy-load-1x.jpg 1x" data-src="/img/image-to-lazy-load-1x.jpg" src="/img/placeholder.jpg" alt="Alternative text to describe image.">
<noscript>
  <img srcset="/img/image-to-lazy-load-2x.jpg 2x, /img/image-to-lazy-load-1x.jpg 1x" src="/img/image-to-lazy-load-1x.jpg" alt="Alternative text to describe image.">
</noscript>

<!-- And a <picture> example. -->
<picture>
  <source data-srcset="/img/image-to-lazy-load-2x.webp 2x, /img/image-to-lazy-load-1x.webp 1x" type="image/webp">
  <img class="lazy" data-srcset="/img/image-to-lazy-load-2x.jpg 2x, /img/image-to-lazy-load-1x.jpg 1x" data-src="/img/image-to-lazy-load-1x.jpg" src="/img/placeholder.jpg" alt="Alternative text to describe image.">
</picture>
<noscript>
  <picture>
    <source srcset="/img/image-to-lazy-load-2x.webp 2x, /img/image-to-lazy-load-1x.webp 1x" type="image/webp">
    <img srcset="/img/image-to-lazy-load-2x.jpg 2x, /img/image-to-lazy-load-1x.jpg 1x" src="/img/image-to-lazy-load-1x.jpg" alt="Alternative text to describe image.">
  </picture>
</noscript>

<!-- Here's a <video> example, too. -->
<video class="lazy" autoplay loop muted playsinline>
  <source data-src="video.webm" type="video/webm">
  <source data-src="video.mp4" type="video/mp4">
</video>
<noscript>
  <video autoplay loop muted playsinline>
    <source src="video.webm" type="video/webm">
    <source src="video.mp4" type="video/mp4">
  </video>
</noscript>

<!-- Here's an <iframe> example for good measure. -->
<iframe class="lazy" data-src="lazy.html"></iframe>
<noscript>
  <iframe src="lazy.html"></iframe>
</noscript>
```

Then place a `no-js` class on the `<html>` element like so:

```html
<html class="no-js">
```

Finally, add this one line `<script>` before any `<link>` or `<style>` elements in the document `<head>`:

```html
<!-- Remove the no-js class on the <html> element if JavaScript is on -->
<script>document.documentElement.classList.remove("no-js")</script>
```

Normally, this script will remove the `no-js` class from the `<html>` element as the page loads, but if JavaScript is turned off, this will never happen. From there, you can add some CSS that hides elements with a `class` of `lazy` when the `no-js` class is present on the `<html>` element:

```css
/* Hide .lazy elements if JavaScript is off */
.no-js .lazy {
  display: none;
}
```

To see all use cases in action, check out the demos in the `test` folder.

## API options

When you call the main `yall` initializing function, you can pass an in an options object. Here are the current options available:

- `lazyClass` (default: `"lazy"`): The element class used by yall.js to find elements to lazy load. Change this is if a `class` attribute value of `lazy` conflicts with your application.
- `lazyBackgroundClass` (default: `"lazy-bg"`): The element class used by yall.js to find elements to lazy load CSS background images for. Change this if you'd prefer not to use the default.
- `lazyBackgroundLoaded` (default: `"lazy-bg-loaded"`): When yall.js finds elements using the class specified by `lazyBackgroundClass`, it will remove that class and put this one in its place. This will be the class you use in your CSS to bring in your background image when the affected element is in the viewport.
- `throttleTime` (default: `200`): In cases where Intersection Observer isn't available, standard event handlers are used. `throttleTime` allows you to control how often the code within these event handlers fire in milliseconds.
- `idlyLoad` (default: `false`): If set to `true`, `requestIdleCallback` is used to optimize use of browser idle time to limit monopolization of the main thread. _**Notes:** This setting is ignored if set to `true` in a browser that doesn't support `requestIdleCallback`! Additionally, enabling this could cause lazy loading to be delayed significantly more than you might be okay with! This option trades off some degree of seamless lazy loading in favor of optimized use of browser idle time. Test extensively, and consider increasing the `threshold` option if you set this option to `true`!_
- `idleLoadTimeout` (default: `100`): If `idlyLoad` is set to `true`, this option sets a deadline in milliseconds for `requestIdleCallback` to kick off lazy loading for an element.
- `threshold` (default: `200`): The threshold (in pixels) for how far elements need to be within the viewport to begin lazy loading.
- `observeChanges` (default: `false`): Use a Mutation Observer to examine the DOM for changes. This is useful if you're using yall.js in a single page application and want to lazy load resources for markup injected into the page after initial page render. _**Note:** This option is ignored if set to `true` in a browser that doesn't support Mutation Observer!_
- `observeRootSelector` (default: `"body"`): If `observeChanges` is set to `true`, the value of this string is fed into `document.querySelector` to limit the scope in which the Mutation Observer looks for DOM changes. The `<body>` element is used by default, but you can confine the observer to any valid CSS selector (e.g., `#main-wrapper`).
- `mutationObserverOptions` (default: `{childList: true}`): Options to pass to the `MutationObserver` instance. Read [this MDN guide](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit) for a list of options.

## Words of wisdom

yall.js doesn't care about placeholders, and won't try to minimize layout shifting for you. Use appropriate `width` and `height` attributes on elements, as well as lightweight placeholders. In the case of `<video>`, avoid setting a `poster` attribute for autoplaying videos. On the other hand _do_ consider lazy loading a placeholder image with `data-poster` for non-autoplaying videos. Please check out the `test` folder to see how you might use placeholders in conjunction with yall.js. If you don't want to bother with placeholders, you can omit the `src` attribute entirely in your lazy loading markup, and yall.js will still work, albeit the experience may be super jumpy for your users.

Also, do _not_ lazy load resources that are likely to near the top of the page ("above the fold", as it were). Doing so is a performance anti-pattern, because those resources will not begin loading until yall.js has been loaded, which may take much longer than if those resources were loaded normally.

## Contributing

If you have an idea, file an issue and let's talk about it. Unsolicited pull requests for new features will generally be rejected unless those requests contain bug fixes.

## Special thanks

Thank you to [BrowserStack](https://www.browserstack.com/) for graciously providing free cross-platform browser testing services!
[![BrowserStack](https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1527175969/browserstack_txnmf8.png)](https://www.browserstack.com/)
