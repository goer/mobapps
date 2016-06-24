var moment = require('moment');
moment().format();

//YYYYMMDDHHIISS
//var f = "yyyymmddhhMMss";
var f ='YYYYMMDDhhmmss';
var s = moment().format(f);

console.log('s:'+s);

// var today = new Date();
// var dataWaktu = today.format("yyyymmddhhMMss");

// console.log('w:'+dataWaktu);