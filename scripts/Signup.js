function registrationValid(name, surname, email, password, cpassword) {
	return new Promise ((resolve, reject) => {
		let regexName = /^[\w'\-,.]*[^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$/;
		let regexSurname = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (name === undefined ||  name == "")
			reject('Name is Empty.');
		if (name.length < 4)
			reject('Name is too Short.')
		if (!(regexName.test(name)))
			reject ('Illegal Chars in Name');
		if (surname === undefined || surname == "")
			reject ('Surname empty.');
		if ((regexSurname.test(surname)))
			reject ('Illegal Chars in Surname');
		if (email === undefined || email == "")
			reject ('Email empty.');
		if (!(regexEmail.test(String(email).toLowerCase())))
			reject ('Invalid email.');
		if (password === undefined || password == "")
			reject ('Password empty.');
		if (password.length < 8)
			reject ('password is too short');
		if ((/[^A-Za-z0-9]+/.test(password)))
			reject ('Password contains something other than numbers and letters');
		if (!(/.*[1-9].*/.test(password)))
			reject ('Password does not contain numbers');
		if (!(/.*[a-zA-Z].*/.test(password)))
			reject ('Password does not contain letters');
		if (cpassword === undefined || cpassword == "")
			reject ('Confirm Password empty');
		if (password != cpassword)
			reject ('Password mismatch');
		resolve ('Valid');
	});
}

function registrationHandler(data) {
	if (data !== 'success') {
        swal(
            'Error!',
            `Username already in use`,
            'error'
		)
	} else {
		window.location.href = "/";
	}
}

function registerPost() {
	let form = {
		userName: document.getElementById('name').value,
		userSurame: document.getElementById('surname').value,
		userEmail: document.getElementById('email').value,
		userPassword: document.getElementById('password').value,
		userCPassword: document.getElementById('cpassword').value,
	}
	let valid = registrationValid(form.userName, form.userSurame, form.userEmail, form.userPassword, form.userCPassword);
	valid.then( function(ret) {
		$.ajax({
			type: "POST",
			url: '/Register',
			data: JSON.stringify(form),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(ret) {
				if (ret == 'success') {
					registrationHandler(ret)
				} else {
					swal(
						'Error!',
						`${ret}`,
						'error'
					)
				}
			}
		})
	}, function(err) {
		swal(
			'Error!',
            `${err}`,
            'error'
		)
	})
}



//function compForm() {
//	if (validateForm()) {
//		urlredirect({
//			url: window.location.href.slice(0, 14)+"/Signup",
//			method: post,
//			data: {
//				"name": $("#name").val(),
//				"surname": $("#surname").val(),
//				"email": $("#email").val(),
//				"password": $("#password").val(),
//			}
//		});
//	}
//}

//function validateForm() {
//	if(valName() && valSurname() && valEmail() && valPassword() && passCompare()) {
//		return true;
//	} else {
//		return false;
//	}
//}

//function valName() {
//	var name = $("#name").val();
//	if(!name) {
//		$("#name").css("border", "2px solid red");
//		return false;
//	} else {
//		$("#name").css("border", "2px solid green");
//	}
//	return true;
//}

//function valSurname() {
//	var surname = $("#surname").val();
//	if(!surname) {
//		$("#surname").css("border", "2px solid red");
//		return false;
//	} else {
//		$("#surname").css("border", "2px solid green");
//	}
//	return true;
//}

//function valEmail() {
//	var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//	var email = $("#email").val();
//	if(!email || email.match(emailformat)) {
//		$("#email").css("border", "2px solid red");
//		return false;
//	} else {
//		$("#email").css("border", "2px solid green");
//	}
//	return true;
//}

//function valPassword() {
//	var passformat ="^(?=.*[0-9])"
//					+ "(?=.*[a-z])(?=.*[A-Z])"
//					+ "(?=.*[@#$%^&+=])"
//					+ "(?=\\S+$).{8,20}$";
//	var password = $("#password").val();
//	if (!password || password.match(passformat)) {
//		$("#password").css("border", "2px solid red");
//		return false;
//	} else {
//		$("#password").css("border", "2px solid green");
//	}
//	return true;
//}

//function passCompare() {
//	var password = $("#password").val();
//	var cpassword = $("#cpassword").val();

//	if (!password == cpassword) {
//		$("#cpassword").css("border", "2px solid red");
//		return false;
//	} else {
//		$("#cpassword").css("border", "2px solid green");
//	}
//	return true;
//}

//function url_redirect(options) {
//	var $form = $("<form />");

//	$form.attr("action", options.url);
//	$form.attr("method", options.method);

//	for (var data in options.data)
//		$form.append('<input type="hidden" name="' + data + '" value="' + options.data[data] + '" />');

//	$("body").append($form);
//	$form.submit();
//}


//function validForm() {
//	return new Promise((resolve, reject) => {

//		var name = document.forms["signupForm"]["name"];
//		var surname = document.forms["signupForm"]["surname"];
//		var email = document.forms["signupForm"]["email"];
//		var password = document.forms["signupForm"]["password"];
//		var cpassword = document.forms["signupForm"]["cpassword"];

//		if (name.value == "") {
//			window.alert("Please insert a Name.");
//			//name.css("border", "2px solid red");
//			name.focus();
//			return reject();
//		}
//		if (surname.value == "") {
//			window.alert("Please insert a Surname.");
//			name.focus();
//			return reject();
//		}
//		if (email.value == "") {
//			window.alert("Please insert a Valid Email.");
//			name.focus();
//			return reject();
//		}
//		if (password.value == "") {
//			window.alert("Please insert a Password.");
//			name.focus();
//			return reject();
//		}
//		if (cpassword.value == "") {
//			window.alert("Please insert a Confirmed Password.");
//			name.focus();
//			return reject();
//		}
//		if (password.value != cpassword.value) {
	//			window.alert("Passwords Does Not Match Please Try Again.")
	//			name.focus();
	//			return reject();
//		}

//		return resolve();
//	});
//}
