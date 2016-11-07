/*
 * GET review page.
 */

exports.view = function(req, res){
    var activity = req.params.activity;
    var mapLink = '/map/' + activity;
    var weatherLink = "/weather/" + activity;
    var reviewLink = '/review/' + activity;
    var beachJson = require("../public/json/beaches.json");

    console.log("activity is " + activity);
    var beach = req.params.beach;
    if(beach){
        var thisBeach = beachJson['beaches'][beach];
        var image = thisBeach['images'][0];
        res.render('review_beach', {
            'activity': activity,
            'mapLink': mapLink,
            'weatherLink': weatherLink,
            'reviewLink': reviewLink,
            'beachName': thisBeach["name"],
            'description': thisBeach["description"].join(''),
            'image': image,
            'isReview': true
        });
    } else {
        res.render('review', {
            'activity': activity,
            'mapLink': mapLink,
            'weatherLink': weatherLink,
            'reviewLink': reviewLink,
            'isReview': true
        });
    }
};