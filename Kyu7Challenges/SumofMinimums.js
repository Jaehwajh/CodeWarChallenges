/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/

function sumOfMinimums(arr) {
    // your code here
    let newArr = []
    
    for(let i = 0; i < arr.length; i++){
      arr[i].sort((a,b) => a-b)
      newArr.push(arr[i].find(element => Math.min(element)))
    }
    return newArr.reduce((c,ac) => c + ac)
  }