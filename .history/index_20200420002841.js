import{getContentResponse} from './contentReWriter';
import{assignUrls, getContentStr, getIdx} from './distributor';

const COOKIE_NAME = '__uid'

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with the html content from one of the urls
 * @param {Request} request
 * @return {Response} html content response
 */
async function handleRequest(request) {
  const cookie = getCookie(request, COOKIE_NAME)
   let contentStr;    // html content as string format
   await assignUrls();
   contentStr = await getContentStr();
   const indx = getIdx();
    return getContentResponse(idx, contentStr);


}


