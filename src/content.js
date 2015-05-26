var $ = require('jquery');
var CONFIG = require('./config.js');

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
port.postMessage({msg: 'get-cache'});
port.onMessage.addListener(function(data) {
  console.log('Local storage cache data from extension background:', data);
});

module.exports = {};
