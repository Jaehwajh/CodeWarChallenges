/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
    //coding and coding....
    let reI = /i/gi
    let reA = /a/gi
    let reE = /e/gi
    let reO = /o/gi
    let reU = /u/gi
    
    return s.replace(reI, '!').replace(reA, '!').replace(reE, '!').replace(reO, '!').replace(reU, '!')
    
  }