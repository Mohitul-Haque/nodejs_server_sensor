var fs =require("fs");

var data ='';

var tempIndex = 0;



var writerStreamTemp = fs.createWriteStream('temp_sensor.txt');

function temp_sensor(){
		for(var i=0;i<10;i++){
		var d = new Date();
		var t =((Math.random() * 30)+30);
//var i=t>>30;
		data='T : '+d.toLocaleDateString()+' '+d.toLocaleTimeString()+' UTC , '+Number(t).toFixed(2)+' C \r\n';
		writerStreamTemp.write(data, 'UTF8');
	       console.log(data);
			
		}


}
temp_sensor();
