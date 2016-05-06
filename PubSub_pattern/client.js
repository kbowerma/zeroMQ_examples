/*
http://www.slideshare.net/fedario/zero-mq-with-nodejs  slide 62
Pub sub data filtering example
*/

var zmq = require("zmq");
var sub = zmq.socket("sub");


sub.connect('tcp://127.0.0.1:3055');
sub.subscribe("TEST");

sub.on("message", function(msg) {
  console.log("Received: " + msg);

});
