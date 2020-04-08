// 1. accept a path as argument

// if (process.argv.length <= 2) {
//     console.log('error');
//     process.exit(-1);
// }
//  var param = process.argv[2];
//  console.log('arguments: ' + param);
 

//2.

var fss = require('fs');
var stats = fss.statSync("c:\\fs-demo.js");
console.log('is file ? ' + stats.isFile());
 
var stats = fss.statSync("c:\\NodeTest");
console.log('is directory ? ' + stats.isDirectory());







