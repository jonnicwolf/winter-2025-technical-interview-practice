/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;

  str = str.toLowerCase();
  const result = [];

  for (let i=0; i<str.length; i++) {
    const a_code = 97;
    const z_code = 122;
    
    if (str[i].charCodeAt() >= a_code &&
        str[i].charCodeAt() <= z_code
    )
    {
      result.push(str[i]);
    }
  }

  const test_1 = result.join('');
  const test_2 = result.reverse().join('');

  return test_1 === test_2;
}

module.exports = isPalindrome;
