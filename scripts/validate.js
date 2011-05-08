function validate() {
	// check for completion
	// check for email valid
	// if not valid/complete:
	   // append the "fail" class to the corresponding elements
	   // dynamically add content to the blcok element with an error message
	var formIsValid = false;
	
	// fields
	//var submission_date = document.order.submission_date;
	//var wedding_date = document.order.wedding_date; 
	var fname = document.order.fname;
	var lname = document.order.lname;
	var address1 = document.order.address1;
	var city = document.order.city;
	var state = document.order.state;
	var zip = document.order.zip;
	var primary_phone = document.order.primary_phone;
	var secondary_phone = document.order.secondary_phone;
	var item_type = document.order.item_type;
	//var where_buy_type = document.order.where_buy_type;
	var email = document.order.email;
	var email_confirm = document.order.email_confirm;
	// optional fields
	var address2 = document.order.address2;
	var comments = document.order.comments;
	var referral = document.order.referral;
	
	//var fieldsToValidate = [submission_date, fname, lname, address1, city, wedding_date, where_buy_type, state, zip, primary_phone, item_type, email];

	var fieldsToValidate = [fname, lname, address1, city, state, zip, primary_phone, item_type, email];
	
				
	if (checkForEmptyFields(fieldsToValidate) == 0) {
		if (emailValid(email.value)) {
			
			document.getElementById("email_error_message").innerHTML = "";
			document.getElementById('email_error_message').className = "";
			email.style.borderColor = '#575757';
			
			
			if (email.value == email_confirm.value) {
				
				
				formIsValid = true;
				
				
				document.getElementById("email_confirm_error_message").innerHTML = "";
				document.getElementById('email_confirm_error_message').className = "";
				email_confirm.style.borderColor = '#575757';
				
			} else {
				// display email not equal error
				document.getElementById("email_confirm_dd").className = "fail";
				email_confirm.style.borderColor = 'red';
				document.getElementById("email_confirm_error_message").innerHTML = "Does not match the email address above.";
			}
		} else {
			// display email not valid error
			document.getElementById("email_dd").className = "fail";
			email.style.borderColor = 'red';
			document.getElementById("email_error_message").innerHTML = "Email is not a valid format.";
		}
	} 
	
	
	if (formIsValid) {
		document.order.submit();
	}
	
	
	
	return false;
}

function checkForEmptyFields(fields) {
	var numberOfEmptyFields = 0;
	var errorDisplay;
	var fieldBlock;
		// testing
	for (i = 0; i < fields.length; i++) {
	
		if (fields[i].value == "") {
			// If empty, change border color to red
			fields[i].style.borderColor = '#575757';
			// Change label color to red
			
			// increment empty fields count
			numberOfEmptyFields++	
		} else {
			// reset border color
			fields[i].style.borderColor = '#575757';
			// reset label color
		}
	}	
	return numberOfEmptyFields;
}

function emailValid(email) {
	var check = email;
 	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (reg.test(check)) {
	      return true;
	}
	return false;
}

