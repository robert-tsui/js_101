// student example

function padZeroes(number) {
  if (number < 10) {
    return '0' + String(number);
  }
  return String(number);
}

function timeOfDay2(deltaMinutes) {
  const MILLISECONDS_PER_MINUTE = 60000;
  const DAY_OF_WEEK_MAP = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  // Initialize a date object to our starting time of Sunday 00:00
  const baseDate = new Date('January 22, 2023 00:00:00');

  // convert baseDate to epoch milliseconds with valueOf method
  // and subtract milliseconds from that to get the new date.
  const newDate = new Date(
    baseDate.valueOf() + deltaMinutes * MILLISECONDS_PER_MINUTE
  );

  let dayOfWeek = DAY_OF_WEEK_MAP[newDate.getDay()];
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();

  return `${dayOfWeek} ${padZeroes(hours)}:${padZeroes(minutes)}`;
}

console.log(timeOfDay2(0));
console.log(timeOfDay2(-3));
console.log(timeOfDay2(35));
console.log(timeOfDay2(-1437));
console.log(timeOfDay2(3000));
console.log(timeOfDay2(800));
console.log(timeOfDay2(-4231));
