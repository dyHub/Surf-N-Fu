/*
 * GET weather page.
 */

exports.view = function(req, res){
    var activity = req.params.activity;
    var mapLink = '/map/' + activity;
    var weatherLink = "/weather/" + activity;
    var reviewLink = '/review/' + activity;
    var beachJson = require("../public/json/beaches.json");

    console.log("activity is " + activity);
    res.render('weather', {
        'activity': activity,
        'mapLink': mapLink,
        'weatherLink': weatherLink,
        'reviewLink': reviewLink,
        'isWeather': true
    });
};