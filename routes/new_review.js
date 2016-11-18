exports.view = function(req, res){
    var beachJson = require("../public/json/beachesArr.json");
    var request = require("request");
    var weatherKey = process.env.WUKEYBACKUP;

    //console.log("activity is " + activity);
    var beachID = req.params.id;
    var thisBeach = beachJson['beaches'][beachID];
    var image = thisBeach['images'][0];
    var weatherUrl = "http://api.wunderground.com/api/" + weatherKey + "/conditions/q/" + thisBeach['latitude'] + "," + thisBeach['longitude'] +".json";
    request({
        url: weatherUrl,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body); // Print the json response
            var weatherData = body['current_observation'];

            res.render('new_review', {
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
};