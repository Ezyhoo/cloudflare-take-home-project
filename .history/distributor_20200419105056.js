const urlToFetch = 'https://cfw-takehome.developers.workers.dev/api/variants';

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

    console.log(https);

}


module.exports = {
    getUrls = this.getUrls
}


