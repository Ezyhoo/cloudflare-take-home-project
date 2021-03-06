const urlToFetch = 'https://cfw-takehome.developers.workers.dev/api/variants';

let urls = [];

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let myRequest = new Request(urlToFetch);
  fetch(myRequest)
  .then(function(res){
    res.array.forEach(element => {
      urls.push(element)
    });
  })
  return new Response(, {
    headers: { "content-type": "text/plain" },
  });
}
