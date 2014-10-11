var express = require('express')
  , nunjucks = require('nunjucks')
  , fs = require('fs')
  , app = exports.app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , pub = __dirname + '/public/notes'                 // Static dir
  , port = 8787
  , toc = require('marked-toc')
  , pagedown = require("pagedown")
  , converter = new pagedown.Converter()
  , safeConverter = pagedown.getSanitizingConverter()
;


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
app.use('/static',express.static(pub)); //Static dir: maps to /public
app.use(express.errorHandler()); // Allow 500 requests rather than crashing?

nunjucks.configure('', { //nunjucks: jinja templating
  autoescape: false,
  express: app,
});


//--------------------------------Functions
var notes = '';
function getNotes(homedir) {
  var file = fs.readFileSync(homedir, 'utf8');
  md = converter.makeHtml;
  notes = {'toc':md(toc(file)),'markdown':md(file)};
  return notes;
}


// ----------------------------------Views
function markdownurl(i){
  app.get('/'+classes[i], function (req, res) {
    var notes = getNotes(classdirs[classes[i]]);
    template_values = {'toc':notes['toc'],'markdown':notes['markdown']}
    template_values[classes[i]] = true;
    res.render('notes.templates/index.html', template_values);
  });
}
for (var i = 0; i < classes.length; ++i) {
  markdownurl(i);
}

app.get('/', function (req, res) {
  var notes = getNotes(__dirname+'/notes/notes.md');
  template_values = {'toc':notes['toc'],'markdown':notes['markdown']}
  res.render('notes.templates/index.html', template_values);
});
