function formValidation() {

    clearErrors();
    var result = firstNameValidation();         
        result = lastNameValidation() && result; 
        result = passwordValidation() && result; 
        result = usernameValidation() && result; 
        result = checkEducationStatus() && result; 
        result = ageValidation() && result;      

    return result;

  }


function firstNameValidation() {

    var FirstNameMessageRules="<p> - Meaningful first names contain alphabetic characters with a capital first letter. </p>";

    var FirstName = document.querySelector("#firstName").value;
    FirstName = FirstName.trim();
    var FirstNameLength = FirstName.length;

    if (FirstNameLength == 0) {
      showErrors("<p><mark>FirstName</mark><br /> - This field is mandatory. <br />" + FirstNameMessageRules + "</p>");
      document.querySelector('#firstName').focus();
      return false;
    }

    if (FirstName.charAt(0) === FirstName.charAt(0).toLowerCase()) {
      showErrors("<p><mark>FirstName</mark><br /> - Please make your first letter a capital. <br />" + FirstNameMessageRules + "</p>")
      document.querySelector('#firstName').focus();
      return false;
    }

    var count = 0;
    FirstName = FirstName.toUpperCase();
    for (var i=0;i<FirstNameLength;i++ ) {
      if (! ( (FirstName.charCodeAt(i) > 64) && (FirstName.charCodeAt(i) < 91) ) ) {
       count++;
       break;
      }
    }

    if(count) {
      showErrors("<p><mark>FirstName</mark><br /> - Alphabetic characters only. <br />" + FirstNameMessageRules + "</p>");
      document.querySelector('#firstName').focus();
      return false;
    }

   return true;

}


function lastNameValidation() {

  var LastNameMessageRules="<p> - Meaningful last names contain alphabetic characters with a capital first letter.</p>";

  var LastName = document.querySelector("#LastName").value;
  LastName = LastName.trim();
  var LastNameLength = LastName.length;

  if (LastNameLength == 0) {
    showErrors("<p><mark>LastName</mark><br /> - This field is mandatory.<br />" + LastNameMessageRules + "</p>");
    document.querySelector('#LastName').focus();
    return false;
  }

  if (LastName.charAt(0) === LastName.charAt(0).toLowerCase()) {
    showErrors("<p><mark>LastName</mark><br /> - Please make your first letter a capital.<br />" + LastNameMessageRules + "</p>")
    document.querySelector('#LastName').focus();
    return false;
  }

  var countNonAlpha = 0;
  LastName = LastName.toUpperCase();
  for (var i=0;i<LastNameLength;i++ ) {
    if (! ( (LastName.charCodeAt(i) > 64) && (LastName.charCodeAt(i) < 91) ) ) {
     countNonAlpha++;
     break;
    }
  }

  if(countNonAlpha) {
    showErrors("<p><mark>LastName</mark><br /> - Alphabetic characters only.<br />" + LastNameMessageRules + "</p>");
    document.querySelector('#LastName').focus();
    return false;
  }

 return true;
}

//A5 working?? 
function passwordValidation() {

  var PasswordMessageRules ="<p> - Please enter a minimum of 6 alphabetic characters with an uppercase first letter and a digit.</p>";

  var Password = document.querySelector("#Password").value;
  Password = Password.trim();
  var PasswordLength = Password.length;

  var ConfirmationPassword = document.querySelector("#ConfirmPassword").value;
  ConfirmationPassword = ConfirmationPassword.trim();
  var ConfirmPasswordLength = ConfirmationPassword.length;

  if (PasswordLength < 6) {
    showErrors("<p><mark>Password</mark><br /> - This field is mandatory.<br />" + PasswordMessageRules + "</p>");
    document.querySelector('#Password').focus();
    return false;
  }

  var count1 = 0;
  var count2 = 0;
  for (i = 0; i < PasswordLength; i++) {
    if (Password.charCodeAt(i) >= 65 && Password.charCodeAt(i) <= 90) {
      count1 += 1;
    }
    if (Password.charCodeAt(i) >= 48 && Password.charCodeAt(i) <= 57) {
      count2 += 1;
    }
  }

  if (count1 == 0) {
    showErrors("<p><mark>Password</mark><br /> - Password must have at least 1 uppercase letter.<br />" + PasswordMessageRules + "</p>");
    document.querySelector('#Password').focus();
    return false;
  }

  if (count2 == 0) {
    showErrors("<p><mark>Password</mark><br /> - Password must have at least 1 digit.<br />" + PasswordMessageRules + "</p>");
    document.querySelector('#Password').focus();
    return false;
  }

  if (!((Password.charCodeAt(0) >= 65 && Password.charCodeAt(0) <= 90) ||
      (Password.charCodeAt(0) >= 97 && Password.charCodeAt(0) <= 122))) {
        showErrors("<p><mark>Password</mark><br /> - Password should begin with alphabetic character.<br />" + PasswordMessageRules + "</p>");
        document.querySelector('#Password').focus();
        return false;
  }

  if (ConfirmPasswordLength == 0) {
    showErrors("<p><mark>ConfirmPassword</mark><br /> - Mandatory field. <br /></p>");
    document.querySelector('#ConfirmPassword').focus();
    return false;
  }

  if(Password != ConfirmationPassword){
    showErrors("<p><mark>ConfirmPassword</mark><br /> - The two password fields are not a match.<br /></p>");
    document.querySelector('#ConfirmPassword').focus();
    return false;
  }

  return true;
}


function usernameValidation() {

  var UsernameMessageRules ="<p> - Minimum of 6 alphabetic characters with a beginning alphabetic character.</p>";

  var username = document.querySelector("#Username").value;
  username = username.trim();
  var usernameLength = username.length;

    if (usernameLength < 6) {
      showErrors("<p><mark>Username</mark><br /> - At least six characters.<br />" + UsernameMessageRules + "</p>");
      document.querySelector('#Username').focus();
      return false;
    }

    if (!((username.charCodeAt(0) >= 65 && username.charCodeAt(0) <= 90) ||
        (username.charCodeAt(0) >= 97 && username.charCodeAt(0) <= 122))) {

      showErrors("<p><mark>Username</mark><br /> - Should begin with an alphabetic character.<br />" + UsernameMessageRules + "</p>");
      document.querySelector('#Username').focus();
      return false;
    }

  return true;
}


function checkEducationStatus() {
  var radioNumber = document.signup.educationStatus.length;
  var oneChecked = false;

  for (var i = 0; i < radioNumber; i++) {
    if (document.signup.educationStatus[i].checked == true) {
      oneChecked = true;
    }
  }

  if (!oneChecked) {
     showErrors("<p><mark>Education Status</mark><br /> - Please select one.<br /></p>");
     return false;
  }

  return true;
}



function ageValidation() {

  var age = document.querySelector("#Age").value;
  age = age.trim();
  var AgeLength = age.length;

  if(AgeLength == 0){
    showErrors("<p><mark>Age</mark><br /> - Mandatory entry. <br /></p>");
    document.querySelector('#Age').focus();
    return false;
  }

  if (age < 18 || age > 60){
    showErrors("<p><mark>Age</mark><br /> - Age must between 18-60. <br /></p>");
    document.querySelector('#Age').focus();
    return false;
  }
   return true;
}



function showErrors(messages) {
  document.querySelector('#errors').innerHTML += messages;
}


function clearErrors() {
  document.querySelector('#errors').innerHTML = "";
 }