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

  await fetch(urlToFetch, option)
  .then(function(res){
    return res.json();
  })
  .then((data) => {
    
  })

    return new Response('Hello world');
}
