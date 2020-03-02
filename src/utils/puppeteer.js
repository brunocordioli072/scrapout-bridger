const puppeteer = require('puppeteer');

module.exports = {
    navigateToUrl,
    getPage
}

async function navigateToUrl(page, url) {
    try {
        await page.goto(url);
        global.page = page;
    } catch (err) {
        console.log(err);
    }
}

async function getPage() {
    try {
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
        return page;
    } catch (err) {
        console.log(err);
    }
}