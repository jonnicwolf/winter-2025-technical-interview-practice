// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

function prefixSum (arr) {
  const prefix = [0]; //pushing to arr is faster than updating int
  for (let i=0; i<arr.length; i++) {
    prefix.push(prefix[i] + arr[i]); // cumulative sum of each index
  };

  return prefix;
}

function getWindowSum (prefix, l, r) {
  return prefix[r+1] - prefix[l]; // use prefix sums to do simple subtraction instead of running over the arr each time
};

function maxSubArraySum(arr, subArrLength) {
  if (arr.length < subArrLength) return null; // check that k doesn't overun arr length

  const prefix = prefixSum(arr);
  let max = -Infinity; // cover negatives

  for (let i=0; i<=arr.length - subArrLength; i++) {
    const windowSum = getWindowSum(prefix, i, i + subArrLength - 1); // add i to subArrLength and minus 1 to be inclusive
    max = Math.max(max, windowSum);
  };

  return max;
};

console.log(maxSubArraySum([100,200,300,400], 2)) // 700
console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4))  // 39
console.log(maxSubArraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubArraySum([2,3], 3)) // null

module.exports = function maxsubArraySum(arr, subArrLength) {
  // your code here
};

