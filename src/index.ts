const browserInstance = require('./utils/browser');
const scraperController = require('./utils/pageController');

let currentBrowser = browserInstance.startBrowser();
scraperController.scrapeCapitalize(currentBrowser);

console.log("Hello Capitalize");
console.log(currentBrowser);