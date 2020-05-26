console.log( `Hi! Thanks for checking out my website :).
  The source code is all un-minified in case you want to
  see how anything works. Let me know if you have any
  questions or comments!`);

const screensavers = [
  "https://cdn.jsdelivr.net/gh/margo73465/squares/squares.js",
  "https://cdn.jsdelivr.net/gh/margo73465/triangles/triangles.js",
  //"https://cdn.jsdelivr.net/gh/margo73465/stars/margo-party.js",
  "https://cdn.jsdelivr.net/gh/margo73465/4825-mission/main.js",
];
const randomNumber = Math.floor(Math.random() * screensavers.length);
const currentScreensaver = screensavers[randomNumber];
const screensaverScript = document.createElement("script");
screensaverScript.setAttribute("type", "text/javascript");
screensaverScript.setAttribute("src", currentScreensaver);
const svgElement = document.getElementById("svg");
document.body.insertBefore(screensaverScript, svgElement);
