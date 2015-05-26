var helpers = require('../helpers.js');
var CONFIG = require('../config.js');

module.exports = {
  // ### Add Pricing from LEGO Bricks & Pieces into Bricklink Catalog ###
  init: function(port) {

    partNumber = helpers.getUrlParam('P');
    partColorID = helpers.getUrlParam('colorID');

    port.postMessage({
      request: 'get-lego-part-price',
      part: partNumber,
      color: partColorID
    });

    // Get pricing info from localstorage
    // Returned Obj : data.json
    port.onMessage.addListener(function(data) {
      if (data.request === 'lego-pricing-info') {
        console.log('LEGO Pricing info', data);
      }
    });

  }
  // ###
};
