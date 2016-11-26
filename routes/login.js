
/*
 * GET home page.
 */

exports.view = function(req, res){
  var activity = req.params.activity;

  console.log("activity is " + activity);
  res.render('login', {
  	'activity': activity
  });
};

var users = require("../public/json/login.json");
exports.confirm = function(req, res){

    var done = false;
    for(var i=0; i<users.length; i++){
        if (req.query.username == users[i].username
            && req.query.pwd == users[i].password) {
            console.log("success!");
            req.app.set('user', req.query.username);
            done = true;
            res.redirect("/new");
        }
    }

    if (!done){
        console.log("password or username mot valid");
        res.render('error');
    }
};