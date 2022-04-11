// Given a non-empty array of integers, 
// return the result of multiplying the values together in order. 
// Example:

function grow(x){
    return x.reduce((a,ac) => a * ac, 1)
   }