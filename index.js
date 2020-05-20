//Here is a function that rounds up time given in seconds, up to the nearest 5 minutes

function getTime(seconds) {

 //Firstly, check that the input is a number

 if (typeof seconds != 'number') {
   return "Input is not valid. Please input a number of seconds only."
 }

 //If it is, pass it through the function

 let result = roundNearestFive(seconds);
 return result;
 //If it's not, give an error message 

  //We are receiving time in seconds, and firstly we want to convert this to minutes



  // let minutes = seconds / 60;

  //We result with the time in minutes and we want to round up to the nearest 5 minutes:

  //Given there is no in-built function in JS to round to a nearest specified minute AND to always round up, we have to create our own logic. This can be accessed through our own following function, ‘roundNearestFive’
  
  //We also need to handle scenarios where an input of '0' seconds won't round up to 5 minutes, but will return 0 minutes

  function roundNearestFive(mins) {
    if (mins > 0) {
      let m = mins + 2.5;
      let n = m / 5;
      let o = Math.round(n);
      let roundedMin = o * 5;
    return roundedMin;
  }

}

//Retreive the absolute number, rounded up to the nearest five

// let rounded = roundNearestFive(minutes);

// //Now we want to translate this result into a string which describes it as a number of minutes:

// let roundedSentence = rounded.toString() + " minutes";


// return roundedSentence;
}

getTime(946)