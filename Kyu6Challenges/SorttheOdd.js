/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
    // Return a sorted array.
    
  //   Creates/filters out original array with only odd number elements in ascending order
    let sort = array.filter(element => element % 2).sort((a,b) => a-b)
    
  //   Return a new array with a ternary function where if element is even
    return array.map(element => element%2 ? sort.shift() : element)
  }