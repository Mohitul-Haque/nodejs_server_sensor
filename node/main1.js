	

var fs =require("fs");
var events=require("events");
var eventEmitter = new events.EventEmitter();
var data ='';

var tempIndex = 0;
var humidIndex = 0;
var accelIndex = 0;

//Writing 100 entries
var writerStreamTemp = fs.createWriteStream('temp_sensor.txt');
var writerStreamHumad = fs.createWriteStream('humidity_sensor.txt');
var writersStreamAccel = fs.createWriteStream('accelerometer_sensor.txt');
var writerStreamDatabase=fs.createWriteStream('Database.txt');

function temp_sensor(){
		for(var i=0;i<100;i++){
		var d = new Date();
		var t =((Math.random() * 30) + 10);
		data='T : '+d.toLocaleDateString()+' '+d.toLocaleTimeString()+' UTC , '+Number(t).toFixed(2)+' C \r\n';
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
		data='A : '+d.toLocaleDateString()+' '+d.toLocaleTimeString()+' UTC , '+Number(x).toFixed(2)+' '+Number(y).toFixed(2)+' '+Number(z).toFixed(2)+' \r\n';
		writersStreamAccel.write(data, 'UTF8');
		//console.log(data);
			
		}


}

function humidity_sensor(){
		for(var i=0;i<100;i++){
		var d = new Date();
		var t =((Math.random() * 100) + 1);
		data='H : '+d.toLocaleDateString()+' '+d.toLocaleTimeString()+' UTC , '+Number(t).toFixed(2)+' % \r\n';
		writerStreamHumad.write(data, 'UTF8');
		
			
		}


}
humidity_sensor();
accelerometer_sensor();
temp_sensor();



var listenTem=function writeTemp(){  
  var arrayTemp = fs.readFileSync("temp_sensor.txt").toString().split('\r\n');
  if(tempIndex <= arrayTemp.length-1){
     console.log(arrayTemp[tempIndex]);  
    fs.appendFile('Database.txt',arrayTemp[tempIndex]+'\r\n',encoding='utf8', function (err){
      if(err)
      throw err;
    });
  }
tempIndex++;
}

//setInterval(writeTemp,2000);


function hum(){

}
var listenHumid=function writeHum(){  
var array = fs.readFileSync("humidity_sensor.txt").toString().split('\r\n');
  
  if(humidIndex <= array.length-1){
    console.log(array[humidIndex]);  
    fs.appendFile('Database.txt',array[humidIndex]+'\r\n',encoding='utf8', function (err){
      if(err)
      throw err;
    });
	
  }
humidIndex++;
}





var listenAccel=function writeAcc(){  
var array = fs.readFileSync("accelerometer_sensor.txt").toString().split('\r\n');
  
  if(accelIndex <= array.length-1){
     console.log(array[accelIndex]);  
    fs.appendFile('Database.txt',array[accelIndex]+'\r\n',encoding='utf8', function (err){
      if(err)
      throw err;
    });
  }
accelIndex++;
}


eventEmitter.on('lt',listenTem );
eventEmitter.on('lh',listenHumid );
eventEmitter.on('la', listenAccel);

setInterval(function l(){eventEmitter.emit('lt');},2000); 
setInterval(function l(){eventEmitter.emit('lh');},5000); 
setInterval(function l(){eventEmitter.emit('la');},10000); 