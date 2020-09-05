const express = require('express');
const path = require('path');


let router = express.Router();

router.use(function(req, res, next){
	console.log(req.url, "@", Date.now());
	next();
})
router
	.route("/signup")
	.get((req, res) => {
		// views/signup
		//res.send("hi get views/signup");
		res.sendFile(path.join(__dirname+"/../views/SignUp.html"))
	})
	.post((req, res) => {
		res.send("hi post views/signup");
	});

router
	.route("/signup/:nbrid")
	.get((req, res) => {
		res.send("hi get views/signup/id");
	})
	.put((req, res) => {
		res.send("hi put views/signup/id");
	});

module.exports = router;