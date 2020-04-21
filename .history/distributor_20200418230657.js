const hostname = 'https://cfw-takehome.developers.workers.dev';
const path = '/api/variants';

const https = require('https')

let urls = [];

getUrls = () => {
    const options = {
        hostname: 'whatever.com',
        path: '/todos',
        method: 'GET'
    }
    
    const req = https.request(options, res => {
        res = res.json();
        res.array.forEach(url => {
            urls.push(url);
        });
    });

}



