const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();


var url = "mongodb+srv://pc:noticemesenpai@cluster0.sbjzc.mongodb.net/Login-G?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback) {
	console.log("connection succeeded");
})

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: false
}));

const Users = require("./../models/Users.model")
const UserModel = mongoose.model("users");

let router = express.Router();

router.get('/Signup', function(req, res) {
	res.sendFile(path.join(__dirname+"/../views/SignUp.html"))
	//console.log(req);

})

router.post('/Signup', function(req, res) {
	//console.log(req.body);
	console.log(req.body);
	var name = req.query.name;
	var surname = req.query.surname;
	var email = req.query.email;
	var password = req.query.password;
	var cpassword = req.query.cpassword;

	
	var data = {
		"name": name,
		"surname": surname,
		"email": email,
		"password": password,
	}

	db.collection('Personal').insertOne(data, function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully.")
	})

	res.send("post method");
})

module.exports = router;