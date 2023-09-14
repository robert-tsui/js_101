// Function call to random returns an array and the program attempts to concatenate the function calls together. However, the operator used is `+` which implicitly coerces the operands into strings and concatenates the strings together. When using the `join` method on strings, an error is produced because you cannot call `join` on a primitive data type.

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  console.log(`array: `, array);
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  console.log(`elements: `, elements);
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    console.log(`randomIndex: `, randomIndex);
    let randomElement = elements[randomIndex];
    console.log(`randomElement: `, randomElement);

    randomElements.push(randomElement);
    console.log(`randomElements: `, randomElements);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = [
  'rice',
  'green bell pepper',
  'mushrooms',
  'carrot',
  'kebab',
  'spinach',
  'soy bean sprouts',
  'mashed potatoes',
  'corn',
  'cucumber',
  'peas',
];

let spices = [
  'peri peri',
  'cinnamon',
  'nutmeg',
  'cardamom',
  'ground ginger',
  'poppy seed',
  'cumin',
];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective).concat(random(firstNoun), random(secondNoun));
console.log(`dishName: `, dishName);
let dish = random(ingredients, 3).concat(random(spices, 2), random(extras, 1));
console.log(`dish: `, dish);

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));
