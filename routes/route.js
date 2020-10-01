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

router.get('/', function(req, res) {
    ssn = req.session;
    if (!ssn.user || ssn.user == null){
        res.redirect('/Login')
    } else {
        res.redirect('/Logged')
    }
})


//const express = require('express');
//const session = require('express-session') 
//const path = require('path');
//const bodyParser = require("body-parser");
//const mongoose = require('mongoose');
//let router = express.Router();
//const app = express();


//var url = "mongodb+srv://pc:noticemesenpai@cluster0.sbjzc.mongodb.net/Login-G?retryWrites=true&w=majority";

//mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//var db = mongoose.connection;
//db.on('error', console.log.bind(console, "connection error"));
//db.once('open', function(callback) {
//	console.log("connection succeeded");
//})

//app.use(bodyParser.json());
//app.use(express.static('public'));
//app.use(bodyParser.urlencoded({
//	extended: true
//}));
//app.use(session({
//    // It holds the secret key for session 
//    secret: 'Your_Secret_Key', 
  
//    // Forces the session to be saved 
//    // back to the session store 
//    resave: false, 
  
//    // Forces a session that is "uninitialized" 
//    // to be saved to the store 
//	saveUninitialized: false,
	
//	cookie: {
//		expires: 600000000
//	}
//}))

//const UserSchema = require("../models/Users");
//const { config } = require('process');
//const UserModel = mongoose.model("users");

//router.use(express.json());
//router.use(express.urlencoded());
//router.use(express.static('styles'));
//router.use(session({
//    // It holds the secret key for session 
//    secret: 'Your_Secret_Key', 
  
//    // Forces the session to be saved 
//    // back to the session store 
//    resave: false, 
  
//    // Forces a session that is "uninitialized" 
//    // to be saved to the store 
//	saveUninitialized: false,
	
//	cookie: {
//		expires: 600000000
//	}
//}))

//router.get('/Signup', function(req, res) {
//	res.sendFile(path.join(__dirname+"/../views/SignUp.html"))
//	//console.log(req);
//})

//router.post('/Signup', function(req, res) {
//	console.log(req.body);
//	var name = req.body.name;
//	var surname = req.body.surname;
//	var email = req.body.email;
//	var password = req.body.password;

	
//	var data = {
//		"name": name,
//		"surname": surname,
//		"email": email,
//		"password": password,
//	}


//	//UserModel({
//	//	name: 
//	//})
	

//	db.collection('Personal').insertOne(data, function(err, collection){
//		if (err) throw err;
//		console.log("Record inserted Successfully.")
//	})

//	res.redirect("/Login");
//	//res.send("post method");
//})

//router.get('/Login', function(req, res) {
//	res.sendFile(path.join(__dirname+"/../views/Login.html"))
//	//console.log(req);

//})

//router.post('/Login', function(req, res) {
//	//ssn = req.session;
//	//if (!snn.user || ssn.user == null) {
//	//	res.redirect('/Signup')
//	//}
//	//console.log(req.body);
//	//console.log(req.body);
//	var email = req.body.email;
//	var password = req.body.password;
//	req.session.email = email;
//	req.session.password = password;


	
//	var data = {
//		"email": email, 
//		"password": password,
//	}

//	db.collection('Personal').find({"email": email, "password": password}, function(err, collection) {
//		if (err) throw err;
//		res.header(name, value);
//		res.redirect("/Logged");
//		console.log("Logged in");
//	})

//	//db.collection('Personal').insertOne(data, function(err, collection){
//	//	if (err) throw err;
//	//	console.log("Record inserted Successfully.")
//	//})

//	res.redirect("/Logged");
//	//res.send("post method");
//})

//router.get('/Logged', function(req, res) {
//	if (req.session.email) {
//		res.write("<h1> Logged </h1> <a href='/Logout'>Logout</a>")
//		res.end();
//	} else {
//		res.write("<h1> User Not Logged In </h1> <a href='/'> Main Page </a>")
//		res.end();
//	}

	
//	//res.sendFile(path.join(__dirname+"/../views/Logged.html"))
//	//console.log(req);
//})

//router.get('/Logout', function(req, res) {
//	req.session.destroy(function (err) {
//		if (err) {
//			res.negotiate(err);
//		}
//		res.redirect("/");
//	})
//})

//router.get('/scripts/Signup.js',function(req,res){
//    res.sendFile(path.join(__dirname + './../scripts/Signup.js')); 
//});

//module.exports = router;