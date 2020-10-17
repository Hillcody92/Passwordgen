// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()-=+?.<>";
var numbers = "0123456789";

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Length of Password?");
  alert("Number of characters:" +passwordLength);
  var passwordSpecial = confirm("Special characters? Okay for YES Cancel for No");
  var passwordcase = confirm("Captial letters? Okay for Yes Cancel for No")

  if (passwordSpecial === true && passwordcase === true) {
    var length = passwordLength,
     uppercase = specialChar
    passwordText = "";
    for (var i = 0, c = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * c));

    }
    return passwordText;
  } 
  else if (passwordSpecial === false && passwordcase === true) {
    var length = passwordLength,
      numbers = uppercase
    passwordText = "";
    for (var i = 0, c = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * c));

    }
    return passwordText;
  }
  else if (passwordSpecial === false && passwordcase === false) {
    var length = passwordLength,
      lowercase = numbers
    passwordText = "";
    for (var i = 0, c = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * c));
    }
    return passwordText;
  }
  else if (passwordSpecial === true && passwordcase === false) {
    var length = passwordLength,
      specialChar = lowercase
    passwordText = "";
    for (var i = 0, c = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * c));
    }
    return passwordText;
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

