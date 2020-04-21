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
   * 
   */
  export async function getContentStr(){
    console.log(idx);
    return await (await fetch(urls[idx])).text();
  }



  export function getRandomIdx(){
      retun idx;
  }

  