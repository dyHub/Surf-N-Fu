/**
 * Created by yuhan on 11/25/16.
 */

var fs = require("fs");

exports.view = function(req, res){
    console.log("Hola");

    re = /^\w+$/;
    if(req.query.username == null) {
        console.log("Error: Username cannot be blank!");
    } else if(!re.test(req.query.username)) {
        console.log("Error: Username must contain only letters, numbers and underscores!");
    } else if(req.query.pwd1 == null) {
        console.log("Error: password cannot be blank!");
    } else if(req.query.pwd1.length < 1) {
        console.log("Error: Password must contain at least six characters!");
    } else {
        fs.readFile("./public/json/login.json", 'ascii', function(err, data) {
            console.log(err);
            console.log(data);
            data = JSON.parse(data);


            data.push({"username": req.query.username, "password": req.query.pwd1});
            console.log(data);
            fs.writeFile("./public/json/login.json", JSON.stringify(data), function(err){
                console.log(err);
                res.writeHead(302, {
                    'Location': '/new/logged/' + req.query.username
                });
                res.end();
            });

        });
    }


};