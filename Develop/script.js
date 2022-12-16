// Assignment code here
function generatePassword(){
  //strings do get characters from 
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var specs = "!@#$%^&*()+-=_";

  console.log(alpha[3]);

  //boolean vars 
  var lcheck, ucheck, scheck;
  
  //the prompts for the length of the password
  let lenPass = prompt("How long do you want the password to be? (8-128)");
  console.log(lenPass);
  //prompts to include (or not) lowercase, uppercase, numeric, and/or special characters
  //lower 
  let lowCase = prompt("Do you want lowercase characters? (Y or N)" );
  if ((lowCase == 'Y' || lowCase == 'y') ||(lowCase == 'N' || lowCase == 'n')){

    if(lowCase == 'Y' || lowCase == 'y'){
      lcheck = true;
    }
    else{
      lcheck = false;
    }

  }
  //upper
  let upCase = prompt("Do you want uppercase characters? (Y or N)");
  //numeric
  let numCase = prompt("Do you want the password to be numeric? (Y or N)");
  //special characeters
  let speCase = prompt("Do you want special chatracters? (Y or N)");

  for(let x = 0; x <= lenPass;x++){
    
    //


  }


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
