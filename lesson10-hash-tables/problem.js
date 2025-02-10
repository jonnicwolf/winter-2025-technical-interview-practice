/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
const twoSum = (nums, target) => {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const otherVal = target - num;

    if (numsMap.has(otherVal)) return [numsMap.get(otherVal), i];

    numsMap.set(num, i);
  };
};


// console.log(twoSum([1, -2, 2, 3, -3, 3, 3],2))
const result = twoSum([1, -2, 2, 3, -3, 3, 3],2)
console.log(result)
console.log(twoSum([1, 2, 2, 3, 3, 3],3))
console.log(twoSum([1, -2, 2, 3, -3, 3, 3],1))

module.exports = twoSum;
