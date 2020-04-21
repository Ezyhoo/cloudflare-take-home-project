const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  await fetch(urlToFetch)
  .then(function(res){
    return res.json();
  })
  .then((data) => {
    data.variants.forEach(url => {
      urls.push(url);
    })

    console.log('url:' + urls[0] );
  })

    return new Response('Hello world');
}
