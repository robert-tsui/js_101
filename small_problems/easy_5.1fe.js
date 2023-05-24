function dms(num) {
  if (num > 360) {
    num = num % 360;
  } else if (num < 0 && num > -360) {
    num = num + 360;
  } else if (num < -360) {
    num = num + 720;
  }
  let degrees = Math.floor(num);
  let minutes = Math.floor((num % 1) * 60);
  let seconds = Math.floor((((num % 1) * 60) % 1) * 60);
  return `${degrees}°${minutes}'${seconds}"`;
}

// console.log(dms(30)); // 30°00'00"
// console.log(dms(76.73)); // 76°43'48"
// console.log(dms(254.6)); // 254°35'59"
// console.log(dms(93.034773)); // 93°02'05"
// console.log(dms(0)); // 0°00'00"
// console.log(dms(360)); // 360°00'00" or 0°00'00"

console.log(dms(-1)); // 359°00'00"
console.log(dms(400)); // 40°00'00"
console.log(dms(-40)); // 320°00'00"
console.log(dms(-420)); // 300°00'00"
