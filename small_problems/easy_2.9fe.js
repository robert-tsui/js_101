// solution #1

// function hexadecimalToInteger(str) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     A: 10,
//     a: 10,
//     B: 11,
//     b: 11,
//     C: 12,
//     c: 12,
//     D: 13,
//     d: 13,
//     E: 14,
//     e: 14,
//     F: 15,
//     f: 15,
//   };
//   let newArr = str.split('').map((el) => DIGITS[el]);
//   let value = 0;
//   newArr.forEach((el) => (value = 16 * value + el));
//   return value;
// }

// solution #2

function hexadecimalToInteger(hex_string) {
  const HEX_DIGITS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ]; // array instead of an object literal

  hex_string = hex_string.toUpperCase(); // input letters will be uppercased

  let scale = hex_string.length; // length of input string
  let digits_from_string = hex_string.split(''); // divides string into substrings
  console.log(`digits_from_string: ${digits_from_string}`);
  return digits_from_string.reduce(function (accumulator, element) {
    // reducing array of substrings into one number
    let hex_value = HEX_DIGITS.indexOf(element); // assign index of HEX_DIGITS element associated with element of digits_from_string array
    console.log(`hex_value: ${hex_value}`);
    return accumulator + hex_value * 16 ** (scale -= 1);
    // 0 + 4 * 16 ** 3
    // 16384 + 13 * 16 ** 2
    // 19712 + 9 * 16 ** 1
    // 19856 + 15 * 16 ** 0
    // return 19871
  }, 0); //this zero sets the initial value for accumulator to zero
}

console.log(hexadecimalToInteger('4D9f') === 19871);
