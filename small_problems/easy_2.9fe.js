function hexadecimalToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    a: 10,
    B: 11,
    b: 11,
    C: 12,
    c: 12,
    D: 13,
    d: 13,
    E: 14,
    e: 14,
    F: 15,
    f: 15,
  };
  let newArr = str.split('').map((el) => DIGITS[el]);
  let value = 0;
  newArr.forEach((el) => (value = 16 * value + el));
  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871);
