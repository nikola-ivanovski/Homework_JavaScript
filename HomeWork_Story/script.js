// Homework #1
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
let array = ["John", "happy", "coding"];

function tellStory(name, mood, activity) {
  return console.log(
    `This is ${name}. ${name} is a nice person. Today he is ${mood}. He is ${activity} all day. The end.`
  );
}

tellStory(array[0], array[1], array[2]);

// Homework #2
// Write a function that will take an array of 5 numbers as an argument and return the sum
function sumOfNumbers(numbers) {
  let starter = 0;
  for (let i = 0; i < numbers.length; i++) {
    let addIndex = numbers[i];
    starter += addIndex;
  }
  return starter;
}

console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
function validateNumber(num) {
  if (typeof num === "number" && !isNaN(num)) {
    console.log("These are a valid numbers");
  } else {
    console.log("Error: There are values that are not numbers");
  }
}

validateNumber([1, 2, 4, "hi", "hello"]);

// Homework #3
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
let arrayOfStrings = ["Hello", "there", "students", "of", "SEDC", "!"];

function arrayOfStringsFunc() {
  return console.log(arrayOfStrings.join(" "));
}
arrayOfStringsFunc();

// Homework #4
// Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + "\n");
  } else {
    console.log(i + " ");
  }
}

// Homework #5
// Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
let array2 = [1, 2, 3, 4, 5, 6, 7];
function maxAndMinSum() {
  let arrMin = Math.min(...array2);
  let arrMax = Math.max(...array2);

  return arrMin + arrMax;
}
console.log(maxAndMinSum());

// Homework #6 --- ??
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
let firstNames = ["Stefan", "Darko", "Filip"];
let lastNames = ["Ilievski", "Jordanovski", "Nikolovski"];
