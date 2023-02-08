var fs = require("fs");
var temp=26.5,temp_s=[];
var acm=10.5, acm_s=[];
var hmd=30.5, hmd_s=[];
var total=[];
for(var i= 0 ;i<20;i++){
 var d1 = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')+' UTC, '+temp+' C';
 temp=temp+1.00;
 temp_s.push(d1);
 var d2 = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')+' UTC, '+acm+' m/s';
 acm=acm+1.00;
 acm_s.push(d2);
 var d3 = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')+' UTC, '+hmd+' m**3';
 hmd=hmd+1.00;
 hmd_s.push(d3);
}
///////// 		temp sensor input start 		////
fs.writeFile('temp_sensor.txt', temp_s.join("\r\n"),  function(err) {
   if (err) {
      return console.error(err);
   }
   });

///////// 		temp sensor input END 		////

///////// 		accelerometer sensor input start 		////

fs.writeFile('accelerometer_sensor.txt', acm_s.join("\r\n"),  function(err) {
   if (err) {
      return console.error(err);
   }
   });

///////// 		accelerometer sensor input END 		////



///////// 		humidity sensor input start 		////

fs.writeFile('humidity_sensor.txt', hmd_s.join("\r\n"),  function(err) {
   if (err) {
      return console.error(err);
   }
   });