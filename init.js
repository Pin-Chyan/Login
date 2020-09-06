//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://pc:noticemesenpai@cluster0.sbjzc.mongodb.net/Login-G?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
//client.connect(err => {
//	if (err) throw err;
//	const collection = client.db("test").collection("devices");
//	// perform actions on the collection object
//	console.log("Database created!");
//		if

//	client.close();
//});


//MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true }, function(err, db) {
	//if (err) throw err;
	//var dbo = db.db("Login-G");
	//console.log("ended");
	//db.close();

	//creation
	//var myobj = { name: "Company Inc", address: "Highway 37" };
	//dbo.collection("customers").insertOne(myobj, function(err, res) {
	//	if (err) throw err;
	//	console.log("1 document inserted");
	//	db.close();
	//});

	// finding
	//dbo.collection("customers").findOne({}, function(err, result) {
	//	if (err) throw err;
	//	console.log(result.name);
	//	db.close();
	//});
//});

var express = require("express");
var bodyParser = require("body-parser");

var url = "mongodb+srv://pc:noticemesenpai@cluster0.sbjzc.mongodb.net/Login-G?retryWrites=true&w=majority";
var mongoose = require('mongoose');

mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback) {
	console.log("connection succeeded");
})

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/routes/signup', function(req, res){
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

	return res.redirect('/routes/login');
})
