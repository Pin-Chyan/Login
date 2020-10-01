var express = require('express');
var session = require('express-session');
var passwordHash = require('password-hash');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router = express.Router();
var ssn;
router.use(session({
    // It holds the secret key for session 
    secret: 'XASDASDA', 
  
    // Forces the session to be saved 
    // back to the session store 
    resave: false, 
  
    // Forces a session that is "uninitialized" 
    // to be saved to the store 
	saveUninitialized: false,
	
	cookie: {
		expires: 600000000
	}
}))
app.use(session({
    // It holds the secret key for session 
    secret: 'XASDASDA', 
  
    // Forces the session to be saved 
    // back to the session store 
    resave: false, 
  
    // Forces a session that is "uninitialized" 
    // to be saved to the store 
	saveUninitialized: false,
	
	cookie: {
		expires: 600000000
	}
}))
module.exports = router;
app.set('views', __dirname + './');

router.get('/ssn/Login', function(req, res) {
    ssn = req.session;
    if (!ssn.user || ssn.user == null){
        res.redirect('/login')
    } else {
		var item = req.query;
		ssn.client = {
			"email": item.email,
			"password" : item.password,
		}
		res.redirect('/SignUp/Select');
    }
})