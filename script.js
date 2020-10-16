// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var charset2 = "abcdefghijklmnopqrstuvwxyz0123456789";
var charset3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*/?";
var charset4 = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*/?";

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Length of Password?");
  var passwordSpecial = confirm("Would you like your password to contain special characters? Okay for YES Cancel for'No'");
  var passwordcase = confirm("Would you like the password to have capital letter? Okay for 'YES' Cancel for 'No'")

  if (passwordSpecial === true && passwordcase === true) {
    var length = passwordLength,
      charset = charset3
    passwordText = "";
    for (var i = 0, l = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * l));

    }
    return passwordText;
  } 
  else if (passwordSpecial === false && passwordcase === true) {
    var length = passwordLength,
      charset = charset2
    passwordText = "";
    for (var i = 0, l = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * l));

    }
    return passwordText;
  }
  else if (passwordSpecial === false && passwordcase === false) {
    var length = passwordLength,
      charset2 = charset4
    passwordText = "";
    for (var i = 0, l = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * l));
    }
    return passwordText;
  }
  else if (passwordSpecial === true && passwordcase === false) {
    var length = passwordLength,
      charset2 = charset3
    passwordText = "";
    for (var i = 0, l = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * l));
    }
    return passwordText;
  }
}
generatePassword()


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

