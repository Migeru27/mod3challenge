// Assignment code here
function generatePassword(){
  //strings do get characters from 
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var specs = "!@#$%^&*()+-=_";
  var result = "";

  //boolean vars 
  var lcheck, ucheck, ncheck, scheck;
  
  //the prompts for the length of the password
  let lenPass = prompt("How long do you want the password to be? (8-128)");
  
  //prompts to include (or not) lowercase, uppercase, numeric, and/or special characters
  //lower 
  let lowCase = prompt("Do you want lowercase characters? (Y or N)" );
  if ((lowCase === 'Y' || lowCase === 'y') || (lowCase === 'N' || lowCase === 'n')){

    if(lowCase === 'Y' || lowCase === 'y'){
      lcheck = true;
    }
    else{
      lcheck = false;
    }

  }
  //upper
  let upCase = prompt("Do you want uppercase characters? (Y or N)");
  if((upCase === 'Y' || upCase === 'y') || (upCase === 'N' || upCase === 'n')){
    
    if(upCase === 'Y' || upCase === 'y'){
      ucheck = true;
    }
    else{
      ucheck = false;
    }
  }
  //numeric
  let numCase = prompt("Do you want the password to be numeric? (Y or N)");

  if((numCase === 'Y' || numCase === 'y') || (numCase === 'N' || numCase === 'n')){
    
    if(numCase === 'Y' || numCase === 'y'){
      ncheck = true;
    }
    else{
      ncheck = false;
    }
  }
  //special characeters
  let speCase = prompt("Do you want special chatracters? (Y or N)");

  if((speCase === 'Y' || speCase === 'y') || (speCase === 'N' || speCase === 'n')){
    
    if(speCase === 'Y' || speCase === 'y'){
      ucheck = true;
    }
    else{
      ucheck = false;
    }
  }

  //loops for each result 

if(lcheck === true ){
  for(let x = 0; x <= lenPass;x++){
    
    switch(Math.floor(Math.random()*3)){
      case 0:
        // this get a random value from the alpha array and adds onto the final password
        result += alpha[Math.floor(Math.random()*alpha.length)];
        break;
      case 1:
        result  += 
    }


  }
}


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
