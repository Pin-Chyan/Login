const mongoose = require('mongoose')

// Create Schema
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: "Required"
	},
	surname: {
		type: String,
		required: "Required"
	},
	email: {
		type: String,
		required: "Required"
	},
	password: {
		type: String,
		required: "Required"
	}
})

mongoose.model('users', UserSchema)