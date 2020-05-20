//Here is a function that rounds up time given in seconds, up to the nearest 5 minutes

function getTime(seconds) {

 //Firstly, check that the input is a number

 //If it's not, give an error message 

 if (typeof seconds != 'number') {
   return "Input is not valid. Please input a number of seconds only."
 }

 // Conditional statement: Check if input is more than or equal to 3600

 //Write two functions: one to handle an input that will convert to minutes only; another to handle an input that will convert to both hours and minutes/just hours;

//Function 1
// function roundNearestFiveMin(secs) {
//       let mins = secs / 60;
//       let m = mins + 2.5;
//       let n = m / 5;
//       let o = Math.round(n);
//       let roundedMin = o * 5;
//       let roundedSentence = roundedMin.toString() + " minutes";
//     return roundedSentence;
//   }

//Function 2
function roundNearestFiveHour(secs) {
      let convertedHours = secs / 3600;
    return convertedHours;
  }

return roundNearestFiveHour(seconds);

//Convert the value from function 1 into a string sentence which describes it as minutes;

//For function 2, take the remainder and convert into a string and concatenate that with minutes (variable b);
//For the hour number, convert that into a string and concatenante that with hours (variable a), variable a + variable b

//Return the result;

// if (seconds > 3599) {
//   return roundNearestFiveMin(seconds);
// } else if (seconds < 3600) {
//   return roundNearestFiveHour(seconds);
// }

 // If it is, then put it through x function
 // If it is not, then put it through y function
 

  //We are receiving time in seconds, and firstly we want to convert this to minutes

  //We result with the time in minutes and we want to round up to the nearest 5 minutes:

  //Given there is no in-built function in JS to round to a nearest specified minute AND to always round up, we have to create our own logic. This can be accessed through our own following function, ‘roundNearestFive’
  
  //We also need to handle scenarios where an input of '0' seconds won't round up to 5 minutes, but will return 0 minutes


// let rounded = roundNearestFive(seconds);

//Retreive the absolute number, rounded up to the nearest five

// //Now we want to translate this result into a string which describes it as a number of minutes:

// let roundedSentence = rounded.toString() + " minutes";


// return roundedSentence;
}

getTime(3700)