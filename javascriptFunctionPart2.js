console.log("Hello, Gina.  HTML and JS are connected!");
/*
Example:
function test(str) {
  return "test" + str
}
console.log(test("ing"))

Problems:
1. Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
2. Define a function called longestWord that takes a string and returns the longest word in the string.
3. Refactor the longestWord function so that it ignores punctuation.
4. Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.
5. Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.
*/
//function test(str) {
//  return "test" + str
//}
//console.log(test("ing"))



// //Playing around....
// console.log(peopleList);          //returns key:value pair for each pair
// console.log(peopleList.Chuck);    //returns key 22
// console.log(peopleList.Brian);    //returns key 46
// console.log(peopleList.Bob);      //returns key 99
//
// for (var key in peopleList) {     //returns a list of ALL VALUE in an object
//   console.log(peopleList[key]);
// }
//
// for (var key in peopleList) {     //returns a list of ALL KEYS in an object
//   console.log(key);
// }

//PROBLEM #1:

console.log("Problem #1 ");
var peopleList = {
  'Chuck': 22,
  'Brian': 46,
  'Sam': 18
};
//to loop through keys in an object

function oldestPerson() {
  var age = 0;
  var name = "";
  for (var key in peopleList) {
    if ( age <  (peopleList[key])) {
      age = peopleList[key];
      name = key;
    }
  }
  console.log(name);
}

oldestPerson(peopleList);

console.log("      ");

/*Define a function called longestWord that takes a string and returns the longest word in the string.*/

//1. Make a var called the longestWord
//2. build a function that pulls out invidual words from string
//3. build a function that counts the letters

console.log("Problem #2");

var someString = "Sentence to test code.";

function breakSentence (string) {
  var stringBreak = string.split(" ");
  //console.log(stringBreak);
  return stringBreak;
}
//...breakSentence(someString);

function sentenceLength (string) {
  var wordArray = breakSentence(string);
  var wordLength = 0;
  var longestWord = "";
  for (i=0; i < wordArray.length; i++) {
    //console.log (array[i].length);
    if ( wordLength < (wordArray[i].length)) {
      wordLength = (wordArray[i].length);
      longestWord = wordArray[i];
    }
  }
  console.log(wordLength);
  console.log(longestWord);
}
sentenceLength(someString);

console.log("          ");

//3. Refactor the longestWord function so that it ignores punctuation.

console.log("Problem #3");
var someString = "Sentence to test code.";

function breakSentence (string) {
  var stringBreak = string.split(" ");
  //console.log(stringBreak);
  return stringBreak;
}
//...breakSentence(someString);

function sentenceLength (string) {
  var wordArray = breakSentence(string);
  var wordLength = 0;
  var longestWord = "";
  for (i=0; i < wordArray.length; i++) {
    //console.log (array[i].length);
    if (wordArray[i] === ".") {
      console.log(array[i].pop());
    }
    if ( wordLength < (wordArray[i].length)) {
      wordLength = (wordArray[i].length);
      longestWord = wordArray[i];
    }
  }
  console.log(wordLength);
  console.log(longestWord);
}
sentenceLength(someString);

console.log("       ");

//4. Define a function called factorial that takes a random number as //an //argument and then returns the factorial of that given number.

console.log("Problem #4");
function factorial (number) {
  var product = 1;
  var finalProduct;

  for (var j = 1; j <= number ; j++) {
    product *=j;
    console.log(product);
  }
}

factorial(5);

console.log("        ");

//5. Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.

//
// 1. write a function taking a string sentence as an arguement.
// 2. pull one string out of the array
// 3. make string lowercase.
// 4. remove punctuation and spaces from string
// 5. make var forward string
// 6. make a function to flip the forward string, call it backward //   string.
// 7. if state comparing forward and backward string
// 8. if true, console log palindromic, else console log not
//   palindromic
//
// var myArray = ["radar", "moom", "civic"];
//
// var oriString = (myArray[0]);
// var lowString = oriString.toLowerCase();
// var splitString= lowString.replace(' ','');
// var backwardString = splitString.reverse();
//
// console.log(splitString);
// console.log(backwardString);


// function palindrome () {
//   if (forwardString === backwardString) {
//     return forwardString + " is a palindrome.";
//   } else {
//     return forwardString + " is not a palindrome.";
//   }
// }

//console.log(palindrome(myArray[0]));
