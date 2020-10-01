const mongoose = require("mongoose");
const connection = require("./connection");

const Usermodels = mongoose.model("users");
var db = mongoose.connection;

class Database {

	constructor() {
		mongoose.connect("mongodb+srv://pc:noticemesenpai@cluster0.sbjzc.mongodb.net/Login-G?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err)=> {
    		if(!err){
				console.log("Successfully Connected");
    		} else {
				console.log("Error Connecting");
				throw err;
    		}
		})
	}

	//validate_user(name) {
	//	return new Promise((resolve, reject) => {
	//		db.collection("Personal").exists({name : name}, function (err, doc) {
	//			if (err) {
	//				console.log(err);
	//				reject(err);
	//			} else {
	//				console.log("Result: ", doc);
	//				resolve(doc);
	//			}
	//		})
	//	})
	//}

	register(name, surname, email, password, cpassword) {
		return new Promise((resolve, reject) => {
			//let userExist = this.validate_user(name);
			//userExist.then(function (ret) {
			//	reject("name already exists.");
			//})
			var user = new Usermodels();
			user.name = name;
			user.surname = surname;
			user.email = email;
			user.password = password;
			console.log("register through");
			db.collection("Personal").insertOne(user, function (err, collection) {
				if (err) throw err;
				console.log("Record Inserted Succesfully.");
				resolve();
			})
			console.log("pass");
			reject();
		})
	}
}

module.exports = Database;