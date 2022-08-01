/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

function capitalize(s){
    let newArr = s.split('')
    let arr1 = []
    let arr2 = []
    
    for(let i =0; i < newArr.length; i++){
      if(i % 2 === 0){
        arr1.push(newArr[i].toUpperCase())
        arr2.push(newArr[i].toLowerCase())
      }else{
        arr1.push(newArr[i].toLowerCase())
        arr2.push(newArr[i].toUpperCase())
      }
    }
    
    
    
    return [arr1.join(''), arr2.join('')]
    
  };