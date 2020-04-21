import { getContentResponse } from "./contentReWriter";
import { assignUrls, getContentStr, getIdx } from "./distributor";

const COOKIE_NAME = "__uid";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with the html content from one of the urls
 * @param {Request} request
 * @return {Response} html content response
 */
async function handleRequest(request) {
  let contentStr; // html content as string format
  let idx = getCookie(request, COOKIE_NAME);
  if (idx) {
    //console.log(cookie);
    
    return new Response(cookie);
  } else {
    await assignUrls();
    contentStr = await getContentStr();
    const idx = getIdx();

    const contentResponse = getContentResponse(idx, contentStr);
    console.log(JSON.stringify(contentResponse));
    setCookie(COOKIE_NAME, idx, 7, contentResponse);
    return contentResponse;
  }
}

function setCookie(name, value, expirationDays, response) {
  var expires = "";
  if (expirationDays) {
    var date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  const cookieValue = name + "=" + (value || "") + expires + "; path=/";
  //console.log(cookieValue);
  response.headers.set("Set-Cookie", cookieValue);
}

/**
 * Grabs the cookie with name from the request headers
 * @param {Request} request incoming Request
 * @param {string} name of the cookie to grab
 */
function getCookie(request, name) {
  let result = null;
  let cookieString = request.headers.get("Cookie");
  //console.log(cookieString);
  if (cookieString) {
    let cookies = cookieString.split(";");
    cookies.forEach((cookie) => {
      let cookieName = cookie.split("=")[0].trim();
      if (cookieName === name) {
        let cookieVal = cookie.split("=")[1];
        result = cookieVal;
      }
    });
  }
  return result;
}
