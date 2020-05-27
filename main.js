console.log( `Hi, thanks for checking out my website!
  The source code is all un-minified in case you want to
  see how anything works. Let me know if you have any
  questions or comments!`);

const screensavers = [
  {
    "name": "squares",
    "js": "https://cdn.jsdelivr.net/gh/margo73465/squares/squares.js"
  },
  {
    "name": "triangles",
    "js": "https://cdn.jsdelivr.net/gh/margo73465/triangles/triangles.js"
  },
  //{
  //  "name": "stars",
  //  "js": "https://cdn.jsdelivr.net/gh/margo73465/stars/margo-party.js",
  //  "css": "https://cdn.jsdelivr.net/gh/margo73465/stars/styles.css"
  //},
  {
    "name": "mural",
    "js": "https://cdn.jsdelivr.net/gh/margo73465/4825-mission/main.js",
    "css": "https://cdn.jsdelivr.net/gh/margo73465/4825-mission/styles.css"
  }
];

const randomNumber = Math.floor(Math.random() * screensavers.length);
const currentScreensaver = screensavers[randomNumber];

const svgElement = document.getElementById("svg");

if (currentScreensaver.js) {
  const screensaverScript = document.createElement("script");
  screensaverScript.setAttribute("type", "text/javascript");
  screensaverScript.setAttribute("src", currentScreensaver.js);
  document.body.insertBefore(screensaverScript, svgElement);
}

if (currentScreensaver.css) {
  const screensaverStyles = document.createElement("link");
  screensaverStyles.setAttribute("type", "text/css");
  screensaverStyles.setAttribute("rel", "stylesheet");
  screensaverStyles.setAttribute("href", currentScreensaver.css);
  const existingStylesheet = document.getElementsByTagName("link")[0];
  document.body.insertBefore(screensaverStyles, svgElement);
}

