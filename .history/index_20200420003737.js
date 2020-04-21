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
  const cookie = getCookie(request, COOKIE_NAME);
  if(cookie){
    return new Response(cookie);
  }
   let contentStr;    // html content as string format
   await assignUrls();
   contentStr = await getContentStr();
   const idx = getIdx();

    const contentResponse = getContentResponse(idx, contentStr);
  setCookie(COOKIE_NAME, JSON.stringify(contentResponse), 7);
  return contentResponse;


}

function setCookie(name, value, expirationDays){
  var expires = "";
    if (expirationDays) {
        var date = new Date();
        date.setTime(date.getTime() + (expirationDays*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

/**
 * Grabs the cookie with name from the request headers
 * @param {Request} request incoming Request
 * @param {string} name of the cookie to grab
 */
function getCookie(request, name) {
  let result = null
  let cookieString = request.headers.get('Cookie')
  if (cookieString) {
    let cookies = cookieString.split(';')
    cookies.forEach(cookie => {
      let cookieName = cookie.split('=')[0].trim()
      if (cookieName === name) {
        let cookieVal = cookie.split('=')[1]
        result = cookieVal
      }
    })
  }
  return result
}




