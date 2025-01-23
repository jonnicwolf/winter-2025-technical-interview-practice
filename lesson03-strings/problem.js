/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10, 13]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  // TODO: Implement the string matching algorithm
  // Return an array of indices where the pattern is found in the text
  // If the pattern is not found, return an empty array
  
  if (typeof text !== 'string' ||
      typeof pattern !== 'string'
  ) throw new Error('Argument is not a string.')
  if (text === '') return [];

  const result = [];
  for (let i=0; i<text.length;i++) {
    let val = text[i];
    if (val === pattern[0]) {
      const test = [...pattern].every((c,idx) => c === text[i+idx]);
      if (test) result.push(i);
    };
  };

  return result;
};

module.exports = stringMatching;
