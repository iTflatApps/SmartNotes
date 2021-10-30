# Contributing to Smart Notes website <!-- omit in toc -->

👍🎉 Thanks for taking the time to contribute! 🎉👍

## Summary <!-- omit in toc -->

- [Code of conducts](#code-of-conducts)
- [Issue and Pull Requests](#issue-and-pull-requests)
- [Commit messages](#commit-messages)
- [Content Changes](#content-changes)
- [Project setup](#project-setup)
- [Code style](#code-style)
  - [HTML](#html)
  - [CSS](#css)
  - [Images](#images)
- [Testing site](#testing-site)
- [Submitting changes](#submitting-changes)
- [Deployment](#deployment)

## Code of conducts

This project adheres to the Contributor Covenant code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [@yesnoruly](https://t.me/yesnoruly).

## Issue and Pull Requests

- If you're not sure about adding something, [open an issue](https://github.com/iTflatApps/SmartNotes/issues/new/choose) to discuss it.
- Feel free to open a Pull Request early so that a discussion can be had as changes are developed.
- Include screenshots and animated gifs of your changes whenever possible.
- For major changes, please open an issue first to discuss what you would like to change.
- Please try to keep your pull request focused in scope and avoid including unrelated commits.

## Commit messages

We use the [Conventional Commits](https://www.conventionalcommits.org) specification to standardize our commit history. <br> The commit message summary (or pull request title) is constructed by prepending the type of change being made (e.g., *feat*, *fix*, *refactor*), followed by an imperative, present tense sentence (without a period). Example: `fix: make header bold`. 

> Types other than *fix:* and *feat:* are allowed.

## Content Changes

Most content changes can be made without cloning the repository. <br>
Simply locate the file you wish to change in the GitHub UI, and click the little edit icon to make your change directly on the GitHub website.

## Project setup

If you do need to set the project up locally yourself, feel free to follow these instructions:

### System Requirements <!-- omit in toc -->

- [Node.js](https://nodejs.org/en/) >= 16.0.0
- [git](https://git-scm.com/) >= 2.7.0
- [lighthouse-cli](https://github.com/GoogleChrome/lighthouse#using-the-node-cli) >= 8.6.0

### Setup steps <!-- omit in toc -->

1. Create [your own issue](https://github.com/iTflatApps/SmartNotes/issues/new/choose) or visit the [Issue tracker](https://github.com/iTflatApps/SmartNotes/issues) to find a list of open issues that need attention.
2. Fork the repo. 
3. Create your own branch (`my-feature`), then do this:
```bash
# Install dependencies
$ npm install

# Run the develope mode
$ npm run dev
```

Other commands:

```bash
# Runs a site audit, shows its performance and best practices
$ npm run lighthouse
```

## Code style

A code style is a set of rules or guidelines used when writing the source code of a given project.

### HTML

The project uses the *BEM* class naming methodology. *BEM* (*Block*, *Element*, *Modifier*) is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks. This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting.

### CSS

The `styles/` folder contains:
1. At the root are the service styles. Example: `reset.css`, `variables.css`, etc. 
2. The `blocks/` folder contains styles of independent blocks. Example: `page.css`,  `header.css`, `footer.css`, etc. 

```css
.block
.block__element
.block__element--modifier
```

### Images

For images, specify an explicit *height* and *width* to prevent offset in the layout.

Decorative picture without semantic load, alt remains empty:

```html
<img src="..." alt="">
```

A picture with meaning that complements or illustrates the text. In alt, a unique and succinct description of the image is written. Avoid repeating sentences that are already on the page:

```html
<img src="..." alt="Sunset sky">
```

At the end of the description, a dot is always placed in alt to help the screen reader pause before the next content.

All svg images should be placed in svg sprite for greater optimization.

## Testing site

The list of browsers on which you need to check the layout of the site:

### Desktop <!-- omit in toc -->

- Chrome
- Safari
- Firefox
- Edge

### Mobile <!-- omit in toc -->

- Safari 
- Chrome

## Submitting changes

- Make sure lighthouse test pass and there are not stylelinting ([#2](https://github.com/iTflatApps/SmartNotes/issues/2)) errors. 
- Submit a pull requests. 

## Deployment

[This website](https://itflatapps.github.io/SmartNotes/) was hosted on [Github Pages](https://pages.github.com/).

### Deployment process <!-- omit in toc -->

Using Github Actions the build is automatically deployed to the `gh-pages` branch (view [deploy.yml](https://github.com/iTflatApps/SmartNotes/blob/main/.github/workflows/deploy.yml)). 
