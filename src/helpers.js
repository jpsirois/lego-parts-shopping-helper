module.exports = {
  getUrlParam: function(param) {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars[param];
  },
  urlStartWith: function (url) {
    if (window.location.href.indexOf(url) === 0)
      return true;
    return false;
  }
};
