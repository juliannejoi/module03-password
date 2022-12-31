// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var specialCharacters = "!@#$%^&()*"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var finalPassword = ""
  var size = prompt("pick password size 8 to 128 characters")
  if (size >= 8 && size <= 128) {
    var checkLowercase = confirm("Would you like to include lowercase characters?")
    var checkUppercase = confirm("Would you like to use Uppercase characters?")
    var checkNumeric = confirm("Would you like to use numeric characters?")
    var checkSpecialCharacters = confirm("Would you like to use special characters !@#$%^&()*?")
    if (checkLowercase === true) {
      var position = Math.floor(Math.random() * 26)
      finalPassword = finalPassword + lowercase[position]
    }
    if (checkUppercase === true) {
      var position = Math.floor(Math.random() * 26)
      finalPassword = finalPassword + uppercase[position]

    }
    if (checkNumeric === true) {
      var position = Math.floor(Math.random() * 10)
      finalPassword = finalPassword + numeric[position]

    }
    if (checkSpecialCharacters === true) {
      var position = Math.floor(Math.random() * 10)
      finalPassword = finalPassword + specialCharacters[position]

    }
  }
  else {
    alert("password must be within 8 to 128 characters")
  }
  return finalPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
