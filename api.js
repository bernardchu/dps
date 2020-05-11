// var baseUrl = 'http://roastonbone.com/dps-test/dps-api/api/';
var baseUrl = 'http://api.dpsrescue.com/api/';
var suffix = '.php';

var assembleUrl = function (api) {
  return baseUrl + api + suffix;
};

var _apis = ['featured', 'available', 'dates', 'volunteers', 'fosters', 'sticky_dogs', 'icu', 'success', 'newsletters'];
var apis = {};

_apis.forEach(function (api) {
  apis[api] = assembleUrl(api);
});
