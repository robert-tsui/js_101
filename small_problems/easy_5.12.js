// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function beforeMidnight(twentyFourHour) {
//   let hourStr = '';
//   for (let i = 0; i < 2; i++) {
//     hourStr = twentyFourHour[0] + twentyFourHour[1];
//   }
//   let minStr = '';
//   for (let i = 0; i < twentyFourHour.length; i++) {
//     minStr = twentyFourHour[3] + twentyFourHour[4];
//   }
//   let hoursToMinutes = Number(hourStr) * MINUTES_PER_HOUR;
//   let minutesToMinutes = Number(minStr);
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(twentyFourHour);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }

// function afterMidnight(twentyFourHour) {
//   let hourStr = '';
//   for (let i = 0; i < 2; i++) {
//     hourStr = twentyFourHour[0] + twentyFourHour[1];
//   }
//   let minStr = '';
//   for (let i = 0; i < twentyFourHour.length; i++) {
//     minStr = twentyFourHour[3] + twentyFourHour[4];
//   }
//   let hoursToMinutes = Number(hourStr) * MINUTES_PER_HOUR;
//   let minutesToMinutes = Number(minStr);
//   let deltaMinutes = (hoursToMinutes + minutesToMinutes) % MINUTES_PER_DAY;
//   return deltaMinutes;
// }

// LS solution

function afterMidnight(timeStr) {
  [hours, minutes] = timeStr.split(':').map((num) => Number(num));

  return (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
console.log(afterMidnight('24:00') === 0);
console.log(beforeMidnight('24:00') === 0);
