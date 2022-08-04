/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

function divCon(x){
    let num = [];
    let string = [];
    
    for(let i = 0; i < x.length; i++){
  
      if(typeof x[i] === "number"){
        num.push(x[i]);
      }else {
        string.push(parseInt(x[i]));
      }
    }
    
    let total = num.reduce((a,ac) => a + ac,0) - string.reduce((a,ac) => a + ac,0);
    
    return total;
  }