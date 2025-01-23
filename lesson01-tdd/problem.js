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
  if (typeof str !== 'string') throw new Error("Argument is not a string");

  function removeNonAlphaNums (str) {
    str = str.toLowerCase();
    let result = '';
    for (let i=0; i<str.length; i++) {
      const a_code = 97;
      const z_code = 122;
      
      if (str[i].charCodeAt() >= a_code &&
          str[i].charCodeAt() <= z_code )
      {
        result+=(str[i]);
      }
    }
    return result;
  };

  str = removeNonAlphaNums(str);

  for (let x=0, y=str.length-1; x<y; x++, y--) {
    if (str[x] !== str[y]) return false
  }
  return true;
};

module.exports = isPalindrome;
