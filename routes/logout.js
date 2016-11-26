/**
 * Created by yuhan on 11/25/16.
 */

exports.view = function(req, res){
    req.app.set('user', null);
    res.render('index', {new_index: true, user: false});
};