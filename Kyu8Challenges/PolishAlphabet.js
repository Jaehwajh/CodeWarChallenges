/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

function correctPolishLetters (string) {
    // your code
    let arr = string.split('')
    
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === 'ą'){
        arr[i] = 'a'
      }else if(arr[i] === 'ć'){
        arr[i] = 'c'
      }else if(arr[i] === 'ę'){
        arr[i] = 'e'
      }else if(arr[i] === 'ł'){
        arr[i] = 'l'
      }else if(arr[i] === 'ń'){
        arr[i] = 'n'
      }else if(arr[i] === 'ó'){
        arr[i] = 'o'
      }else if(arr[i] === 'ś'){
        arr[i] = 's'
      }else if(arr[i] === 'ź' || arr[i] === 'ż'){
        arr[i] = 'z'
      }
    }
    
    return arr.join('')
  }