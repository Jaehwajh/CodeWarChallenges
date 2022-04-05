// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    // your code here
    const sum = array.reduce((a, ac) => a + ac);
    const average = sum/ array.length;
    
    return average;
  
  }