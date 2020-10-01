const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('styles'));

const client = require("./routes/client");
const api = require("./routes/api");
const router = require("./routes/route");

app.use("/", client);
//app.use("/", api);
app.use("/", router);

// middleware that modify the response body
var doesModifyBody = function(request, response, next) {
	response.setHeader("Content-Type", "text/html");
	response.write("<p>Hello World</p>");
	response.end();
	// doesn't call next()
};

app.use(doesModifyBody);

app.listen(port, err => {
	if (err) {
		return console.log("ERROR", err);
	}
	console.log(`Listening on port ${port}`)
})