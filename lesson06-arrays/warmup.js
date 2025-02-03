// 1. Counting: create a function that prints out the numbers 1-10
function printTo10 () {
  let i = 1;
  do console.log(i++)
    while (i<=10);
};

// 2. Evens: create a function that prints out the even numbers 1-20
function printEvenTo20 () {
  let i = 0;
  do console.log(i+=2)
    while (i<20);
};

// 3. FizzBuzz: create a function that prints out the numbers 1-100. If the number is divisible by 3, print "Fizz" instead of the number. If the number is divisible by 5, print "Buzz" instead of the number. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
function fizzBuzz () {
  let i = 0;
  const fizz = (val) => val % 3 === 0 ? true : false;
  const buzz = (val) => val % 5 === 0 ? true : false;
  const fizzNBuzz = (val) => fizz(val) && buzz(val) ? true : false;

  do {
    i++;
    if (fizzNBuzz(i)) console.log('FizzBuzz')
    else if (fizz(i)) console.log('Fizz')
    else if (buzz(i)) console.log('Buzz')
    else console.log(i);
  } while (i<100);
};