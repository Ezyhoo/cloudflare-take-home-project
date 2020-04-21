const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

class AttributeRewriter
{

	element(element, newElement)
	{
		element.replace(newElement);
	}
}

const rewriter = new HTMLRewriter()
	.on('a', new AttributeRewriter())
	.on('img', new AttributeRewriter());

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
async function getContentStr(){
  let randomIdx = Math.floor(Math.random() * urls.length);
  let contentStr = await (await fetch(urls[randomIdx])).text();
  return getCustomizedContent(randomIdx, contentStr);
}


/**
 * 
 */
function getCustomizedContent(idx, contentStr){
  const title = ['Title1', 'Title2'];
  const h1Title = ['Yizhi1', 'Yizhi2'];
  const pDescription = ['Here is my personal website', 'Here is my LinkedIn'];
  const aUrl = ['https://ezyhoo.github.io/', 'https://www.linkedin.com/in/yizhi-hu-84b846a6/'];
  const urlName = ['Personal website', 'LinkedIn'];


}