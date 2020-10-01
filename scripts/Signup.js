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