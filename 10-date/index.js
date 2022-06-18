// Number of milliseconds from 1-1-1970
var moment = require('moment');
// var now = new Date();
// var myBirth = new Date(1996, 2, 18); // 18/03/1996

// console.log(now.getTime());

var birthDay = moment('1996-03-18');
console.log(birthDay.fromNow());
console.log(birthDay.format('yyyy/MM/DD'));