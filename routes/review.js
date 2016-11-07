/*
 * GET review page.
 */

exports.view = function(req, res){
    var activity = req.params.activity;
    var mapLink = '/map/' + activity;
    var weatherLink = "/weather/" + activity;
    var reviewLink = '/review/' + activity;
    var beachJson = require("../public/json/beaches.json");
    var request = require("request");
    var weatherKey = process.env.WUKEY;

    console.log("activity is " + activity);
    var beach = req.params.beach;
    if(beach){
        var thisBeach = beachJson['beaches'][beach];
        var image = thisBeach['images'][0];
        var weatherUrl = "http://api.wunderground.com/api/" + weatherKey + "/conditions/q/" + thisBeach['latitude'] + "," + thisBeach['longitude'] +".json";

        request({
            url: weatherUrl,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                //console.log(body); // Print the json response
                var weatherData = body['current_observation'];

                res.render('review_beach', {
                    'activity': activity,
                    'mapLink': mapLink,
                    'weatherLink': weatherLink,
                    'reviewLink': reviewLink,
                    'beachName': thisBeach["name"],
                    'description': thisBeach["description"].join(''),
                    'image': image,
                    'weatherData': weatherData,
                    'isReview': true
                });
            } else {
                console.log(error);
            }
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