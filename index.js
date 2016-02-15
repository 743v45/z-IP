'use struct';

var request = require('superagent');
var cheerio = require('cheerio');
var validator = require('validator');
var os = require('os');

exports.extranet = function(callback) {
  var host = 'ip.qq.com';
  request.get(host)
    .end(function(err, html) {
      if (err) {
        return callback(err);
      }
      var $ = cheerio.load(html.text);
      var IPv4 = $('#login_show span').text();
      if (validator.isIP(IPv4, 4)) {
        return callback(null, IPv4);
      }
      callback(new Error('Unknown host'));
  });
};

exports.intranet = function(callback) {
  var IPv4 = '';
  for(var i = 0, net = os.networkInterfaces().en0, l = net.length; i < l; i ++) {
    if (net[i].family === 'IPv4') {
      IPv4 = net[i].address;
      break;
    }
  }
  if (validator.isIP(IPv4, 4)) {
    return callback(null, IPv4);
  }
  callback(new Error('Unknown host'));
};
