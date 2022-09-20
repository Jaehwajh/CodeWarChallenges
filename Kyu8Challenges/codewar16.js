/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/
function opposite(number) {
    //your code here
    return number * -1
  }



/*
kyu 8
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/
function setAlarm(employed, vacation){
    if(employed == true && vacation == false){
      return true
    }else {
      return false
    }
  }




/*
Kyu 7
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
      
    if(Math.sqrt(sq) % 1 === 0) {
      return Math.pow(Math.sqrt(sq)+1,2)
    } else {
      return -1;
    }
  }