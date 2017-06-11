# Web Development - Starter
A web development template to jump-start your projects without having to scaffold the basic libraries necessary to begin.

## Introduction
I *just* learnt how to use gulp as a task runner and how to scaffold libraries, but just to begin my basic project, it took me so long to get the gulpfile just right. So I created this repository for the same reason, so that it helps anyone else out there who's starting a new project, to jump-start their development and not waste time in bootstrapping the basic necessities.

## Features
* jQuery, Tether & Bootstrap *(from node_modules)*
* Sass/SCSS Support & Minification
* Javascript Minification
* HTML Minification
* Image Optimization

## Usage
Before starting, make sure your have the latest version of Node/NPM installed on your system, which can be found here: https://nodejs.org/

Once Node/NPM is installed, you'll need to install the gulp task runner globally on your system: `npm install gulp -g`

Now, just clone the repository into your own project folder, and run the `npm i` command:
```
git clone https://github.com/AmruthPillai/WebDev-Starter.git <project-name>
cd <project-name>
npm install
```

To scaffold the files and run the server, just use `gulp`.

To clean/delete your app folder, you can use `gulp clean`.
