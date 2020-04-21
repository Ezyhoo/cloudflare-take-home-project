const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with the html content from one of the urls
 * @param {Request} request
 * @returns {Response}
 */
async function handleRequest(request) {

   let contentStr;
  
    .then(async () => {
      let randomURL = urls[Math.floor(Math.random() * urls.length)];
      contentStr = (await (await fetch(randomURL)).text());
    });
    const init = {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
    return new Response(contentStr, init);


}


getUrls = () => {
  await fetch(urlToFetch)
  .then(function(res) {
    return res.json();
  })
  .then((data) => {
    data.variants.forEach((url) => {
      urls.push(url);
    }); 
  })
}