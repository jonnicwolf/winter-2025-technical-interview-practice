// 1. given a string with three characters, return the second character
function secondChar (str) {
  return str[1];
};
console.log(secondChar('woot'))
console.log(secondChar('fezz'))
console.log(secondChar('mcd'))

// 2. get the second and third char from a string. the string will always have atleast three characters

function second_third_char (str) {
  return [str[1], str[2]].join('')
}
console.log(second_third_char('cat'))
console.log(second_third_char('robbed'))
// 'cat' => 'at'
// 'robbed' => 'ob'

// 3. Given a word with 5 letters, return the second through 5th letter

function getSecondThroughFifthLetter (word){
  return word.slice(1);
};
console.log(getSecondThroughFifthLetter('amazon'))
console.log(getSecondThroughFifthLetter('apple'))
console.log(getSecondThroughFifthLetter('girl'))

// 4. given a string and a number called N, return the second through the Nth character
function getSecondThroughNthChar (word, n) {
  return word.slice(1,n);
};
console.log(getSecondThroughNthChar('schoolbus', 5))
console.log(getSecondThroughNthChar('telephone', 6))
// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is an array method

// 5. Given an array of booleans, return an arrray of only false elements

// [true, true, false, true , false] => [false, false]
function allFalseBools (arr) {
  return arr.map(val => val = false);
};
console.log(allFalseBools([true, true, false, true , false]))
// 6. given a string with two words, put ' the ' between the words and return the string

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

function addThe (str) {
  str = str.split(' ')
  str.splice(1,0,'the')
  return str.join(' ')
};
console.log(addThe('to beach'))
console.log(addThe('for real'))
console.log(addThe('jim john'))
console.log(addThe('to house'))

// 7.  given two numbers, price and discount, return the price after the discount is applied
function addDiscount (price, disc) {
  return price - (price * (disc/100));
}
console.log(addDiscount(100,15))
console.log(addDiscount(70,3))

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
