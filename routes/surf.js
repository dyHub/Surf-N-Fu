var googleKey = process.env.GOOGLEKEY;
var googleAPI = "https://maps.googleapis.com/maps/api/js?key=" + googleKey + "&callback=initMap";
var beachJson = require("../public/json/beachesArr.json");
var request = require("request");
var weatherKey = process.env.WUKEYBACKUP;


exports.view = function(req, res){

    res.render('surf', {
        'googleAPI': googleAPI,
        'isMap': true,
        'arr': beachJson['beaches']
    });

};

exports.single_weather = function (req,res) {
    var beachId = req.params.id;
    var thisBeach = beachJson['beaches'][beachId];
    var weatherUrl = "http://api.wunderground.com/api/" + weatherKey + "/conditions/q/" + thisBeach['latitude'] + "," + thisBeach['longitude'] +".json";

    request({
        url: weatherUrl,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("success!"); // Print the json response
            var weatherData = body['current_observation'];

            res.json(weatherData);
        } else {
            console.log(error);
        }
    });

};