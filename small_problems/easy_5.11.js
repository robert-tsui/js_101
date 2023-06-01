// The time of day can be represented as the number of minutes before or after midnight.
// If the number of minutes is positive, the time is after midnight.
// If the number of minutes is negative, the time is before midnight.
// Write a function that takes a time using this minute-based format
// and returns the time of day in 24 hour format (hh:mm).
// Your function should work with any integer input.
// You may not use javascript's Date class methods.

/*
Understanding the [P]roblem
===========================
Input: number

Output: string

Rules: 
- if positive input number, it's the number of minutes after midnight
- if negative input number, it's the number of minutes before midnight


[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

console.log(timeOfDay(-3) === '23:57');

-3 => 60 - 3 => `23:57`
-61 => 60 - 61 `22:59` 

0 - 12:59 => AM
13 - 23:59 => PM

if input is pos, time of day is after midnight
if input is neg, time of day is before midnight

- 1440 minutes  = 24 hours
- let hours = Math.floor(x minutes / 60 min = y hours
- let min = x min % 60 min = z min
- if input > 1440 min < 1440 x 2 min => input - 1440 min
- if input > 1440 x 2 min < 1440 x 3 min => input - 1440 x 2 min

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// calculate the hours and minutes

// format the time format for 24 hour time (helper function)

// ensure at least 2 digits for the hour and minute indicators (helper function)
*/

function timeOfDay(deltaMinutes) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

  // check if `deltaMinutes` is neg or pos; reassign `deltaMinutes`
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  // convert `deltaMinutes` to hours and minutes
  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  // format the time format for 24 hour time (helper function)
  return `${timeFormat(hours, minutes)}`;
}

function leadingZeros(number) {
  return number < 10 ? `0${number}` : String(number);
}

function timeFormat(hours, minutes) {
  return `${leadingZeros(hours)}:${leadingZeros(minutes)}`;
}

console.log(timeOfDay(0) === '00:00');
console.log(timeOfDay(-3) === '23:57');
console.log(timeOfDay(35) === '00:35');
console.log(timeOfDay(-1437) === '00:03');
console.log(timeOfDay(3000) === '02:00');
console.log(timeOfDay(800) === '13:20');
console.log(timeOfDay(-4231) === '01:29');
