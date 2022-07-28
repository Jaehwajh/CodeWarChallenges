/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

function uniTotal (string) {
    // total up dem unicodes!    
      let newArr = string.split('')
      
      if(string === ""){
        return 0;
      }else{
        return newArr.reduce((a,ac) => a + ac.charCodeAt(), 0)
        }
    }