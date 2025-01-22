/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (!s.length) return 0;
  let seen = {};
  let count = 0;
  const results = [];

  for (let i=0; i<s.length; i++) {
    const val = s[i];

    if (seen[val]) {
      results.push(count);
      count = 0;
      seen = {};
    } else {
        count++;
        seen[val] = val;

        if (i === s.length-1) results.push(count);
      }
  }
  return results.sort((a,b) => b - a)[0];
}

module.exports = lengthOfLongestSubstring;
