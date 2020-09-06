const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
let router = express.Router();
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
	extended: true
}));

const Users = require("./../models/Users.model")
const UserModel = mongoose.model("users");

router.use(express.json());
router.use(express.urlencoded());

router.get('/Signup', function(req, res) {
	res.sendFile(path.join(__dirname+"/../views/SignUp.html"))
	//console.log(req);

})

router.post('/Signup', function(req, res) {
	//console.log(req.body);
	console.log(req.body);
	var name = req.body.name;
	var surname = req.body.surname;
	var email = req.body.email;
	var password = req.body.password;
	var cpassword = req.body.cpassword;

	
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