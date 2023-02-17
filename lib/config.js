const puppeteer = require('puppeteer');
const iphone = puppeteer.KnownDevices['iPhone SE'];
const config = {
    set: async () => {
        let browser, page;
    },
    before: async () => {
        browser = await puppeteer.launch({
            headless: false,
            devtools: true,
        });
        page = await browser.newPage();
        await page.emulate(iphone);
        await page.goto('https://staging.greenrun.com/');
    },
    after: async () => {
        await browser.close();
    },
};

module.exports = config;
