# payapi
For the moment I consider this project finished. I'm going to clean the code as soon as possible.


# PayAPI multi-page website 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
- The `Name`, `Email Address` or `Message` fields are empty should show "This field can't be empty"
- The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![screenshot of home](https://github.com/AMartinezSounds/payapi/blob/main/screenshot-main.png)


### Links

- Live Site URL: https://alfredo-martinez-paypi.netlify.app

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Gatsby](https://www.gatsbyjs.com) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [react-reveal](https://www.react-reveal.com) - For animation
- [react-final-form] (https://final-form.org/react) - For formulary
- [Netlify] (https://app.netlify.com/teams/alfre-canos13/overview) - Deployment


### What I learned

I'm really proud of some functions:


- First, there is an array of strings that represent all plans characteristics:
- Second, is a function that takes as arguments an array of strings and a number. The array is features and the number is how many features of the array will be pushed in the new array planFeatures.
- Third, is a function that takes a string as an argument. Depending on which plan you specify, it will call the previous function with a preset data.
- Last function takes two arrays of strings, it compares one each other, and returns another array with the different elements.

```js
const features = [
  'Transactions',
  'Auth',
  'Identity',
  'Investments',
  'Assets',
  'Liabilities',
  'Income',
];

const maxFeatures = (allFeatures, index) => {
  const planFeatures = [];
  for (let i = 0; i < index; i++) {
    planFeatures.push(allFeatures[i]);
  }
  return planFeatures;
};

const includedFeatures = (plan) => {
  if (plan === 'Free Plan') {
    return maxFeatures(features, 3);
  }
  if (plan === 'Basic Plan') {
    return maxFeatures(features, 5);
  }
  if (plan === 'Premium Plan') {
    return maxFeatures(features, 7);
  }
};

const excludedFeatures = (all, included) => {
  const filtered = all.filter((el) => included.indexOf(el) === -1);
  return filtered;
};
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

