var mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://pc:noticemesenpai@cluster0.sbjzc.mongodb.net/Login-G?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err)=> {
    if(!err){
		console.log("Successfully Connected");
    } else {
		console.log("Error Connecting");
		throw err;
    }
})

const Users = require("../../models/Users");