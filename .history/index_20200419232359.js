var distributor = import('./distributor');
var writer = import('./contentReWriter');
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
   await distributor.assignUrls();
   contentStr = await distributor.getContentStr();


    return ;


}


