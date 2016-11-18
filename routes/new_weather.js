/*
 * GET weather page.
 */

exports.view = function(req, res){
    var beachJson = require("../public/json/beachesArr.json");
    var weatherKey = process.env.WUKEY;
    var request = require("request");
    var tideData = null;
    var weatherData = null;
    var tideTimesFirst = [];
    var tideTimesSecond = [];

    var beachID = req.params.id;
    var thisBeach = beachJson['beaches'][beachID];

    var weatherUrl = "http://api.wunderground.com/api/" + weatherKey + "/hourly10day/q/" + thisBeach['latitude'] + "," + thisBeach['longitude'] +".json";
    var tideUrl = "http://api.wunderground.com/api/" + weatherKey + "/tide/q/CA/San_Diego.json";

    request({
        url: tideUrl,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            successCallBack(body);
        } else {
            console.log("error");
            console.log(error);
        }
    });


    var successCallBack = function(body){
        tideData = body['tide'];
        if (tideData != null){
            // get the first 48 hours of tide information
            tideData = tideData['tideSummary'].slice(0,16);

            // get the hash for first day
            for(var i=0; i<8; i++){
                tideTimesFirst[i] = tideData[i];
            }

            // get the hash for second day
            for(var j=8; j<16; j++){
                tideTimesSecond[j-8] = tideData[j];
            }
        } else {
            console.log("can't get tide data");
        }

        getWeatherData();
    };

    var getWeatherData = function(){
        request({
            url: weatherUrl,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                weatherData = body['hourly_forecast'];
                if(weatherData != null){
                    weatherData = weatherData.slice(0, 48);
                    renderWeatherPage();
                } else {
                    console.log("can't get weather data");
                }

            } else {
                console.log("error");
                console.log(error);
            }
        });
    };

    var renderWeatherPage = function(){
        res.render('new_weather', {
            'weatherData': weatherData,
            'tideData': tideData,
            'tideTimesFirst': tideTimesFirst,
            'tideTimesSecond': tideTimesSecond,
            'thisBeach': thisBeach,
            'isWeather': true
        });
    }

};