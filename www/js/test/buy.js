var moment = require('moment');

var f ='YYYYMMDDhhmmss';
var s = moment().format(f);

var p = ''
var user = {"u" : 'alfian.malik@gmail.com', "p": 'apaansih'};

var crypto = require('crypto');  
var hasher = function(type){
  return function(src){
    var hash = crypto.createHash(type);
    hash.update(src, 'binary');
    return hash.digest('hex');
  };
};

//var md5 = hasher('md5');
var sha1 = hasher('sha1');

var k = user.u + user.p + s;
var p = sha1(k);

console.log('k:'+k);
console.log('p:'+p);



var data = {
                     "userid": user.u,
                     "reffid": "GSMPRE-AIN-00000102"+Math.floor(Math.random()*700),
                     "target": '08123',
                     "amount": '50',
                     "terminal":"terminal-mobapps-1",
                     "timestamp": s,
                     "sign": p,
                     "prodName":"TSEL50"
                  };

console.log(data);

var link_beli = "http://103.16.78.45/admin/index.php/api/routers/router";

var unirest = require('unirest');

unirest.post(link_beli)
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send({ "parameter": 23, "foo": "bar" })
.end(function (response) {
  console.log(response.body);
});