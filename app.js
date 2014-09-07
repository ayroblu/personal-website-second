var express = require('express'); 
var app = express(); 

app 
.use(express.vhost('benlu.co', require('./server.js').app)) 
.use(express.vhost('localhost', require('./server.js').app)) 
.use(express.vhost('a.benlu.co', require('./a.server.js').app)) 
.use(express.vhost('notes.benlu.co', require('./notes.server.js').app)) 
.listen(80); 
