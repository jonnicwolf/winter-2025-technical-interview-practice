// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
const hasDuplicate = (nums) => {
  return new Set(nums).size !== nums.length
};

// Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
const countLetterOccurrences = (str1, str2) => {
  const unique_str1 = [new Set(str1)]
  const result = {}
  for (val in str2) {
    const test = unique_str1.includes(val)
    if (test && result[val]) result[val]++
    else result[val] = 1
  };

  return result;
};

// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums) => {
  const max = Math.max(...nums)
  const min = Math.min(...nums)

  return max - min;
};
