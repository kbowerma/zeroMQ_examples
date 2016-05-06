/*
http://www.slideshare.net/fedario/zero-mq-with-nodejs  slide 62
Pub sub data filtering example
*/

var zmq = require("zmq");
var pub = zmq.socket("pub");


pub.bindSync('tcp://127.0.0.1:3055');
//pub.bindSync('ipc:///tmp/zmq.sock');

count = 0;

setInterval(function () {
  pub.send("TEST " + count++);
 }, 1000);

 setInterval(function () {
   pub.send("Bork " + count++);
  }, 1000);
