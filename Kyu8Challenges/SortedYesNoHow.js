/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    if(array.every((x,i)=>i==0||array[i]<=array[i-1])){
      return 'yes, descending'
    }else if(array.every((x,i)=>i==0||array[i]>=array[i-1])){
      return 'yes, ascending'
    }else{
      return 'no'
    }
  }