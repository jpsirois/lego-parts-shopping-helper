var $ = require('jquery');
var CONFIG = require('./config.js');

// DEBUG
console.log('### lego-parts-shopping-helper/background.js ###');
localStorage.setItem('cache-demo', 'This text is coming from the extension LocalStorage. This can be use to easily cache data but also to share between any webpage this extension can be running on.');

// Listen Long Live Connection with Content Scripts
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == CONFIG.CONNECTION_NAME);

  port.onMessage.addListener(function(data) {

    // TODO @jpsirois: This is just for testing purpose.
    // This is useless except for proving that works.
    if (data.request === 'get-cache') {
      var cache = localStorage.getItem('cache-demo');
      port.postMessage({
        request: 'cache',
        msg: cache
      });
    }


    // Get price from LEGO Bricks & Pieces
    // Returned Obj : data.part, data.color
    if (data.request === 'get-lego-part-price') {
      // TODO @jpsirois: CHECK if value exist in the localstorage
      // before fetching & setting it. If it exist will need to check if it’s
      // been set for too long and if so need to clear it and fetch it again

      // FIXME
      $('#lego-auth, #lego-search').remove();

      // The URL that need to be accessed to allow request to the LEGO API
      $('body').append('<iframe src="' + CONFIG.LEGO.AUTH +'" id="lego-auth">');

      // The API Part Request. Access this page will save it’s data into
      // localstorage for caching purpose but also to be able to reuse it later
      // to add pricing information on Bricklink.
      $('body').append('<iframe src="' + CONFIG.LEGO.SEARCH.PART + data.part + ' " id="lego-search">');
    }


    // Save pricing info from LEGO Bricks & Pieces
    // Returned Obj : data.part_number, data.json
    if (data.request === 'save-lego-pricing-info') {

      localStorage.setItem('lego-part-' + data.part_number, JSON.stringify(data.json));
      var pricingInfo = JSON.parse(localStorage.getItem('lego-part-' + data.part_number));

      // Return value back to webpage
      port.postMessage({
        request: 'lego-pricing-info',
        json: pricingInfo
      });
    }


  });
});

module.exports = {};
