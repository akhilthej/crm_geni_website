//generateSitemap.js

const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

/*run this code to generate sitemap: node generateSitemap.js */
const websiteURL = 'https://crmgeni.com';

const urls = [
    '/',
    '/aboutus',
    '/contactus',
    '/privacypolicy',
    '/termsconditions',
    '/returnpolicy',
    '/shippingdelivery',
    '/disclaimer',
];

const root = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

urls.forEach((url) => {
    root.ele('url')
        .ele('loc', {}, websiteURL + url);
});

const sitemapXML = root.end({ pretty: true });

fs.writeFileSync('sitemap.xml', sitemapXML, 'utf8');

console.log('Sitemap generated successfully.');
