//Here is a function that rounds up time given in seconds, up to the nearest 5 minutes

function getTime(seconds) {

 //Firstly, check that the input is a number. If it's not, give an error message 

 if (typeof seconds != 'number') {
   return "Input is not valid. Please input a number of seconds only."
 }

 // Conditional statement: Check if input is more than or equal to 3600. If less than, take the input through Function 1. If more than, start with putting input through Function 2.

 try {

 if (seconds < 3600) {
  return roundUpFiveMin(seconds);
} else if (seconds > 3599) { 
  return roundUpHour(seconds);
}

 //Write two functions: one to handle an input that will convert to minutes only; another to handle an input that will convert to both hours and minutes/just hours;

//Function 1 to translate seconds into minutes
function roundUpFiveMin(secs) {
      if (secs > 0) {
      let mins = secs / 60;
      let m = mins + 2.5;
      let n = m / 5;
      let o = Math.round(n);
      let roundedMin = o * 5;
      let roundedSentenceMin = roundedMin.toString() + " minutes";
    return roundedSentenceMin;
  } else {
    return secs + " minutes";
  }
}

//Function 2
function roundUpHour(secs) {
      if (secs > 7199) {
      let hours = secs / 3600;
      let exactHour = Math.round(hours);
      let remainingMinutes = hours - exactHour;
      let roundedSentenceHour = exactHour.toString() + " hours" + " and " + roundUpFiveMin(remainingMinutes);
      return roundedSentenceHour;
  } else if (secs > 3599 && secs < 7200) {
      let hours = secs / 3600;
      let exactHour = Math.round(hours);
      let remainingMinutes = hours - exactHour;
      let roundedSentenceHour = exactHour.toString() + " hour" + " and " + roundUpFiveMin(remainingMinutes);
      return roundedSentenceHour;
}
}
 }


catch(err) {
   return err.message;
 }

}

getTime(8000)