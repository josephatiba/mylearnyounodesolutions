// // // // // // // // // // // // // 
// # 13

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   var time_obj = {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   };
//   return time_obj;
// }

// function unixtime (time) {
//   var time_obj = { 
//     unixtime : time.getTime() 
//   };
//   return time_obj;
// }

// var server = http.createServer(function (req, res) {
//     var parsedUrl = url.parse(req.url, true)
//     var time = new Date(parsedUrl.query.iso)
//     var time_format;


//     if (/^\/api\/parsetime/.test(req.url)){
//       time_format = parsetime(time);
//     }
//     else if (/^\/api\/unixtime/.test(req.url)){
//       time_format = unixtime(time);
//     }
//     console.log(time_format);

//     if (time_format) {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(time_format));
//     } else {
//       res.writeHead(404);
//       res.end();
//     }
// });
// server.listen(process.argv[2]);

// end of #13
// // // // // // // // // // // // // 



// // // // // // // // // // // // // 
// # 12

// var http = require('http');
// var map = require('through2-map');

// var server = http.createServer(function (req, res) {
//     // request handling logic...
//     if(req.method !== 'POST'){
//       return res.end('not the POST method');
//     }   

//     req.pipe(map(function (chunk) {
//       return chunk.toString().toUpperCase();
//     })).pipe(res);

// });
// server.listen(process.argv[2]);

// end of #12
// // // // // // // // // // // // // 

// // // // // // // // // // // // // 
// # 11

// var fs = require('fs');
// var http = require('http');

// var server = http.createServer(function (req, res) {
//     // request handling logic...
//   var dataStream = fs.createReadStream(process.argv[3], function (err, data) {
//     res.end(data);
//   });
//     dataStream.pipe(res);
    
// });
// server.listen(process.argv[2]);

// end of #11
// // // // // // // // // // // // // 

// // // // // // // // // // // // // 
// # 10

// var net = require('net')

// function add_zero(unit){
//   if(unit < 10){
//     return unit = '0' + unit;
//   } else {
//     return unit;
//   }
// }

// var server = net.createServer(function (socket) {
//   // socket handling logic
//   var date = new Date();
//   var year = date.getFullYear().toString();
//   var month = date.getMonth() + 1;     // starts at 0
//   var theDate = date.getDate();      
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
  
//   var date_time;

//   date_time = year + "-" + add_zero(month) + "-" + add_zero(theDate) + " " + add_zero(hours) + ":" + add_zero(minutes) + "\n";  

//   socket.end(date_time)
// });

// server.listen(process.argv[2]);

// end of #10
// // // // // // // // // // // // // 


// // // // // // // // // // // // // 
// # 9

// var http = require('http');

// var bl = require('bl');

// var output_array = [];

// var counter = 0;

// function outputCorrectOrder(){
//   for (var i = 0; i < 3; i++){
//     console.log(output_array[i]);
//   }
// }

// function tripleURL(ind){
//   http.get(process.argv[2 + ind], function (response){
//       response.pipe(bl(function (err, data) {
//          if (err){
//             return console.error(err);
//          }    
//          output_array[ind] = data.toString();

//          counter++;

//          if(counter === 3){
//             outputCorrectOrder();
//          }
        
//       }))
//     })
// }

// function caller(){
//   for(var i = 0; i < 3; i++){
//     tripleURL(i);
//   }
// }
// caller();

// end of #9
// // // // // // // // // // // // // 

// // // // // // // // // // // // // 
// # 8

// var http = require('http');
// var bl = require('bl')
// var url = process.argv[2];

// http.get(url, function callback(response){
//     response.pipe(bl(function (err, data) {
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     }));
//   })

// end of #8
// // // // // // // // // // // // // 


// // // // // // // // // // // // // 
// // # 7

// var http = require('http');

// function getIt(){
//   var url = process.argv[2];
//   http.get(url, function callback(response){

//     // console.log("Got response: " + response.statusCode);

//     response.setEncoding('utf8');

//     response.on("data", function (data) {
//       console.log(data);
//     });

//     response.on('error', function(e) {
//       console.log(e.message);
//     });
//   })
// }
// getIt();

// // end of #7
// // // // // // // // // // // // // // 


// // // // // // // // // // // // // 
// # 6

// var mymodule = require('./mymodule.js');

// var dirWanted = ".";
// if (process.argv[2] !== undefined) {
//   dirWanted = process.argv[2];
// }

// var extWanted = "*";
// if (process.argv[3] !== undefined) {
//   extWanted = process.argv[3];
// }

// mymodule(dirWanted, extWanted, function(err, list) {
//   if (err) {
//     return console.log(err);
//   }
//   list.forEach(function(file) {
//     console.log(file);
//   })
// });

// end of #6
// // // // // // // // // // // // // 



// for #5-ish

// function bar (callback) {
//   var foo = (function (err, data) {
//     if (err){
//       return callback(err); // early return
//     } else {
//       callback(null, data)
//     } 
//   })();
// }
// bar(mymodule);
// // // // // // // // // // // // 
// Learn you node's solution for #5

// var fs = require('fs')
//     var path = require('path')
    
//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//     })
// })


// // // // // // // // // // // // 
// # 5 

// var theList;
// var fs = require('fs');

// var asyncPrintFunc = function(callback){
//   var path = process.argv[2];
  
//   fs.readdir(path, function callback(err, list) {
//     var re = /,/i;
//     theList = list.filter(printTheList);
//     theList = theList.toString();
   
//     while(theList.indexOf(',') !== -1){
//       theList = theList.toString().replace(re, "\n");
//     }
//     console.log(theList);
//   })
// }

// function printTheList(value){

//   var ext = "." +  process.argv[3];

//   var str = value;
//   if(value.indexOf(ext) > 0){
//     return true;
//   } else {
//     return false;
//   }
// }
// asyncPrintFunc(printTheList);

// end of #5
// // // // // // // // // // // // // 



// // // // // // // // // // // // // 
// #4

// var fs = require('fs');

// var theData;
// var asyncFileFunc = function(callback){
//   var path = process.argv[2];
//   // making utf8 the second argument returns a string of the data instead of the buffer
//   fs.readFile(path, 'utf8', function doneReading(err, data) {
//     theData = data.split('\n').length;
//     theData = theData - 1;
//     callback();
//   })
// }

// function printTheData(){
//   console.log(theData);
// }

// asyncFileFunc(printTheData);

// end of #4
// // // // // // // // // // // // // 


// // // // // // // // // // // // // 
// #3

// var fs = require('fs');

// var fileFunc = function(){
//   var path = process.argv[2];
  
//   var buf = fs.readFileSync(path);
//   var str = buf.toString();
//   var strArr = str.split('\n');
//   console.log(strArr.length - 1);
// }

// fileFunc();

// end of #3
// // // // // // // // // // // // // 


// // // // // // // // // // // // // 
// # 2

// var sumThem = function(){
//   var array = process.argv;
//   var theSum = 0;
//   for(var i = 2; i < array.length; i++){
//     theSum += Number(array[i]);
//   }
//   console.log(theSum);
// }

// sumThem();

// end of #2
// // // // // // // // // // // // // 


// // // // // // // // // // // // // 
// # 1

// console.log("HELLO WORLD");

// end of #1
// // // // // // // // // // // // // 

