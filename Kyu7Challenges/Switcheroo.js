/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
    let arr = x.split('')
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'a'){
        arr[i] = 'b'
      }else if(arr[i] === 'b'){
        arr[i] = 'a'
      }
    }
    
    return arr.join('')
  }