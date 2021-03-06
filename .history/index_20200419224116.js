const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

let idx;

class TitleWriter
{
	element(element)
	{
    element.setInnerContent('Yizhi Hu\'s Title' + (idx+1));
	}
}

class h1TitleWriter
{
	element(element)
	{
    element.setInnerContent('Welcome to Yizhi ' + (idx+1));
	}
}
class pDescriptionWriter
{
	element(element)
	{
    if(idx == 0){
      element.replace('Hi Cloudflare! Please check out my portfolio!');
    }
    else{
      element.replace('Hi Cloudflare! Please check out my LinkedIn!');
    }
	}
}
class aHrefWritter
{
	element(element)
	{
    if(idx == 0){
      element.setAttribute('href','https://ezyhoo.github.io/');
    }
    else{
      element.setAttribute('href','https://www.linkedin.com/in/yizhi-hu-84b846a6/');
    }
	}
}
class aWritter
{
	element(element)
	{
    if(idx == 0){
      element.setInnerContent('My Portfolio');
    }
    else{
      element.setInnerContent('My LinkedIn');
    }
	}
}


const rewriter = new HTMLRewriter()
  .on('title', new TitleWriter())
  .on('h1#title', new h1TitleWriter())
  .on('p#description', new pDescriptionWriter())
  .on('a#url', new aHrefWritter())
  .on('a#url', new aWritter())

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with the html content from one of the urls
 * @param {Request} request
 * @return {Response} html content response
 */
async function handleRequest(request) {

   if(localStorage.getItem('cache') !== null){
     return localStorage.getItem('cache');
   }
   let contentStr;    // html content as string format
   await assignUrls();
   contentStr = await getContentStr();

    const init = {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }

    let cache = rewriter.transform(new Response((contentStr), init));
    

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