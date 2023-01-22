// Assignment Code
var generateBtn = document.querySelector("#generate");

function containsOnlyNumbers(x) {
  return /^\d+$/.test(x);
}

function generatePassword(){
  let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let Lowercase = "abcdefghijkomnopqrstuvwxyz"
  let Numeric = "0123456789"
  let Special ="!@#$%^&*()_+<>?[]" ;
  let password = "";
  let characters = "";
 

  do {
    var NumberOfCharacters_str = window.prompt("select password size between 8 and 128 characters");

    if(!NumberOfCharacters_str){
      return;
    }

    if(containsOnlyNumbers(NumberOfCharacters_str)===false){
      var EnterNumber = window.confirm("please enter numbers");
      if(!EnterNumber){
        return;
      }
    }else if (Number(NumberOfCharacters_str)<8 || Number(NumberOfCharacters_str)>128){
      var NumberLength = window.confirm("password size must be between 8 and 128 characters");
      if(!NumberLength){
        return;
      }
    }else{
      break;
    }
  } while (true);
  
  var checkLowercase = window.confirm("Would you like to include lowercase characters?");
  if(checkLowercase){
    characters = Lowercase;
  }

  var checkUppercase = window.confirm("Would you like to include uppercase characters?");
  if(checkUppercase){
    characters = characters + Uppercase;
  }
  
  var checkNumeric= window.confirm("Would you like to include numeric characters?");
  if(checkNumeric){
    characters = characters + Numeric;
  }

  var checkSpecial = window.confirm("Would you like to include special characters?");
  if(checkSpecial){
    characters = characters + Special;
  }

 
  for (let i=0; i<Number(NumberOfCharacters_str); i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));    
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);