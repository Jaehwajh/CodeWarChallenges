/*
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.
*/

function validateCode (code) {
    //your code here
      let newCode = code.toString()
      let test = /^[123]/
      return test.test(newCode)
    }