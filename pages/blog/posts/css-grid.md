---
title: CSS Grid Basics
date: 2020-12-28
author: Danny Little
description: A review of some of the basic CSS Grid properties. Probably more for my benefit that yours.
---

CSS Grid is really helpful. I've been playing around with it a lot, and it's even used on this very website (see [here](/projects)). I often find that using Grid to center or space things on a page can be a little bit more concise than doing the same thing with Flexbox. However, I still have to use Flexbox sometimes, which can result in me getting confused about exactly which property does what. I wanted to write a post to summarize the properties:

- `justify items`
- `align items`
- `justify content`
- `align content`

  My intention with this post is that I (and hopefully others) can look at this page and quickly find the information I'm looking for. Hopefully it doesn't end up being as long as the aforementioned long pages.

## 1: justify-items / align-items[^1]

These properties define where items within the grid sit in their container. `justify-items` situates things on the row axis, whereas `align-items` is on the column axis. This means that _align = horizontal_, _justify = vertical._

#### Examples

Let's start with a simple grid layout and do some experimentation. This CSS:

```css
.grid {
  display: grid;
  background: red;
  padding: 10px;
  gap: 10px;
}

.grid-item {
  background: white;
}
```

with this HTML:

```html
<div class="grid">
  <div class="grid-item">item</div>
  <div class="grid-item">item</div>
</div>
```

gives us this:

![CSS grid container with items](/blog/grid-1.png)

If we add the line

```css
justify-items: center;
```

Then the `div`'s in our grid are horizontally centered, but vertically unaffected:

![CSS grid container with horizontally centered items](/blog/grid-2.png)

If we replace the last line of CSS with this,

```css
align-items: end;
```

we get:
![CSS grid container with each item at the bottom of its grid space](/blog/grid-3.png)

As you might assume, both properties have the value `stretch` by default. Also, you can set both values in one line by using the `place-items` property and separating the values with a slash (align / justify).

## 2: justify-content / align-content[^2]

The last property we looked at changed where items sit within the grid space allocated for them, but it did not change the location of the grid space. If our content is much smaller than our grid container, like it is in the example we've been using, it would be nice to specify how the grid should be set up. And, you guessed it, that's exactly what this section's properties do!

#### Examples

Let's say we really like the vibe of `align-items: end;`, except we want to make things _even more_ aligned at the end. We can write this:

```css
align-content: end;
```

to get this:

![CSS grid container with both items stacked in the bottom of the container](/blog/grid-4.png)

Notice how it's kind of similar to the `align-items: end;` photo, except all of the content is at the bottom of the container rather than the items being centered within their allocated space. We can see this by looking at the dev tools and looking at our items within their space. Here's the grid with `align-items: end;`
![CSS grid with align-items: end; dev tools](/blog/grid-5.png)

And with `align-content: end;`
![CSS grid with align-content: end; dev tools](/blog/grid-6.png)

This clears up exactly what's going on. Aligning our items changes where the items are within their space (dotted lines), but aligning the content changes where the space itself is.

The `justify/align content` property is probably used most often with `space-evenly` or `space-between`. These are a handy spacing your items evenly within your grid, either spacing them evenly with the walls and other items or pushing them right up to the wall.

Using this line:

```css
align-content: space-evenly;
```

![CSS grid with space-evenly](/blog/grid-7.png)

Or to have items press up against the container:

```css
align-content: space-between;
```

![CSS grid with space-between](/blog/grid-8.png)

As with the first two properties, you can set values for these last two in one line by using the `place-content` property.

All of these properties can get a little bit confusing, partially because they have some overlap. For example, writing

```css
align-content: stretch;
```

will do exactly the same thing as

```css
align-items: stretch;
```

a lot of the time. For the `content` properties, it probably makes sense to just use the `space-evenly`-type values except for in niche situations.

[^1]: Values: start, end, center, stretch (default)
[^2]: Values: start, end, center, stretch (default), space-around, space-between, space-evenly
