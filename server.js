var express = require('express')
  , nunjucks = require('nunjucks')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , pub = __dirname + '/public'
  , port = 80;

//var highlight = require('pygments');
var highlight = require('pygments').colorize;

exports.app = server;

//----------------------------------Node setup
io.set('log level', 0);
app.use(express.logger());
app.use(app.router); // Handles get post (or called by get/post), defines the order of call (so like check if a get option before static)
app.use('/static',express.static(pub)); //Static dir: maps to /public
app.use(express.errorHandler()); // Allow 500 requests rather than crashing?
app.use(express.favicon(__dirname + '/favicon.ico')); //Favicon
//app.set('views', __dirname + '/views'); //Jade: didn't really like it
//app.set('view engine', 'jade');
nunjucks.configure('templates', { //nunjucks: jinja templating
  autoescape: true,
  express: app,
});

// ----------------------------------Views
app.get('/', function (req, res) {
  res.render('/index.html',{});
});
app.get('/notes', function (req, res) {
  res.render('/notes.html',{});
});
app.get('/affinities', function (req, res) {
  res.render('/affinities.html',{});
});
app.get('/cpdperf', function (req, res) {
  res.render('/cpdperf.html',{});
});
app.get('/scoring', function (req, res) {
  res.render('/scoring.html',{});
});
app.get('/scoringinput', function (req, res) {
  res.render('/scoringinput.html',{});
});
app.get('/chat', function (req, res) {
  res.render('/directchat.html',{});
});
app.get('/chattest', function (req, res) {
  res.render('/directchat.html~',{});
});
app.get('/toucher', function (req, res) {
  res.render('touch.html',{});
});
app.get('/engineering', function (req, res) {
  res.render('engineering.html',{'engineeringPage':true});
});
app.get('/photosphere', function (req, res) {
  //if (subdomain(req, res, req.headers.host.split('.')[0])) return true;
  res.render('photosphere.html',{'photoPage':true});
});

//var str = "var js = 5;\n"+
//"console.log('Awesome');"
var result = "";
//highlight('puts "Hello World"', 'ruby', 'console', function(data) {
//  console.log(data);
//});
app.get('/code', function (req, res) {
  res.render('/code.html',{'code': result});
});

// ---------------------------------Socket io
var leftscore = 0
  , rightscore = 0;
io.sockets.on('connection', function (socket){
  socket.on('disconnect', function() {
    //socket.broadcast.emit('message','Somebody disconnected');
  });
  //----------------------------------------------scoring
	socket.on('scoring:leftscore', function () {
    ++leftscore;
    io.sockets.in("scoring").emit('getscore',leftscore,rightscore);
	});
	socket.on('scoring:rightscore', function () {
    ++rightscore;
    io.sockets.in("scoring").emit('getscore',leftscore,rightscore);
	});
	socket.on('scoring:resetscore', function () {
    leftscore = 0;
    rightscore = 0;
    io.sockets.in("scoring").emit('getscore',leftscore,rightscore);
	});
  socket.on('scoring', function() {
    socket.join("scoring");
    socket.emit('getscore',leftscore,rightscore);
  });
  //----------------------------------------------chat
  socket.on('chat',function(){
    socket.join('chat');
    if (io.sockets.clients('chat').length == 2) {
      socket.emit('joined');
    }
  });
  socket.on('chat:candidate', function(candidate) {
    socket.broadcast.to('chat').emit('ice',candidate);
  });
  socket.on('chat:offerdescription', function(desc){
    socket.broadcast.to('chat').emit('answer',desc);
  });
  socket.on('chat:answerremotedescription', function(desc){
    socket.broadcast.to('chat').emit('reply',desc);
  });
});

//server.listen(80);
