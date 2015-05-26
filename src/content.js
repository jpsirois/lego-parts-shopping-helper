var $ = require('jquery');
var CONFIG = require('./config.js');
var bricklink = require('./content/bricklink.js');
var lego = require('./content/lego.js');

// DEBUG
console.log('### lego-parts-shopping-helper/content.js ###');

/*
  Open Long Live Connection with Background page.
  This is used to send data to background page and save it in localstorage used
  for caching but also to easily share it between any domain.
 */
var port = chrome.runtime.connect({name: CONFIG.CONNECTION_NAME});

// TODO @jpsirois: This is just for testing purpose.
// This is useless except for proving that works.
port.postMessage({request: 'get-cache'});
port.onMessage.addListener(function(data) {
  if (data.request === 'cache') {
    console.log('Local storage cache data from extension background:', data.msg);
  }
});


bricklink.init(port);
lego.init(port);

// Get pricing info from localstorage
// Returned Obj : data.json
port.onMessage.addListener(function(data) {
  if (data.request === 'lego-pricing-info') {
    console.log('LEGO Pricing info', data);
  }
});


module.exports = {};
