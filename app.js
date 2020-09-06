const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const views = require("./routes/Users");

app.use(express.json());
app.use("", views);




app.get("/", (req, res) => {
	//handle root
	res.sendFile(path.join(__dirname+"/Home.html"))
});



app.listen(port, err => {
	if (err) {
		return console.log("ERROR", err);
	}
	console.log(`Listening on port ${port}`)
})