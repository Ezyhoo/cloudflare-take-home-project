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
    method: "GET",
  };

  await fetch(urlToFetch, option).then((res) => {
    console.log("WHY?!?!");
  });

  return new Response("Hello world");
}
