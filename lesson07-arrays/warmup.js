// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.
function sumArray (arr) {
  return arr.reduce((cur,val) => cur+val);
};

// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.
// Math.max?
function findMax (arr) {
  let result = 0;
  for (val of arr) if (val > result) result = val;
  return result;
};

// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a new array with the elements in reverse order.
function reverseArray (arr) {
  const result = [];

  for (let i=arr.length-1; i>=0; i--) {
    const val = arr[i];
    result.push(val);
  };

  return result;
};
