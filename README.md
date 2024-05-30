# Frontend Mentor - Photosnap Website solution

This is a solution to the [Photosnap Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Screenshots

-
![mobile nav](/screenshots/nav-mobile.png)

![mobile table](/screenshots/table-mobile.png)

![tablet features page](/screenshots/features-tablet.png)

![tablet pricing cards](/screenshots/pricing-tablet.png)

![desktop stories page](/screenshots/stories-desktop.png)

![desktop pricing page](/screenshots/pricing-desktop.png)

### Links

- [Solution URL](https://your-solution-url.com)
- [Live Site URL](https://fm-photosnap-project.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - CSS extension language
- [11ty](https://www.11ty.dev/) - Static site generator


### What I learned

- This project was my first time learning about defs used in svgs. I had to google what they were and how to use them. You use the id as the url.

```css
svg {
     path {
        fill: url(#gradient1);
      }
    }

```
The svgs in the starter files all had the same id's (#a) and I learnt that using an id on an html element creates a window variable for that id. Therefore there was a conflict and I had to assign each one a unique id.

- Styling the table was a real challenge. I used css grid and ::before and I'm not sure if I messed up the accessibility of it. I am going look into that further.

- I really liked the design of this project it was part of the reason why I chose it. It was really nice to work with such a professional looking design.

- I also learnt more about preloading css and images.

### Continued development

- I want to get better at planning my css by taking more time before I start to think through the project.
- I want to keep learning about accessibility and seo.
- Make my code more readable.

### Useful resources

- [MDN styling tables article](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables) - Simple example one can follow.

## Author

- Frontend Mentor - [@MauritzLM](https://www.frontendmentor.io/profile/MauritzLM)

## Acknowledgments

I used this [toggle switch](https://codepen.io/morgoe/pen/VvzWQg) - credit to Morgan Carter.

