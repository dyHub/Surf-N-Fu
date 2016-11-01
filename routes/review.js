/*
 * GET review page.
 */

exports.view = function(req, res){
  var activity = req.params.activity;
  var mapLink = '/map/' + activity;
  var weatherLink = "/weather/" + activity;

  console.log("activity is " + activity);
  res.render('review', {
  	'activity': activity,
  	'weatherLink': weatherLink,
    'mapLink': mapLink
  });
};