exports.view = function(req, res){
    var googleKey = process.env.GOOGLEKEY;
    var googleAPI = "https://maps.googleapis.com/maps/api/js?key=" + googleKey + "&callback=initMap";
    var beachJson = require("../public/json/beachesArr.json");
    var request = require("request");
    var weatherKey = process.env.WUKEYBACKUP;

    var thisBeach = beachJson['beaches'][0];
    var weatherUrl = "http://api.wunderground.com/api/" + weatherKey + "/conditions/q/" + thisBeach['latitude'] + "," + thisBeach['longitude'] +".json";

    request({
        url: weatherUrl,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body); // Print the json response
            var weatherData = body['current_observation'];

            res.render('surf', {
                'googleAPI': googleAPI,
                'weatherData': weatherData,
                'isMap': true,
                'arr': beachJson['beaches']
            });
        } else {
            console.log(error);
        }
    });

};