const request = require('request');
const cheerio = require('cheerio');

function Get(url, send) {
    request(url, {json: true}, (err, res, body) => {
        if (err) {
            return send(err);
        }
        const $ = cheerio.load(body);
        const selectors = ['h1', 'article', '.content', 'main'];
        for (selector of selectors) {
            const elements = $(selector);
            if (elements.length > 0) {
                elements.each((index, element) => {
                    const content = $(element).text().trim();
                    send(content);
                });
            } else {
                send('Null');
            }
        }
    });
}

module.exports = {
    Get
}