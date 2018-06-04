var hash = require("./hashes.min.js");
var base64 = require("./base64.min.js");
var encode = require("./utf8.js")


function gen_token(key = 'wxTXs9A1m2', expr_time=3600) {
  var ts_str = String(new Date().getTime() / 1000 + expr_time)
  var list = [key, ts_str];
  list.sort();
  var tmpstr = list.join("")
  var hashcode = encode.sha1(tmpstr)
  var token = ts_str + ':' + hashcode
  var b64_token = base64.Base64.encode(token)
  console.log(b64_token);
  return b64_token
};

function testToken() {
  var token = gen_token("wxTXs9A1m2", 360000000)
  wx.request({
    url: 'http://127.0.0.1:8000/test/token/',
    data: { 'token': token },
    success: function (e) {
      console.log(e)
    }
  })
}

module.exports = {
  genToken: gen_token,
  testToken: testToken,
}