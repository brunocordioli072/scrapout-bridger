const utils = require('../utils')
const cheerio = require('cheerio');
const URL = 'https://www.paulatorres.com.br/bota';

module.exports = {
    getData
}

async function getData() {
    let page = await utils.puppeteer.getPage();
    await utils.puppeteer.navigateToUrl(page, URL);
    page.waitFor(20000);
    let rawData = await page.content();
    let links = [];
    const $ = cheerio.load(rawData);
    $('ul > li').each(function () {
        link = $(this).contents().text();
        links.push(link);
    });
    return links
}

