// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
// function checkLargestElement(nums) {
//   if (nums.length <= 1) return -1;
//   const maxIdx = nums.indexOf(Math.max(...nums));
//   const max = nums.splice(maxIdx,1);
//   const secondMax = Math.max(...nums);

//   return (max[0] / secondMax) >= 0.5 ? max[0] : -1
// };

// function checkLargestElement(nums) {
//   if (nums.length <= 1) return -1;
//   if (nums.every(num => num === nums[0])) return -1;
//   const max = Math.max(...nums)
//   if (!nums.every(num => {
//     if (num === max) return true;
//     return num <= max / 2;
//   })) return -1
//     else return max
// }

function checkLargestElement(nums) {
  if (nums.length <= 1) return -1;
  let [max, secondMax] = [-Infinity, -Infinity];

  for (val of nums) {
    if (val > max) {
      secondMax = max;
      max = val;
    } else if (val > secondMax) secondMax = val;
  }
  return secondMax === -Infinity || max / secondMax < 0.5 ? -1 : max;
};

module.exports = checkLargestElement;
