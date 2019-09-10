const rp = require("request-promise-native");
const normalizeUrl = require("normalize-url");

var options = {
  headers: { "user-agent": "node.js" }
};

const url = "nike.com";
const getResults = async url => {
  const normalUrl = normalizeUrl(url);
  console.log("normal url is ", normalUrl);
  const htmlString = await rp(normalUrl, options);
  var patt = /href="(.*?)"/g;
  const results = htmlString.match(patt);

  results.forEach(result => {
    result.includes("youtube.com") ||
    result.includes("facebook.com") ||
    result.includes("instagram.com") ||
    result.includes("wikipedia.com") ||
    result.includes("twitter.com") ||
    result.includes("pinterest.com")
      ? console.log(result)
      : null;
  });
};

getResults(url);
