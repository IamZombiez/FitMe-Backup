var exports = module.exports = {}
  
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
 
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
 
 
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

 
exports.dashboard = function(req, res) {
 
    res.render('my-fitness');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}

exports.history = function(req, res) {

	res.render('fit-past');
}

exports.goal = function(req, res) {

	res.render('my-fitness');
}