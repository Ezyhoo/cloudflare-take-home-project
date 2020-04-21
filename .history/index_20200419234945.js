//import{getContentResponse} from './contentReWriter';
//import{assignUrls, getContentStr, getIdx} from './distributor';

const dsb = require('./distributor');

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
   const idx = getIdx();
    return getContentResponse(idx, contentStr);


}


