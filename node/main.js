/*var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
for(var i=0;i<chunk.length;i++)
{

   data += String.fromCharCode(chunk[i].charCodeAt());
 
}
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();
});
readerStream.on('end',function(){
   console.log(data);
});
function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 4000);
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});
var line=
lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});

setTimeout(console.log, 4000);
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {   rl.pause();
    if(char == '\n'){
        (function(){
          //do whatever you want to do with the line here.
          //....
          //When done set the line back to empty, and resume the strem
          line = '';
          stream.resume();
        })();
    }
    else{
        //add the new char to the current line
        line += char;
        stream.resume();
    }
})*/
var fs = require('fs'),
  stream = fs.createReadStream("E:\\node\\input.txt", {
    flags: 'r',
    encoding: 'utf-8',
    fd: null,
    bufferSize: 1
  }),
  line ='';
//start reading the file
stream.addListener('data', function (char) {
    // pause stream if a newline char is found
    stream.pause();
    if(char == '\n'){
        (function(){
          console.log('Line from file:', line);
setTimeout(console.log, 4000);
          line = '';
          stream.resume();
        })();
    }
    else{
        //add the new char to the current line
        line += char;
        stream.resume();
    }
})

