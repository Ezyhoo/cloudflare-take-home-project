let idx;

const urlToFetch = "https://cfw-takehome.developers.workers.dev/api/variants";

let urls = [];

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

  export default distributor = {
      assignUrls = this.
  }