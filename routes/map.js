/*
 * GET map page.
 */

exports.view = function(req, res){
    var activity = req.params.activity;
    var mapLink = '/map/' + activity;
    var weatherLink = "/weather/" + activity;
    var reviewLink = '/review/' + activity;
    var image = "/images/" + activity + ".png";
    var googleKey = process.env.GOOGLEKEY;
    var googleAPI = "https://maps.googleapis.com/maps/api/js?key=" + googleKey + "&callback=initMap";

    console.log("activity is " + activity);
    res.render('map', {
        'activity': activity,
        'mapLink': mapLink,
        'weatherLink': weatherLink,
        'reviewLink': reviewLink,
        'image': image,
        'googleAPI': googleAPI,
        'isMap': true
    });
};

