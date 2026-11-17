// Tiny Worker in front of the static site: sends www.gelmatic.co.uk to the
// root domain (301, keeping the path and query), then serves the static files.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.gelmatic.co.uk") {
      url.hostname = "gelmatic.co.uk";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
