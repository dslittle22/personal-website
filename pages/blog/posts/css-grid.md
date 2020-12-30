---
title: CSS Grid Basics
date: 2020-12-28
author: Danny Little
description: A review of four basic CSS Grid properties. Probably more for my benefit that yours.
---

CSS Grid is really helpful. I've been playing around with it a lot, and it's even used on this very website (try scrolling down to the photos on [this](/music) page and resizing the window). I often find that using Grid to center or space things on a page can be a little easier than doing it with Flexbox. However, I still have to use Flexbox sometimes, which can confuse me about exactly which property does what. I wanted to write a post to summarize the properties:

- `justify items`
- `align items`
- `justify content`
- `align content`

My intention here is that I (and hopefully others) can look at this page to quickly find the right property and values to get the intended layout. Hopefully it doesn't end up being as long as the aforementioned long pages.

## 1: justify-items / align-items[^1]

These properties define where items within the grid sit in their container. `justify-items` situates things on the column axis, whereas `align-items` is on the row axis. This means that _align = vertical, justify = horizontal._

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

gives us:

![CSS grid container with items](/blog/grid-1.png)

So here's our starting point. We have an explicit grid with two items, which seem to stretch to fill their available space. If we add the line:

```css
justify-items: center;
```

then the `div`'s in our grid are horizontally centered, but vertically unaffected.

![CSS grid container with horizontally centered items](/blog/grid-2.png)

Or if we wanted to vertically align our items toward the end, instead:

```css
align-items: end;
```

![CSS grid container with each item at the bottom of its grid space](/blog/grid-3.png)

Both of our items are vertically aligned toward the end of their grid space. As you might assume, both properties have the value `stretch` by default. You can see these default values at work in the last two picture. When one axis is aligned, the other one still stretches to fill the remaining space.

Also, you can set both values in one line by using the `place-items` property and separating the values with a slash (e.g. `center / center`).

## 2: justify-content / align-content[^2]

The last property we looked at changes where items sit within the grid space allocated for them, but it does not change the location of the grid space. If our content is smaller than our grid container, it would be nice to specify where the allocated space goes, not just the items within the space. And you guessed it: that's exactly what this section's properties do.

#### Examples

Let's say we want to stack our items on the bottom of the grid. Well, we just tried using the `align-items` property, which affects the vertical axis. But writing `align-items: end;` did not get us the stack layout we wanted. Using `align-content` seems to work better.

```css
align-content: end;
```

![CSS grid container with both items stacked in the bottom of the container](/blog/grid-4.png)

Instead of the content being being centered within their allocated grid space, that grid space itself has moved. Let's use Chrome dev tools to see this more clearly. Here's the grid with `align-items: end;`
![CSS grid with align-items: end; dev tools](/blog/grid-5.png)

And with `align-content: end;`
![CSS grid with align-content: end; dev tools](/blog/grid-6.png)

This clears up exactly what's going on. Aligning our items changes where the items are within their space, but keeps the space (dotted boxes) stretched. Aligning the content, on the other hand, changes where the space itself goes.

The `justify/align content` property is commonly used with `space-evenly` or `space-between`. These values space items evenly within a grid, either spacing them evenly with other items and the walls or pushing them right up to the wall.

To space evenly with the walls:

```css
align-content: space-evenly;
```

![CSS grid with space-evenly](/blog/grid-7.png)

Or, to have items press up against the container:

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

I think that's pretty much it! Hopefully this clears up these four CSS Grid properties. Note that all of these properties exist in Flexbox _except_ `justify-items`, and they do more or less the same thing (except horizontal / verticals flip if you change the main axis).

[^1]: Values: start, end, center, stretch (default)
[^2]: Values: start, end, center, stretch (default), space-around, space-between, space-evenly
