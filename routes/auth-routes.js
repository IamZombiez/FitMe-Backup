var authController = require('../controllers/authcontroller.js');
var passport = require('passport');
 
module.exports = function(app, passport) {


    app.get('/', authController.signin); 
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/my-fitness',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 

    app.get('/history', authController.history);

    app.get('/goal', authController.goal);
 
    
    app.get('/my-fitness', authController.dashboard);

 
    app.get('/logout', authController.logout);
 
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signin'
        }
 
    ));
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}