/*
 * GET signup page.
 */


exports.view = function(req, res){
  var activity = req.params.activity;

  console.log("activity is " + activity);
  res.render('signup', {
  	'activity': activity,
  });
};