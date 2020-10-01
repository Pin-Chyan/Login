function hasSpecial(string) {
	var regex = /^[A-Za-z0-9-_. ]+$/
	var isValid = regex.test(string);

	return (isValid);
}

function emailValid(email) {
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function loginFormValid(email, password) {
	if (!email || !password)
		return (false);
	return (true);
}

function registrationFormValid(name, surname, email, password, cpassword) {
	if (!name || !surname || !email || !password || !cpassword)
		return (false);
	if (password !== cpassword)
		return (false);
	if (!emailValid(email))
		return (false);
	if (!hasSpecial(name))
		return (false);
	return (true);
}

module.exports.registrationFormValid = registrationFormValid;
module.exports.loginFormValid = loginFormValid;