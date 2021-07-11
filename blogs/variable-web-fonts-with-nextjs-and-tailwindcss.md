---
title: "Variable Web Fonts with NextJS and TailwindCSS"
date: "2021-07-08"
readTime: 10
image: "https://images.unsplash.com/photo-1525972292986-69295aebf4cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
---

Fonts play an essential role in giving character to a website. But if you don't set them up correctly, they could hurt your website's performance and user experience. "Your font choice is critical for branding, readability and performance" - [Lee Robinson](https://leerob.io/). In this blog, I show you the best way to set up custom web fonts on your [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/) application. The core concepts still apply for applications that don't use this tech stack. This particular blog was inspired by [Lee Robinson's blog](https://leerob.io/blog) on [Web Fonts in 2021](https://leerob.io/blog/fonts).

## Why custom web fonts can be a nightmare

When using custom web fonts, you need to make sure you're loading the fonts effectively. Not doing so can lead to issues like [Cumulative Layout Shift (CLS)](https://web.dev/cls/) due to [Flash of Unstyled/Invisible/Faux Text](https://css-tricks.com/fout-foit-foft/). CLS is a shift in layout after the page is loaded that causes poor UX (ever have the text completely jump on you due to ads loading on an article? This jump can happen with font swaps as well).

I ran into CLS issues when trying to load fonts through [Google Fonts](https://fonts.google.com/). The page would load with a default font before quickly changing into the custom font once loaded. This swap in font would cause a slight jump in the layout because of the slightly different aspect ratios of the two fonts. It also didn't help that Google Fonts [no longer supports cross-browser font caching](https://developers.google.com/web/updates/2020/10/http-cache-partitioning).

## System and Web fonts

The easiest and most efficient way to use Web fonts is not to use them. Browsers include [web-safe fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts) by default. You can also use the [system font stack](https://systemfontstack.com/), fonts pre-installed on Apple, Microsoft and Google devices. In both these cases, you skip the need to download fonts to your client. These are good strategies, but that doesn't mean there isn't a way to use custom web fonts effectively.

## Ideal solution for Web Fonts using Next.js and TailwindCSS

Here is a small list of optimizations that can lead to clean use of Web Fonts in 2021 based on [this blog](https://leerob.io/blog/fonts#conclusion):

- Use a variable font
- Preload your font file
- Self-host instead of Google Fonts
- Use `font-display: optional` to prevent layout shift
- Subset your imports

Now I will show you how I set up custom web fonts effectively on my website.

### Step 1: Use Variable Fonts in WOFF2 Format

[Variable Fonts](https://web.dev/variable-fonts/) are a great option if you are looking to load many different font weights and styles. They are a font type that allows you to have multiple font weights and styles imported through just one file. To learn more about variable fonts, check out [this documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide).

The WOFF2 format has become the standard these days for font formats for the web. It is a web font format that is a lot smaller than others.

To use variable fonts, look for a variable font file for the font you're looking to use. The WOFF2 format is prefered. Most of the time, it is difficult to find a `.woff2` format for variable fonts. Although, it is easiest to find a `.ttf` format. Using online converters like Convertio and ConverCloud to convert the TTF to WOFF2 seem to break the axis needed to interpolate between font variation settings. But luckily, there is a way to convert them without breaking anything. Here is [an article](https://henry.codes/writing/how-to-convert-variable-ttf-font-files-to-woff2/) that explains how to use [this repository](https://github.com/google/woff2) to compress TTF into WOFF2.

Next, add the font file(s) to your `/public/fonts` directory and import it as so.

```css
@font-face {
  font-family: "iA Writer Quattro V";
  font-style: normal;
  font-weight: 100 900; // range of weight
  font-display: optional;
  src: url(/fonts/iAWriterQuattroV-Italic.woff2) format("woff2");
}
```

Here is an example of a variable font [iA Writer Quattro V](https://github.com/iaolo/iA-Fonts/tree/master/iA%20Writer%20Quattro/Variable).

### Step 2: Self Host Your Font

Google fonts recommend hosting your fonts for optimal performance as there are no real benefits to using the fonts hosted by them. If you're using [Next.js](https://nextjs.org/), it's super easy to host your fonts. Just throw them in the `/public/fonts` directory of your application. You can also use HTTP headers to cache the font for faster loads. Add this configuration to your HTTP header.

```css
cache-control: public, immutable, max-age=31536000;
```

This optimization ensures that your hosted font is cached for the public and kept immutable (not going to change) for 1 year.

Here is an example you could use if you're using Vercel. Add this to your [/vercel.json](https://vercel.com/docs/configuration#project/headers).

```json
{
  "headers": [
    {
      "source": "/fonts/iAWriterQuattroV-Regular.woff2", // use "/fonts/(.*)" to cache your entire fonts directory
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Step 3: Preload Font Resources

Preloading is a way to load critical resources early in the page load lifecycle. Preloading for fonts is a must to avoid [Cumulative Layout Shift](https://web.dev/cls/) and decrease [First Contentful Paint](https://web.dev/first-contentful-paint/). Here is how you do it.

Add this to your '< Head >' tag. For Next.js, having a custom [\_document.tsx file](https://nextjs.org/docs/advanced-features/custom-document) if you don't have one already, might be helpful. Add multiple preloads for multiple files.

```json
<Head>
  <link
    rel="preload"
    href="/fonts/iAWriterQuattroV-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/iAWriterQuattroV-Italics.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</Head>
```

### Step 4: Font Display Optimization

[font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) is a parameter in the [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) CSS property which chooses the strategy to render loaded web fonts with values such as `auto`, `swap`, `block`, `fallback` and `optional`. To prevent layout shift due to FOUT or FOIT, using the `optional` value seems to be the best choice. `optional` basically doesn't allow a swap in fonts once the page is loaded. This way, you avoid the chance of a layout shift due to font swaps, but there is a potential of the custom web font not showing up on a load if the font loading isn't optimized or the network is slow.

Below is an example of inserting a font file through a global CSS file. Add multiple font faces for multiple file imports.

```css
@font-face {
  font-family: "iA Writer Quattro V";
  font-style: normal;
  font-weight: normal;
  font-display: optional;
  src: url(/fonts/iAWriterQuattroV-Regular.woff2) format("woff2");
}

@font-face {
  font-family: "iA Writer Quattro V";
  font-style: italic;
  font-weight: normal;
  font-display: optional;
  src: url(/fonts/iAWriterQuattroV-Italic.woff2) format("woff2");
}
```

If you wanted to use `font-display: swap`, look into [font metrics override descriptors](https://docs.google.com/document/d/1PW-5ML5hOZw7GczOargelPo6_8Zkuk2DXtgfOtJ59Eo/edit).

```css
@font-face {
  font-family: ...;
  src: ...;
  ascent-override: 80%;
  descent-override: 20%;
  line-gap-override: 0%;
  ...;
}
```

### Step 5: Subset Your Import

Some fonts can have multiple languages and glyphs, which can cause big file sizes. To reduce the burden, you can filter out only the required Unicode by doing so.

```css
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900; // Range of weights supported
  font-display: optional;
  src: url(/fonts/inter-var-latin.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
```

### Step 6: Extend TailwindCSS FontFamily

Finally, to be able to use the font-family with [TailwindCSS](https://tailwindcss.com/), add this to your `/tailwind.config.json`

```css
module.exports = {
  ...
  theme: {
    extend: {
      ...
      fontFamily: {
        sans: ['iA Writer Quattro V', ...fontFamily.sans]
      },
      ...
    },
  },
  ...
}
```

## Conclusion

Here is the ultimate recipe to use custom web fonts with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)

1. Use variable fonts in WOFF2 format
2. Self host your font instead and cache them
3. Preload your font resources
4. Use `font-display: optional` to prevent layout shift
5. Subset your font import
6. Extend your Tailwind FontFamily

I recommend checking out [Lee Robinson](https://leerob.io/) for more content related to Next.js, UI/UX and best practices for web applications. He is currently the Head of Developer Relations at [Vercel](https://vercel.com/), a position I would love to hold someday. He's been a great inspiration in getting this website and blog up and running.

> Don't think of your website as a self-promotion machine, think of it as a self-invention machine.  
> [\- Austin Kleon](https://austinkleon.com/)
