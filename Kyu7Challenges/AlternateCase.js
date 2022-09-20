/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
    let newArr = s.split('')
    let arr = []
    
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i] === newArr[i].toUpperCase()){
        arr.push(newArr[i].toLowerCase())
      }else if(newArr[i] === newArr[i].toLowerCase()){
        arr.push(newArr[i].toUpperCase())
      }
    }
    
    return arr.join('')
  }