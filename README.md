# JW Streaming Media
A lightweight page for streaming videos.

![JW screenshot](/public/assets/JW streaming.png)

## Running locally
Make sure you have [Node.js](https://nodejs.org/en/) installed, and run:

`$ npm install`

`$ npm start`

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Built With
* Node.js
* Vanilla JS
* LESS
* Grunt
* Fetch
* Swiper (carousel library)
* JW Player Feeds JSON
* Heroku

## A note on the build process
I prefer running simple node servers with nodemon, a package that watches and restarts the server on changes — so building in server functionality for Grunt wasn't necessary. Grunt *does* watch, compile and minify Less to CSS.

## Features to add if time allowed
* Sliding drawer-like transitions to the descriptions on hover, more graceful modal appearance on click
* Find which films are slightly out of viewport, lower the opacity
* Logic to determine scroll position and highlight left/right arrows appropriately
* Depending on mobile design, might reconfigure the slideshow to show only 1 "slidePerView" on phone screen.
* Organize the LESS files for more modularity
* More reliable cross-browser testing (autoprefixer, etc.)
