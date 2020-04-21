var Distributor = import('./distributor').Distributor;
var Writer = import('./contentReWriter');
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
   await Distributor.assignUrls;
   contentStr = await Distributor.getContentStr;
    return Writer.getContentResponse(distributor.idx, contentStr);


}


