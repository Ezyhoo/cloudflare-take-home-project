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
  let option = {
    method
  }
  fetch(myRequest).then(function(res) {
    res = res.json()
    console.log(res);
    res.array.forEach((url) => {
      urls.push(url);
    });

    return new Response(urls, {
      headers: { "content-type": "text/plain" },
    });
  })
}
