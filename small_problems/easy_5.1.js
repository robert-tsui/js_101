// Write a function that takes a floating point number representing an angle between 0 and 360 degrees
// and returns a string representing that angle in degrees, minutes, and seconds.
// You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds.
// There are 60 minutes in a degree, and 60 seconds in a minute.

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"

/*
Understanding the [P]roblem
===========================
Input: number

Output: string

Rules:
- input represents an angle between 0 and 360 degress
- output represents same angle in degrees (˚), minutes ('), and seconds (")
- 60 min in 1 degree
- 60 sec in 1 min

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

dms(76.73); // 76°43'48"

.73˚ * 60 min = 43.8 min => 43min

8/10 sec * 60 sec = 48sec

 

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

dms(76.73); // 76°43'48"

// floor the input number and assign to a variable `degrees`
// multiply the decimal by 60, floor it and assign its value to a variable `minutes`
// multiply the decimal by 60 and assign its value to a variable `seconds`
// return the numbers in string template literals
*/

function dms(num) {
  let degrees = Math.floor(num);
  let minutes = Math.floor((num % 1) * 60);
  let seconds = Math.floor((((num % 1) * 60) % 1) * 60);
  return `${degrees}°${minutes}'${seconds}"`;
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"

// degreesInt = 76.73 => 76
// minutes = 76.73 - 76 * 60 floored => 43.8 => 43
// seconds = (76.73 - 76 - (43 / 60)) * 360
