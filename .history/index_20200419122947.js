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
    .then(function(res) {
      return res.json();
    })
    .then((data) => {
      data.variants.forEach((url) => {
        urls.push(url);
      }); 
    })
    .then(async () => {
      let randomURL = urls[Math.floor(Math.random() * urls.length)];
      console.log(randomURL)
      const content = await (await (await fetch(randomURL)).text());
      console.log(content); 
    });

    


}
