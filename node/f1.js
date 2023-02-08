var fs =require("fs");
var events=require("events");

//Writing 100 entries
var writerStreamTemp = fs.createWriteStream('temp_sensor.txt');
var writerStreamHumad = fs.createWriteStream('humidity_sensor.txt');
var writersStreamAccel = fs.createWriteStream('accelerometer_sensor.txt');


function temp_sensor(){
		for(var i=0;i<100;i++){
		var d = new Date();
		var t =((Math.random() * 30) + 10);
		data=d.toLocaleDateString()+' '+d.toLocaleTimeString()+' UTC , '+Number(t).toFixed(2)+' C \r\n';
		writerStreamTemp.write(data, 'UTF8');
		//console.log(data);
			
		}


}

function accelerometer_sensor(){
		for(var i=0;i<100;i++){
		var d = new Date();
		var x =((Math.random() * 10) - 10);
		var y =((Math.random() * 10) + 10);
		var z =((Math.random() * 10) + 10);
		data=d.toLocaleDateString()+' '+d.toLocaleTimeString()+' UTC , '+Number(x).toFixed(2)+' '+Number(y).toFixed(2)+' '+Number(z).toFixed(2)+' \r\n';
		writersStreamAccel.write(data, 'UTF8');
		//console.log(data);
			
		}


}

function humidity_sensor(){
		for(var i=0;i<100;i++){
		var d = new Date();
		var t =((Math.random() * 100) + 1);
		data=d.toLocaleDateString()+' '+d.toLocaleTimeString()+' UTC , '+Number(t).toFixed(2)+' % \r\n';
		writerStreamHumad.write(data, 'UTF8');
		//console.log(data);
			
		}


}
humidity_sensor();
accelerometer_sensor();
temp_sensor();
data=' ';


