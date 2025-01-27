function reverseString(str) {
  let result = ''
  for (let i=str.length-1; i>0; i--) {
    result+=str[i]
  }
  return result;
};

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
  str = str.split(' ');
  const result = [];

  for (val of str) {
    let ans = ''
    ans+=val[0].toUpperCase()
    val = val.slice(1)
    result.push(ans+val)
  };

  return result.join(' ');
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  let result = 0;

  for (val of str) if (vowels[val]) result++ 

  return result
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
