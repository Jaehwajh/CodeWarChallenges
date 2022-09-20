// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    let total = 180;
    
    return total - (a + b);
  }



//   Write a function to split a string and convert it into an array of words.

//   Examples (Input -> Output):
//   * "Robin Singh" ==> ["Robin", "Singh"]
  
//   * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){

    return string.split(' ')
      // code code code
  
  }


/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


*/

function maps(x){
    return x.map(i => i *2 )
  }


/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/

function hero(bullets, dragons){
    //Get Coding!
      if(bullets >= dragons * 2){
        return true;
      }else {
        return false;
      }
    }
    