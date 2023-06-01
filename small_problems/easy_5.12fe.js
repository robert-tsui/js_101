// How would these methods change if you were allowed to use the Date class?

// split input string to a formatted date and save to a variable `newDate`
// use `getHours()` and `getMinutes()` methods on variable

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  const newDate = new Date(`June 1, 1983 ${timeStr}`);
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();

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
