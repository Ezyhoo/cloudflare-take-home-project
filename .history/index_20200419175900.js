const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

class AttributeRewriter
{

	element(element)
	{
    element.replace('XXX');
	}
}

const rewriter = new HTMLRewriter()
	.on('title', new AttributeRewriter())

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with the html content from one of the urls
 * @param {Request} request
 * @return  html content
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
    rewriter.transform(cont)
    return rewriter.transform(contentStr);


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
async function getContentStr(){
  let randomIdx = Math.floor(Math.random() * urls.length);
  let contentStr = await (await fetch(urls[randomIdx])).text();
  return getCustomizedContent(randomIdx, contentStr);
}


/**
 * 
 */
function getCustomizedContent(idx, contentStr){
  return contentStr;


}