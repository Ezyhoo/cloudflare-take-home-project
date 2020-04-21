addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  console.log("Get request: " + JSON.parse(request));
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
