var express = require('express')
  , nunjucks = require('nunjucks')
  , app = exports.app= express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , pub = __dirname + '/public'
  , port = 80;

//----------------------------------Node setup
io.set('log level', 1);
app.use(app.router);
app.use('/static',express.static(pub));
app.use(express.logger());
app.use(express.errorHandler());
app.use(express.favicon(__dirname + '/favicon.ico'));
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
nunjucks.configure('templates', {
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
app.get('/test', function (req, res) {
  console.log('req.headers.host',req.headers.host.split('.')[0]);
  res.render('/index.html',{});
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

