const make = {
    click: async (page, selector, options = {}) => {
        try {
            await page.waitForSelector(selector);
            await page.click(selector, options);
        } catch (err) {
            throw new Error(`Error al dar click en el selector: ${selector}`);
        }
    },
    clickX: async (page, selector, options = {}) => {
        try {
            await page.waitForXPath(selector);
            const element = await page.$x(selector);
            await element[0].click(options);
        } catch (err) {
            throw new Error(`Error al dar click en el selector: ${selector}`);
        }
    },
    doubleClick: async (page, selector) => {
        try {
            await page.waitForSelector(selector);
            await page.click(selector, { clickCount: 2 });
        } catch (e) {
            throw new Error(
                `Error al dar doble click en el selector: ${selector}`
            );
        }
    },
    doubleClickX: async (page, selector) => {
        try {
            await page.waitForXPath(selector);
            const element = await page.$x(selector);
            await element[0].click(selector, { clickCount: 2 });
        } catch (e) {
            throw new Error(
                `Error al dar doble click en el selector: ${selector}`
            );
        }
    },
    getText: async (page, selector) => {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => element.textContent);
        } catch (e) {
            throw new Error(
                `Error al obtener el texto en el selector: ${selector}`
            );
        }
    },
    type: async (page, selector, text, options = {}) => {
        try {
            await page.waitForSelector(selector);
            await page.type(selector, text, options);
        } catch (e) {
            throw new Error(`Error al escribir en el selector: ${selector}`);
        }
    },
    getCount: async (page, selector) => {
        try {
            await page.waitForSelector(selector);
            return await page.$$eval(selector, (elements) => elements.length);
        } catch (e) {
            throw new Error(`Error al escribir en el selector: ${selector}`);
        }
    },
    getTitle: async () => {
        return await page.title();
    },
    getUrl: async () => {
        return await page.url();
    },
    getAttribute: async (selector, attribute) => {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => {
                element.getAttribute(attribute);
            });
        } catch (err) {
            throw new Error(
                `Error al obtener el atributo del selector: ${selector}`
            );
        }
    },
    getValue: async (selector) => {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element) => {
                element.value;
            });
        } catch (err) {
            throw new Error(
                `Error al obtener el valor del selector: ${selector}`
            );
        }
    },
    wait: async (time) => {
        return await new Promise((r) => setTimeout(r, time));
        //La expresion anterior equivale a: return await page.waitForTimeout(time);
    },
};

module.exports = make;