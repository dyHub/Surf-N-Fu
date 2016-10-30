
/*
 * GET home page.
 */

exports.view = function(req, res){
	var testVar = process.env.TESTVAR
	console.log("what is the test variable???" + testVar);
	console.log("did I call this even??")
  	res.render('index', {
  	'testVar': testVar
  });
};