const conditionalSum = (values, conditions) => {
  function isEven(number) { //helper function that determines if number isEven
    if (number % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }

  function sumOfArray(array) { //helper function qui retourne la somme d'un array
    let sum = 0;
    for (index = 0; index < array.length; index ++) {
      sum += array[index];
    }
    return sum;
  }  

  let conditionalArray = [];
  for (i = 0; i < values.length; i ++) {
    if (isEven(values[i]) === conditions) {
      conditionalArray.push(values[i]);
    } 
  }

  return sumOfArray(conditionalArray);

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
