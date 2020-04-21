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
    method: 'GET'
  }

  fetch(urlToFetch, option)
  .then(res => {
    console.log(res);
  })

    return urls;
  });
}
