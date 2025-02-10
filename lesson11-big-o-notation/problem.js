/**
 * Problem: Implement a function that determines if a given year is a leap year. A leap year is a year that is divisible by 4, but not divisible by 100, unless it is divisible by 400. For example, 2000 is a leap year, but 1900 is not.
 * This should ideally run in O(1) time.
 */

function isLeapYear(year) {
  // TODO: Implement the function
  if (
    year % 4 === 0 &&
    year % 100 !== 0 ||
    year % 400 === 0
  ) return true
  return false
};
// function isLeapYear(year) {
//   // TODO: Implement the function
//   return new Date(year, 1, 29).getDate() === 29;
// };

console.log(isLeapYear(2000)); // Expected output: true
console.log(isLeapYear(1900)); // Expected output: false
console.log(isLeapYear(2024)); // Expected output: true
console.log(isLeapYear(2021)); // Expected output: false
console.log(isLeapYear(1600)); // Expected output: true
console.log(isLeapYear(1700)); // Expected output: false
console.log(isLeapYear(1800)); // Expected output: false
console.log(isLeapYear(2100)); // Expected output: false
module.exports = isLeapYear;
