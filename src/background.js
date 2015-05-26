var $ = require('jquery');
var CONFIG = require('./config.js');

// DEBUG
console.log('### lego-parts-shopping-helper/background.js ###');
localStorage.setItem('cache-demo', 'This text is coming from the extension LocalStorage. This can be use to easily cache data but also to share between any webpage this extension can be running on.');

// Listen Long Live Connection with Content Scripts
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == CONFIG.CONNECTION_NAME);

  // TODO @jpsirois: This is just for testing purpose.
  // This is useless except for proving that works.
  port.onMessage.addListener(function(data) {
    if (data.msg === 'get-cache') {
      var cache = localStorage.getItem('cache-demo');
      port.postMessage({msg: cache});
    }
  });
});

module.exports = {};
