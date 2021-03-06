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

  getContentResponse = (idx, contentStr) => {
    this.idx = idx;

    const init = {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }

    return rewriter.transform(new Response((contentStr), init));
  }

  export default

