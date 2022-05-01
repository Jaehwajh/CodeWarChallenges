// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
    if((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')){
      return 'Player 1 won!'
    }else if((p2 === 'rock' && p1 === 'scissors') || (p2 === 'scissors' && p1 === 'paper') || (p2 === 'paper' && p1 === 'rock')){
      return 'Player 2 won!'
    }else{
      return 'Draw!'
    }
  };



/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
    // TODO: complete
    if(str.endsWith(ending)){
      return true
    }else {
      return false
    }
  }


/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/

const areaOrPerimeter = function(l , w) {
    // Return your answer
    if(l === w){
      return l * w
    }else{
      return (l*2) + (w*2)
    }
  };


/*
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied
*/

function greet(language) {
	switch(language){
    case 'english':
      return 'Welcome';
      break;
    case 'czech':
      return 'Vitejte';
      break;
    case 'danish':
      return 'Velkomst';
      break;
    case 'dutch':
      return 'Welkom';
      break;
    case 'estonian':
      return 'Tere tulemast';
      break;
    case 'finnish':
      return 'Tervetuloa';
      break;
    case 'flemish':
      return 'Welgekomen';
      break;
    case 'french':
      return 'Bienvenue';
      break;
    case 'german':
      return 'Willkommen';
      break;
    case 'irish':
      return 'Failte';
      break;
    case 'italian':
      return 'Benvenuto';
      break;
    case 'latvian':
      return 'Gaidits';
      break;
    case 'lithuanian':
      return 'Laukiamas';
      break;
    case 'polish':
      return 'Witamy';
      break;
    case 'spanish':
      return 'Bienvenido';
      break;
    case 'swedish':
      return 'Valkommen';
      break;
    case 'welsh':
      return 'Croeso';
      break;
    default:
      return 'Welcome';
      break;
  }
}

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = arr => {
    // your code
    const binaryString = arr.join('');
    return parseInt(binaryString, 2);
  };