// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate password
function generatePassword() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  //var length = 8,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
}

// const pwLength = window.prompt("How many characters would you like your password to be?")
// if(pwLength < 8 || pwLength > 128) {
//   alert('Please select a valid character length!');
// }else {
//   var upper = confirm('Would you like to use Uppercase characters?');
//   var lower = confirm('Would you like to use lowercase characters?');
//   var numeric = confirrm('Would you like to use numeric characters?');
//   var special = confirm('Would you like to use special characters?');
// }

// let allChars ='';

// if (upper) {
//   allChars +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// }

// if (lower) {
//   allChars += "abcdefghijklmnopqrstuvwxyz"
// }

// if (numeric) {
//   allChars += "0123456789"
// }
// if (special) {
//   allChars += "@%+\/'!#$^?;,)({}[]`-_.";
// }

// if(upper === false && lower === false && numeric  === false && special === false) {
  //alert('Please select valid password parameters!');
// }

//console.log('allChars:',allChars)
//var outputString ="";
 //for (var i =0; i < pwLength; i++) {
  //outputString += allChars.charAt(Math.floor(Math.random() * allChars.length));
//console.log(outputstring)
  
//}
 //return outputString;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
