/*
 * GET weather page.
 */

exports.view = function(req, res){
    var activity = req.params.activity;
    var mapLink = '/map/' + activity;
    var weatherLink = "/weather/" + activity;
    var reviewLink = '/review/' + activity;
    var beachJson = require("../public/json/beaches.json");
    var beaches = beachJson['beaches'];
    var weatherKey = process.env.WUKEY;
    var request = require("request");

    var weatherUrl = "http://api.wunderground.com/api/" + weatherKey + "/hourly10day/q/" + beaches['blacks']['latitude'] + "," + beaches['blacks']['longitude'] +".json";
    request({
        url: weatherUrl,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var weatherData = body['hourly_forecast'];
            //console.log(weatherData);
            res.render('weather', {
                'activity': activity,
                'mapLink': mapLink,
                'weatherLink': weatherLink,
                'reviewLink': reviewLink,
                'beaches': beaches,
                'weatherData': weatherData.slice(0, 48),
                'isWeather': true
            });
        } else {
            console.log("error");
            console.log(error);
        }
    });

};