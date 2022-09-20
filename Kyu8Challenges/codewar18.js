/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    let bmiIndex = weight/Math.pow(height,2)
    
    if(bmiIndex <= 18.5){
      return 'Underweight'
    }else if(bmiIndex <= 25){
      return 'Normal'
    }else if(bmiIndex <= 30){
      return 'Overweight'
    }else{
      return 'Obese'
    }
    
    return "";
  }

  
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
    return str.split('').reverse().join('')
  }


/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
	// TODO
  let oddNum = (n * n) - (n - 1);
  let ans = 0;
  let count  = 0 ;
  
  while(count < n){
    if(oddNum % 2 !== 0){
      ans+= oddNum;
      count ++;
    }
    oddNum ++;
  }
  return ans
}

/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.


*/

function checkForFactor (base, factor) {
    // code here
  if(base % factor === 0) {
    return true;
  }else {
    return false;
  }
  }