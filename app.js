
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');

var index = require('./routes/index');
var logged = require('./routes/logged');
var map = require('./routes/map');
var weather = require('./routes/weather');
var review = require('./routes/review');
var addReview = require ('./routes/add');
var login = require('./routes/login');
var signup = require('./routes/signup');

var surf = require('./routes/surf');
var new_review = require('./routes/new_review');
var new_weather = require('./routes/new_weather');
var new_add = require('./routes/new_add');
var new_signup = require('./routes/new_signup');
var logout = require('./routes/logout');

var app = express();


// Fixing deprecated methodOverride
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
var hbs = handlebars.create({
    helpers: {
        ifCond: function (v1, operator, v2, options) {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                case '!=':
                    return (v1 != v2) ? options.fn(this) : options.inverse(this);
                case '!==':
                    return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                case '&&':
                    return (v1 && v2) ? options.fn(this) : options.inverse(this);
                case '||':
                    return (v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        }
    },
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
app.get('/logged', logged.view);
app.get('/map/:activity', map.view);
app.get('/weather/:activity', weather.view);
app.get('/review/:activity', review.view);
app.get('/review/:activity/:beach', review.view);
app.get('/login', login.view);
app.get('/signup', signup.view);
app.get('/add/:beach', addReview.view);
app.get('/new', index.view2);

app.get('/new/surf', surf.view);
app.get('/new/review/:id', new_review.view);
app.get('/new/weather/:id', new_weather.view);
app.get('/new/add/:id', new_add.view);
app.get('/new/sign_up', function(req, res){
    res.render('new_signup');
});
app.get('/new/signup', new_signup.view);
app.get('/new/logged/:name', logged.view);
app.get('/logout', logout.view);
app.get('/login_confirm', login.confirm);
app.get('/popup/:id', surf.single_weather);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
