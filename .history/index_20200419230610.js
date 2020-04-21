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
/**
 * Assign the urls from the fetch call to the local variable
 */
async function assignUrls() {
  if(urls.length > 0){
    return;
  }
  await fetch(urlToFetch)
  .then(function(res) {
    return res.json();
  })
  .then((data) => {
    data.variants.forEach((url) => {
      urls.push(url);
    }); 
  })
}



/**
 * 
 */
async function getContentStr(){
  idx = Math.floor(Math.random() * urls.length);
  let contentStr = await (await fetch(urls[idx])).text();
  return getCustomizedContent(idx, contentStr);
}


/**
 * 
 */
function getCustomizedContent(idx, contentStr){
  return contentStr;


}