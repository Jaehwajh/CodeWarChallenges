// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    const array = x.split('');
    const reverseArray = array.reverse();
    const reverseString = reverseArray.join('')
    
    if(x.toLowerCase() === reverseString.toLowerCase()){
      return true;
    }else{
      return false;
    }
  }