const puppeteer = require('puppeteer');
const pick = require('../lib/selectors');
const make = require('../lib/helpers');
const iphone = puppeteer.KnownDevices['iPhone SE'];
describe('Login with phone test', () => {
    let browser, page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            devtools: true,
        });
        page = await browser.newPage();
        await page.emulate(iphone);
    }, 30000);

    afterAll(async () => {
        await browser.close();
    });
    //*----------------------------------------------------------------------------------------------------
    test('Go to Page', async () => {
        await page.goto('https://staging.greenrun.com/');
        const url = await page.url();
        console.log('Visitaste: ' + url);
    }, 30000);

    test('Fill the form', async () => {
        console.log('Selector: ' + pick.loginButton);
        await make.clickX(page, pick.loginButton);
        await make.clickX(page, pick.phoneButton);
    }, 30000);
});
