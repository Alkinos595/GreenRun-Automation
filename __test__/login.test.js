const pick = require('../lib/selectors');
const make = require('../lib/helpers');
const config = require('../lib/config');
const data = require('../lib/data');

describe('Login with phone test', () => {
    config.set;
    beforeAll(config.before, 30000);
    afterAll(config.after);

    test('Go to Page Validation', async () => {
        const url = await make.getUrl();
        expect(url).toMatch('https://staging.greenrun.com/');
    }, 30000);

    test('Fill the form', async () => {
        await make.clickX(page, pick.loginButton);
        await make.clickX(page, pick.phoneButton);
        await make.click(page, pick.inputPhone);
        await make.eraseChar(3);
        await make.type(page, pick.inputPhone, data.phone);
        await make.click(page, pick.submitButton);
        await make.click(page, pick.inputOTP);
        await make.type(page, pick.inputOTP, data.otp, { delay: 100 });
        await make.wait(10000);
    }, 60000);
});
