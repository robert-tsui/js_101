// What if the person has one or more middle names?
// Refactor the current solution so that it can accommodate this;
// the middle names should be listed after the first name:

function swapName(str) {
  let strArr = str.split(' ');
  let lastName = strArr[strArr.length - 1];
  let firstName = strArr[0];
  let middleName = strArr.slice(1, strArr.length - 1).join(' ');
  return `${lastName}, ${firstName} ${middleName}`;
}

console.log(swapName('Joe Roberts')); // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals')); // "Ragvals, Karl Oskar Henriksson"
