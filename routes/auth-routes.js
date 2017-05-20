var authController = require('../controllers/authcontroller.js');
var passport = require('passport');
 
module.exports = function(app, passport) {


    app.get('/', authController.signin); 
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/history', authController.history);

    app.get('/goal', authController.goal);
 

    app.get('/dashboard', authController.dashboard);
    
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