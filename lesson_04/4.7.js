/*
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

## understand the problem
- explicit rules
  - building blocks are used to build a structure 
  - a block is a cube
  - a structure is layered but a valid structure can be just one layer
    - top layer is single block 
    - a block in an upper layer must be supported by four blocks in a lower layer
    - a block in a lower layer can support more than one block in an upper layer
    - you can't leave gaps between blocks
  - i: integer (number of cubes)
  - o: integer (number of cubes)
- implicit rules
  - a valid structure has at least 1 layer of building blocks
  - each layer times itself equals the number of blocks in that layer
  - the number of layers equals the number of blocks in one side of that layer
  - the number of blocks supporting more than 1 block in a layer increments by 1 starting with layer 2
- questions:
  - how are the four blocks positioned underneath a block?
    - one block is centered above 4 blocks positioned in a 2x2 square
  - how do you define a gap between blocks? is a gap defined by horizontally stacked blocks that aren't bounded at 2 vertices?
    - a gap is defined by blocks not bounded by 2 vertices in a layer
  - if a block in a lower layer can support more than one block in an upper layer, does that mean multiple, vertically stacked layers? 
    - no, the assumption is that a structure is formed by at least 1 layer so a lower layer block supporting more than one block must mean just supporting more than one block in the next layer above
- visual example
   - 
  - -
 - - -
- - - - 

## examples and test cases 

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true 
console.log(calculateLeftoverBlocks(2) === 1); //true 
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

- 1 block or 1 layer can make a valid structure
- the minimum sum of the squares of layers greater than the input integer minus the input integer is equal to the number of leftover blocks
- layer two can only have 4 blocks
- zero layers have zero blocks 

## data structures
- number

## algorithm

1. build the structure one layer at a time until you cannot use the remaining blocks to continue building the next valid layer
2. count how many blocks you have left

1. start with: 
  - a count of how many blocks you have remaining equal to the input
  - a count of how many blocks are required to build a valid layer
  - a count of the current layer equal to 0
2. get the number for the value of the next layer to build by adding 1 to the current layer
3. using the number for the next layer, calculate the number of blocks required by multiplying the number by itself
4. determine if the number of blocks remaining is greater than or equal to the number of blocks required to build the layer
5. if it is:
  - subtract the number of blocks required from the number of blocks remaining
  - increment the current layer by 1
  - repeat step 2
  if it isn't:
  - return the number of blocks remaining
## code implementation

- use a `while` loop? 
  - for the condition, determine if remaining blocks is greater than or equal to required blocks

- calculating the blocks for the next layer, use `**` operator?
  - e.g. `(currentLayer + 1)**2`

*/

function calculateLeftoverBlocks(input) {
  let remainingBlocks = input;
  let currentLayer = 0;
  let requiredBlocks = (currentLayer + 1) ** 2;

  while (remainingBlocks >= requiredBlocks) {
    remainingBlocks = remainingBlocks - requiredBlocks;
    currentLayer++;
    requiredBlocks = (currentLayer + 1) ** 2;
    console.log({ remainingBlocks }, { currentLayer }, { requiredBlocks });
  }

  return remainingBlocks;
}

// console.log(calculateLeftoverBlocks(0) === 0); //true
// console.log(calculateLeftoverBlocks(1) === 0); //true
// console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
// console.log(calculateLeftoverBlocks(5) === 0); //true
// console.log(calculateLeftoverBlocks(6) === 1); //true
// console.log(calculateLeftoverBlocks(14) === 0); //true
