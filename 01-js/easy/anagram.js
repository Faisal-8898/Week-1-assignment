/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const aa= str1.replace(/\s/g, '').toLowerCase();
  const bb= str2.replace(/\s/g, '').toLowerCase();
  const a = aa.split('').sort().join('');
  const b = bb.split('').sort().join('');
  return a == b;
}

module.exports = isAnagram;
console.log(isAnagram("hello", "olleh"));
