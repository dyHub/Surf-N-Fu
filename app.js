
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');

var index = require('./routes/index');
var map = require('./routes/map');
var weather = require('./routes/weather');
var review = require('./routes/review');
var login = require('./routes/login');
var signup = require('./routes/signup');
var app = express();


// Fixing deprecated methodOverride
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
var hbs = handlebars.create({
    partialsDir: [
        'views/partials/'
    ]
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());

app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
//app.set('view engine', 'ejs');
//handlebars.registerPartial(__dirname + 'views/partials/footer.handlebars');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/map/:activity', map.view);
app.get('/weather/:activity', weather.view);
app.get('/review/:activity', review.view);
app.get('/review/:activity/:beach', review.view);
app.get('/login/', login.view);
app.get('/signup/', signup.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
