var $ = require('jquery');
var CONFIG = require('../config.js');
var helpers = require('../helpers.js');

module.exports = {
  // ### Get Pricing from LEGO Bricks & Pieces ###
  init: function(port) {

    // This send the lego pricing info when accessing the part JSON URL
    if (helpers.urlStartWith(CONFIG.LEGO.SEARCH.PART)) {

      json = JSON.parse($('body pre').html());
      partNumber = helpers.getUrlParam('searchText');

      port.postMessage({
        request: 'save-lego-pricing-info',
        part_number: partNumber,
        json: json
      });

      console.log(json);

    }

  }
  // ###
};
