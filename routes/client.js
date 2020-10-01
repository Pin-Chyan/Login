var express = require('express');
var session = require('express-session');
var passwordHash = require('password-hash');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
var router = express.Router();
var ssn;
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
app.set('views', __dirname + './');
router.use(express.json());
router.use(express.urlencoded());
router.use(express.static('styles'));
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


const database = require('./database/database')
const validation = require('../scripts/formValidation')



var DB = new database;




router.get('/Login', function(req, res) {
	//ssn = req.session;
	res.sendFile(path.join(__dirname+"../../views/Login.html"))
})

router.post('/Login', function(req, res) {	

})

router.get('/Signup', function(req, res) {
	//ssn = req.session;
	res.sendFile(path.join(__dirname+"../../views/SignUp.html"))
})


router.post('/Signup', function(req, res) {
	console.log(req.body);
	let db = new database;
	var user = {
		name: req.body.name,
		surname: req.body.surname,
		email: req.body.email,
		password: req.body.password,
		cpassword: req.body.cpassword
	}
	if(validation.registrationFormValid(user.name, user.surname, user.email, user.password, user.cpassword) != true) {
		console.log("something was incorrect");
		res.redirect("/Signup")
	} else {
		var registerAttempt = db.register(user.name, user.surname, user.email, user.password, user.cpassword);
		registerAttempt.then(function (ret) {
			console.log("pass");
			res.json("success");
		},
		function (err) {
			console.log("stuck");
			res.setHeader("Content-Type", "text/html");
			res.write("<p>Hello World</p>");
			res.end();
			res.json("error");
		})
	}
	res.redirect("/Login");
})

router.get('/Logged', function(req, res) {
	ssn = req.session;
	res.sendFile(path.join(__dirname+"../../views/Logged.html"))
})

//router.post('')
module.exports = router;