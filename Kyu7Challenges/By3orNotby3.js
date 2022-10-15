/*
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator.
*/

function divisibleByThree(str){
    //   return str.split('').map(element => parseInt(element)).reduce((a,b) => a+b,0) % 3 === 0 ? true : false;
      
      return Number.isInteger(str.split('').map(element => parseInt(element)).reduce((a,b) => a+b,0)/3) ? true : false;
      
    //   let total = str.split('').map(element => parseInt(element)).reduce((a,b) => a+b,0)
    //   let divideThree = total/3
      
    //   if(Number.isInteger(divideThree)){
    //     return true;
    //   }else{
    //     return false;
    //   }
    }