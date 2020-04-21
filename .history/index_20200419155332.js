const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

let contentStrs = [];

let HTMLWriter = new HTMLRewriter.on('*', new ElementHandler()).onDocument(new DocumentHandler());


function init(){
  await assignUrls();
  await assignContentStrs();
}

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
   contentStr = await getContentStr();

    const init = {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
    return new Response(contentStr, init);


}
/**
 * Assign the urls from the fetch call to the local variable
 */
async function assignUrls() {
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
async function assignContentStrs(){
  
  let contentStr = await (await fetch(urls[randomIdx])).text();
  return getCustomizedContent(randomIdx, contentStr);

  for(let i = 0; i < urls.length; i++){
    contentStrs[i] = await (await fetch(urls[randomIdx])).text();
  }
}


/**
 * 
 */
function getCustomizedContent(idx, contentStr){

}