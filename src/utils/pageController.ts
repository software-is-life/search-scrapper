import {Browser} from "puppeteer";

const pageScrapper = require('./scarper');
const fs = require('fs');

const scrapeCapitalize = async (browserInstance: Browser) => {
    let scrapedData = {};
    // scrapedData["company"] =
    let browser = await browserInstance;
    await pageScrapper.scraper(browser)
        .catch((err: Error) => console.log(err));
}

module.exports = {
    scrapeCapitalize
}