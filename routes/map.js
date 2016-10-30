/*
 * GET map page.
 */

exports.view = function(req, res){
  var activity = req.params.activity;
  var weatherLink = "/weather/" + activity;
  var reviewLink = '/review/' + activity;
  var image = "/images/" + activity + ".png";

  console.log("activity is " + activity);
  res.render('map', {
  	'activity': activity,
  	'weatherLink': weatherLink,
  	'reviewLink': reviewLink,
  	'image': image
  });
};

