var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
for(var i=0;i<chunk.length;i++)
{

   data += String.fromCharCode(chunk[i].charCodeAt()+1);
 
}
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();
});
readerStream.on('end',function(){
   console.log(data);
});
