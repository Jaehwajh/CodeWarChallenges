// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    //your code here
    
    let result = ''
    
    for(let i = 1; i <= num; i++){
      result += `${i} sheep...`
    }
    
    return result
  }



/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b){
    //your code here
    return b.toString('')
  }




/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

function hoopCount (n) {
    //your code goes here
   if(n >= 10){
     return "Great, now move on to tricks"
   }else {
     return "Keep at it until you get it"
   }
 }



//  You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

//  The returned value must be a string, and have "***" between each of its letters.
 
//  You should not remove or add elements from/to the array.


function twoSort(s) {
    let items = s.sort()
    
    return items[0].split('').join('***')
  }