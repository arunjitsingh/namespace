var namespace = require('./namespace').namespace;

namespace('ajs.js.util');
namespace('ajs.js.crypto');
namespace('ajs.js.crypto.hash');
namespace('ajs.js.crypto.cipher');

console.log(ajs);

ajs.js.util.stringToBytes = function stringToBytes(str) {
  return [].slice.call(str).map(function(s) {
    return s.charCodeAt(0) & 0xff;
  });
};

var crypto = require('crypto');
ajs.js.crypto.hash.SHA = function(str) {
  return crypto.createHash('sha512').update(str).digest('hex');
};

console.log(ajs.js.util.stringToBytes('abc'));

console.log(ajs.js.crypto.hash.SHA('abc'));
