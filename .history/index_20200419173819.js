class AttributeRewriter
{
	constructor(attributeName)
	{
		this.attributeName = attributeName;
	}

	element(element)
	{
		const attribute = element.getAttribute(this.attributeName);
		if (attribute) element.setAttribute(this.attributeName, attribute.replace('myolddomain.com', 'mynewdomain.com'));
	}
}

const rewriter = new HTMLRewriter()
	.on('a', new AttributeRewriter('href'))
	.on('img', new AttributeRewriter('src'));

async function handleRequest(req)
{
	const res = await fetch(req);
	return rewriter.transform(res);
}

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
})