/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
    // insert code here >.<
       let Numbers = arr.every(element => typeof element === 'number')
        if (!Numbers){
          return undefined
        }else{
          return arr.map(element => element ** 3).filter(element => element % 2 !== 0).reduce((a,b) => a + b,0)
        }
    }