let idx;

const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

/**
 * Assign the urls from the fetch call to the local variable
 */
export async function assignUrls() {
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
   * Get the content of the page specified by the idx
   * @param {int} idx of the urls
   */
  export async function getContentStr(idx){
    return await (await fetch(urls[idx])).text();
  }


    /**
   * Get the content of the page specified by the idx
   * @param {int} idx of the urls
   */   
  export function getRandomIdx(){
     idx = Math.floor(Math.random() * urls.length);
     return idx;
  }

  