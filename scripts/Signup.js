function compForm() {
	if (validateForm()) {
		urlredirect({
			url: window.location.href.slice(0, 14)+"/Signup",
			method: post,
			data: {
				"name": $("#name").val(),
				"surname": $("#surname").val(),
				"email": $("#email").val(),
				"password": $("#password").val(),
			}
		});
	}
}

function validateForm() {
	if(valName() && valSurname() && valEmail() && valPassword() && passCompare()) {
		return true;
	} else {
		return false;
	}
}

function valName() {
	var name = $("#name").val();
	if(!name) {
		$("#name").css("border", "2px solid red");
		return false;
	} else {
		$("#name").css("border", "2px solid green");
	}
	return true;
}

function valSurname() {
	var surname = $("#surname").val();
	if(!surname) {
		$("#surname").css("border", "2px solid red");
		return false;
	} else {
		$("#surname").css("border", "2px solid green");
	}
	return true;
}

function valEmail() {
	var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = $("#email").val();
	if(!email || email.match(emailformat)) {
		$("#email").css("border", "2px solid red");
		return false;
	} else {
		$("#email").css("border", "2px solid green");
	}
	return true;
}

function valPassword() {
	var passformat ="^(?=.*[0-9])"
					+ "(?=.*[a-z])(?=.*[A-Z])"
					+ "(?=.*[@#$%^&+=])"
					+ "(?=\\S+$).{8,20}$";
	var password = $("#password").val();
	if (!password || password.match(passformat)) {
		$("#password").css("border", "2px solid red");
		return false;
	} else {
		$("#password").css("border", "2px solid green");
	}
	return true;
}

function passCompare() {
	var password = $("#password").val();
	var cpassword = $("#cpassword").val();

	if (!password == cpassword) {
		$("#cpassword").css("border", "2px solid red");
		return false;
	} else {
		$("#cpassword").css("border", "2px solid green");
	}
	return true;
}
