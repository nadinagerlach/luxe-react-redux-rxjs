let IS_PROD = process.env.NODE_ENV === 'production';
let ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
let ALGOLIA_API_SECRET = process.env.ALGOLIA_API_SECRET;
let algoliasearch = require('algoliasearch');

let algolia = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_SECRET);
let initIndex = function(index) {
  return algolia.initIndex(IS_PROD ? index : `dev_${  index}`);
};
module.exports = initIndex;
