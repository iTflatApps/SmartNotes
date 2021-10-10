# Smart notes
[Official site](https://itflatapps.github.io/SmartNotes/SmartNotes/) of the [Smart Notes App](https://play.google.com/store/apps/details?hl=en_US&id=com.itflat.smartnotes)

## Design
- [New layout in figma](https://www.figma.com/file/7rwSXB6wZke7mckW0C4Ont/Smart-Notes)

## Installation On Windows

1. Downloading [Node.js](https://nodejs.org/en/download/)
2. Open powershell on behalf of the administrator and enter `Set-ExecutionPolicy RemoteSigned` so that in the future there will be no errors associated with the lack of certain rights
3. Run the command `npm install gulp-cli -g` in the console. This command installs Gulp globally, that is, you can run it from any folder on your computer.

## Installation On MacOS

1. Downloading [Node.js](https://nodejs.org/en/download/).
2. After that, in the terminal, write this command `sudo npm install gulp-cli -g`

## Usage

    npm i

### `npm run build`:

Builds the app for production to the dist folder.

### `npm run lighthouse`:

> NOTE: You must have lighthouse-cli installed. [Detail here](https://github.com/GoogleChrome/lighthouse#using-the-node-cli)

Runs a site speed test, also automatically opens report.html in the browser.
