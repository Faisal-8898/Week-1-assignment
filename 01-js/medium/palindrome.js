/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str1) {
  const str = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(str);
  for(let i=0,j=str.length-1;i<str.legnth,j>=0;i++,j--){
    if(str[i]!=str[j]){
      console.log(str[i]);
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
console.log(isPalindrome("holla"));