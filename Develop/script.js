// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCodes = arrayForUpperLower(65, 90);
var lowercaseCodes = arrayForUpperLower(97, 122);
var numCodes = arrayForUpperLower(48, 57)
var symbolCodes = arrayForUpperLower(33, 47).concat(arrayForUpperLower(58, 64)).concat(arrayForUpperLower(91, 96)
).concat(arrayForUpperLower(123, 126));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let charCodes = lowercaseCodes;
var length = prompt("how long do you want your password? (Between 8 and 128 characters)")
  if(window.confirm("do you want uppercase letters?")) {
  charCodes = charCodes.concat (uppercaseCodes);
}
else {
  console.log("no")
}
if(window.confirm("do you want numbers?")) {
  charCodes = charCodes.concat (numCodes);
}
else {
  console.log("no")
}
if(window.confirm("do you want symbols?")) {
  charCodes = charCodes.concat (symbolCodes);
}
else {
  console.log("no")
}
var passwordChar = []
for (let i = 0; i < length; i++) {
  var character = charCodes[Math.floor(Math.random() * length)]
  passwordChar.push(String.fromCharCode(character))
  
}

  return passwordChar.join('')

}

function arrayForUpperLower(low, high) {
  const array= []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}