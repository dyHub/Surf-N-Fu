/*
 * GET weather page.
 */

exports.view = function(req, res){
  var activity = req.params.activity;
  var mapLink = '/map/' + activity;
  var reviewLink = '/review/' + activity;

  console.log("activity is " + activity);
  res.render('weather', {
  	'activity': activity,
  	'reviewLink': reviewLink,
    'mapLink': mapLink
  });
};