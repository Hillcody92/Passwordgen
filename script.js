// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var CharUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var CharLowercase = "abcdefghijklmnopqrstuvwxyz";
var CharSpecialChar = "!@#$%^&*()-=+?.<>";
var CharNumbers = "0123456789";

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Length of Password?");
  alert("Number of characters:" +passwordLength);
  var passwordSpecial = confirm("Special characters? Okay for YES Cancel for No");
  alert("Special characters used")
  var passwordcase = confirm("Captial letters? Okay for Yes Cancel for No")
  alert("captial letters used")

  if (passwordSpecial === true && passwordcase === true) {
    var length = passwordLength,
     CharUppercase = CharSpecialChar
    passwordText = "";
    for (var i = 0, i = char.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * i));

    }
    return passwordText;
  } 
  else if (passwordSpecial === false && passwordcase === true) {
    var length = passwordLength,
      CharNumbers = CharUppercase
    passwordText = "";
    for (var i = 0, i = char.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * i));

    }
    return passwordText;
  }
  else if (passwordSpecial === false && passwordcase === false) {
    var length = passwordLength,
      CharLowercase = CharNumbers
    passwordText = "";
    for (var i = 0, i = char.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * i));
    }
    return passwordText;
  }
  else if (passwordSpecial === true && passwordcase === false) {
    var length = passwordLength,
      CharSpecialChar = CharLowercase
    passwordText = "";
    for (var i = 0, i = char.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * i));
    }
    return passwordText;
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

