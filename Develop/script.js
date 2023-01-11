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
      scheck = true;
    }
    else{
      scheck = false;
    }
  }

  //loops for each result
  //first case if all is true
  if((lcheck === true && ucheck === true) && (ncheck === true && scheck === true) ){
    for(let x = 0; x <= lenPass-1;x++){
      //switch case that will randomize which character is picked
      switch(Math.floor(Math.random()*4)){
        //lower
        case 0:
          result += alpha[Math.floor(Math.random()*alpha.length)];
          break;
        //upper
        case 1:
          result += alpha[Math.floor(Math.random()*alpha.length)].toUpperCase();
          break;
        //number
        case 2:
          result += num[Math.floor(Math.random()*num.length)];
          break;
        //special
        case 3:
          result += specs[Math.floor(Math.random()*specs.length)];
          break;
          

      }
    }
  }
  //num and special are true
  else if((lcheck === false && ucheck === false) && (ncheck === true && scheck === true)){
    switch(Math.floor(Math.random()*2)){
      //number
      case 0:
        result += num[Math.floor(Math.random()*num.length)];
        break;
      //special
      case 1:
        result += specs[Math.floor(Math.random()*specs.length)];
        break;
    }
  }
  //lower and upper are true
  else if((lcheck === true && ucheck === true) && (ncheck === false && scheck === false)){
    switch(Math.floor(Math.random()*2)){
      //lower
      case 0:
        result += alpha[Math.floor(Math.random()*num.length)];
        break;
      //upper
      case 1:
        result += alpha[Math.floor(Math.random()*specs.length)].toUpperCase();
        break;
    }
  }
  //lower, number, and special are true
  else if((lcheck === true || ucheck === false) && (ncheck === true && scheck === true)){
    switch(Math.floor(Math.random()*3)){
      //lower
      case 0:
        result += alpha[Math.floor(Math.random()*alpha.length)];
        break;
      //number
      case 1:
        result += num[Math.floor(Math.random()*num.length)];
        break;
      //special
      case 2:
        result += specs[Math.floor(Math.random()*specs.length)];
        break;
    }
  }
  //lower, upper, and number are true 
  else if((lcheck === true && ucheck === true) && (ncheck === true || scheck === false)){
    switch(Math.floor(Math.random()*3)){
      //lower
      case 0:
        result += alpha[Math.floor(Math.random()*alpha.length)];
        break;
      //upper
      case 1:
        result += alpha[Math.floor(Math.random()*alpha.length)].toUpperCase();
        break;
      //number
      case 2:
        result += num[Math.floor(Math.random()*num.length)];
        break;
    }
  }


  


  console.log(result);
  return result;
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
