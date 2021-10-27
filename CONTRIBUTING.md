# Contributing to Smart Notes website <!-- omit in toc -->

👍🎉 Thanks for taking the time to contribute! 🎉👍

## Summary <!-- omit in toc -->

- [Code of conducts](#code-of-conducts)
- [Issue and Pull Requests](#issue-and-pull-requests)
- [Commit messages](#commit-messages)
- [Content Changes](#content-changes)
- [Project setup](#project-setup)
- [Deployment](#deployment)

## Code of conducts

This project adheres to the Contributor Covenant code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [@yesnoruly](https://t.me/yesnoruly).

## Issue and Pull Requests

- If you're not sure about adding something, [open an issue](https://github.com/iTflatApps/SmartNotes/issues/new/choose) to discuss it.
- Feel free to open a Pull Request early so that a discussion can be had as changes are developed.
- Include screenshots and animated gifs of your changes whenever possible.
- **DON'T** surprise us with big pull requests. Instead, file an issue and start a discussion so we can agree on a direction before you invest a large amount of time. surprise us with big pull requests. Instead, file an issue and start a discussion so we can agree on a direction before you invest a large amount of time.

## Commit messages

We use the [Conventional Commits](https://www.conventionalcommits.org) specification to standardize our commit history. <br> The commit message summary (or pull request title) is constructed by prepending the type of change being made (e.g., *feat*, *fix*, *refactor*), followed by an imperative, present tense sentence (without a period). Example: `fix: make header bold`

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
2. Fork the repo, then do this:
```bash
# Install dependencies
$ npm install

# Run the develope mode
$ npm run dev
```

Other commands:

```bash
# Runs a site audit, shows its performance and best practices.
$ npm run lighthouse
```

## Deployment

[This website](https://itflatapps.github.io/SmartNotes/) was hosted on [Github Pages](https://pages.github.com/).

### Deployment process <!-- omit in toc -->

Using Github Actions, a the build is automatically deployed to the `gh-pages` branch (view [deploy.yml](https://github.com/iTflatApps/SmartNotes/blob/main/.github/workflows/deploy.yml))
