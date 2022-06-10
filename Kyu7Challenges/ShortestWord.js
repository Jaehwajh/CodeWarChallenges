/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/


function findShort(s){
    let newArr = s.split(' ')
    
    let short = newArr[0].length
  
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i].length < short){
        short = newArr[i].length
      }
    }
    return short
  }