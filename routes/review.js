/*
 * GET review page.
 */

exports.view = function(req, res){
    var activity = req.params.activity;
    var mapLink = '/map/' + activity;
    var weatherLink = "/weather/" + activity;

    var beachJson = require("../public/json/beaches.json");

    console.log("activity is " + activity);
    var beach = req.params.beach;
    if(beach){
        res.render('review_beach', {
            'activity': activity,
            'weatherLink': weatherLink,
            'mapLink': mapLink,
            'beachName': beachJson["beaches"][beach]
        });
    } else {
        res.render('review', {
            'activity': activity,
            'weatherLink': weatherLink,
            'mapLink': mapLink
        });
    }
};