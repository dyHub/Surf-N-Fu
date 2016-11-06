/*
 * GET weather page.
 */

exports.view = function(req, res){
    var activity = req.params.activity;
    var mapLink = '/map/' + activity;
    var reviewLink = '/review/' + activity;
    var beachJson = require("../public/json/beaches.json");

    console.log("activity is " + activity);
    res.render('weather', {
        'activity': activity,
        'reviewLink': reviewLink,
        'mapLink': mapLink
    });
};