let userInput = prompt("Enter a number that is at least 3 digits: ");
// This stores the second value of the userInput's number.
let secondDigit = userInput[1]; 

//length-1 ensures the index count ends at the last character of the string 
let lastDigit = userInput[userInput.length-1];  
let swapped = "";                               

for (i = 0; i < userInput.length; i++) {      
    if( i === 1 ){
        // This puts the userInput's last value into the 2nd position.
        swapped = swapped + lastDigit;    
    }else if (i === userInput.length-1) {
        // This puts the original 2nd value into the last position.
        swapped = swapped + secondDigit;  
    } else {
        swapped = swapped + userInput[i]; 
    }
}
// Print results to console and as alert.
alert(`You entered: ${userInput}. The swapped number is: ${swapped}.`);
console.log(`You entered: ${userInput}. The swapped number is: ${swapped}.`); 


