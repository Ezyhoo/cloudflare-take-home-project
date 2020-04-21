var DSB = import('./distributor');

const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

let idx;


addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with the html content from one of the urls
 * @param {Request} request
 * @return {Response} html content response
 */
async function handleRequest(request) {

   let contentStr;    // html content as string format
   await assignUrls();
   contentStr = await getContentStr();

    const init = {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }

    return rewriter.transform(new Response((contentStr), init));


}


