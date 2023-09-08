/*

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.

/*
Understanding the [P]roblem
===========================
Input: number

Output: array

Rules:
- function is given one argument, the total number of switches
- output array contains the lights that are turned on after `count` passes
- the first switch is number 1; there is no switch 0
- `count` = number of switches
- `count` represents the number of passes
- `count` represents the multiple corresponding to turned off lights on each pass
- all lights are initially turned off
- on first pass, lights are turned off in multiples of 1 (every light)
- on second pass, lights are turned off in multiples of 2
  - that means odd number lights are turned on
- on third pass, lights are turned off in multiples of 3

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

for each iterative round turn off the lights for each multiple of round; add remaining lights to array

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

START 

INIT `switchBank` = []
INIT `resultArr` = []
INIT `round` = 1
INIT `count` = `switches`

FOR loop each `round` until `count` is reached
  FOR loop each `toggle` switch until `count` is reached
    SET `multiple` = `toggle` * `round`
    IF `multiple` < `count`
      SET `switchBank` = true at the `multiple` in current `round`
      IF current switch at `multiple` in `switchBank` is already assigned to true, reassign to false 
  INCREMENT `toggle` += 1
INCREMENT `round` += 1

FOR loop switches in `switchBank`
  IF element is true, append index to `resultArr`

RETURN `resultArr`

END
*/

// function lightsOn(switches) {
//   let switchBank = [];
//   let resultArr = [];
//   let count = switches;

//   for (let round = 1; round <= count; round += 1) {
//     for (let toggle = 1; toggle <= count; toggle += 1) {
//       let multiple = toggle * round;
//       if (multiple <= count) {
//         switchBank[multiple] === true
//           ? (switchBank[multiple] = false)
//           : (switchBank[multiple] = true);
//       }
//     }
//   }

//   for (let idx = 0; idx < switchBank.length; idx += 1) {
//     if (switchBank[idx] === true) {
//       resultArr.push(idx);
//     }
//   }

//   return resultArr;
// }

// LS solution

// function lightsOn(count) {
//   let lights = initializeLights(count);
//   console.log(`lights: `, lights);

//   for (let switchNum = 1; switchNum <= count; switchNum += 1) {
//     // rounds: 1..count
//     lights = toggleLights(lights, switchNum);
//   }

//   let result = [];
//   for (let idx = 0; idx < count; idx += 1) {
//     // indices: 0..count-1
//     if (lights[idx]) {
//       result.push(idx + 1);
//     }
//   }

//   return result;
// }

// function initializeLights(count) {
//   let lights = [];

//   for (let switchNum = 0; switchNum < count; switchNum += 1) {
//     lights.push(false);
//   }

//   return lights;
// }

// function toggleLights(lights, round) {
//   console.log(`round: `, round);
//   let statusOfLights = lights.map((light, index) => {
//     // console.log(`index: `, index);
//     // console.log(`light: `, light);
//     // let remainder = (index + 1) % round;
//     // console.log(`remainder: `, remainder);
//     // let status = (index + 1) % round === 0 ? !light : light;
//     // console.log(`status: `, status);
//     return (index + 1) % round === 0 ? !light : light;
//   });
//   // console.log(`statusOfLights: `, statusOfLights);
//   console.log(statusOfLights);
//   return statusOfLights;
// }

function lightsOn(switches) {
  let result = [];
  for (let num = 1; num * num <= switches; num += 1) {
    result.push(num * num);
  }

  return result;
}

console.log(lightsOn(17));
// console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
