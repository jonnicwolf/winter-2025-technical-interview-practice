// 1. Given an array of integers return the largest number

// 2. Given an array of integers return the largest sum for two consecutive numbers
// input: [20,17,25] output: 42

function prefixSum (arr) {
  const prefix = [0]
  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[i] + arr[i])
  }
  return prefix
}

function getWindowSum (prefix, l, r) {
  return prefix[r+1] - prefix[l]
}

function findLargestSum (arr) {
  const prefix = prefixSum(arr)
  let max = -Infinity;

  for (let i=0; i<arr.length-1; i++){
    const sum = getWindowSum(prefix, i, i+1)
    max = Math.max(sum, max)
  }

  return max;
}

const arr = [1,3,0,7]

console.log(findLargestSum(arr))