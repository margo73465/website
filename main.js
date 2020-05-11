const screensavers = [
  "http://cdn.jsdelivr.net/gh/margo73465/squares/squares.js",
  "http://cdn.jsdelivr.net/gh/margo73465/triangles/triangles.js"];
const randomNumber = Math.floor(Math.random() * screensavers.length);
const currentScreensaver = screensavers[randomNumber];
const screensaverScript = document.createElement("script");
screensaverScript.setAttribute("type", "text/javascript");
screensaverScript.setAttribute("src", currentScreensaver);
const svgElement = document.getElementById("svg");
document.body.insertBefore(screensaverScript, svgElement);
