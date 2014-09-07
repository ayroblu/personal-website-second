var express = require('express')
  , nunjucks = require('nunjucks')
  , fs = require('fs')
  //, marked = require('marked')
  //, app = express()
  , app = exports.app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , pub = __dirname + '/public/notes'
  , port = 8787;

var toc = require('marked-toc');
var pagedown = require("pagedown");
var converter = new pagedown.Converter();
var safeConverter = pagedown.getSanitizingConverter();


classdirs = {
    'econ372': 'notes/econ372notes.md',
    'econ321': 'notes/econ321notes.md',
    'geotherm785': 'notes/geotherm785notes.md',
    'enggen403': 'notes/enggen403notes.md',
    'enggen403busplan': 'notes/enggen403a2review.md',
}
classes = ['econ372', 'econ321', 'geotherm785', 'enggen403','enggen403busplan'];

//----------------------------------Node setup
io.set('log level', 0);
app.use(express.logger());
app.use(app.router); // Handles get post (or called by get/post), defines the order of call (so like check if a get option before static)
app.use('/static', express.static(pub)); //Static dir: maps to /public
app.use(express.errorHandler()); // Allow 500 requests rather than crashing?

nunjucks.configure('', { //nunjucks: jinja templating
  autoescape: false,
  express: app,
});

// Default values (don't require these lines)
//marked.setOptions({
//  renderer: new marked.Renderer(),
//  gfm: true,
//  tables: true,
//  breaks: false,
//  pedantic: false,
//  sanitize: false,
//  smartLists: true,
//  smartypants: false
//});

//--------------------------------Functions
var notes = '';
function getNotes(homedir) {
  var file = fs.readFileSync(homedir, 'utf8');
  md = converter.makeHtml;
  notes = {'toc':md(toc(file)),'markdown':md(file)};
  //notes = {'toc':marked(toc(file)),'markdown':marked(file)};
  return notes;
}

function markdownurl(i){
  app.get('/'+classes[i], function (req, res) {
    var notes = getNotes(classdirs[classes[i]]);
    template_values = {'toc':notes['toc'],'markdown':notes['markdown']}
    template_values[classes[i]] = true;
    res.render('notes.templates/index.html', template_values);
  });
}

// ----------------------------------Views
app.get('/', function (req, res) {
  var notes = getNotes(__dirname+'/notes/notes.md');
  template_values = {'toc':notes['toc'],'markdown':notes['markdown']}
  res.render('index.html', template_values);
});
for (var i = 0; i < classes.length; ++i) {
  markdownurl(i);
}

//console.log("Server listening on port " + port);
//server.listen(port);
