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

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://pc:noticemesenpai@cluster0.sbjzc.mongodb.net/Login-G?retryWrites=true&w=majority";

MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("Login-G");
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
});