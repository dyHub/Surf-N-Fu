exports.view = function(req, res){
  	res.render('index');
};

exports.view2 = function(req, res){
	res.render('index', {new_index: true});
};