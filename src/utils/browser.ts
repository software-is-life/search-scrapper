import {Browser} from "puppeteer";

const puppeteer = require('puppeteer');

const startBrowser = async () => {
    console.log("Starting browser...");
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true
    })
    .then((browser: Browser) => browser)
    .catch((err: Error) => console.log(err));
    return browser;
}

module.exports = {
    startBrowser
};