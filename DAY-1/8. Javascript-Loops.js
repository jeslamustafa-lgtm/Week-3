//   8.      Javascript loops


// A loop repeats a block of code until a condition becomes false or the loop finishes its sequence.

// For example, instead of writing console.log() five times, we can use a loop to print numbers from 1 to 5.

//  JavaScript has several loops. The most important for beginners are for, while, and do...while.


//  8.1 for loop :

//   Use a for loop when you know how many times you want to repeat something.
// Syntax:

for (initialization; condition; update) {
    // Code to repeat
}

//Example:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Output :
1
2
3
4
5

// Let's understand each part.
// 1. Initialization: let i = 1
// Creates the variable i and starts it at 1.
// 2. Condition: i <= 5
// Checks whether i is less than or equal to 5. The loop continues while this is true.
// 3. Update: i++
// Increases i by 1 after each iteration.
// The loop stops when i becomes 6 because 6 <= 5 is false.

// Example: Print even numbers from 2 to 10

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//Output:
2
4
6
8
10
// Here, i += 2 increases i by 2 each time.

//   8.2   while loop :

// A while loop repeats as long as its condition is true.

let whileI = 1;

while (whileI <= 5) {
    console.log(whileI);
    whileI++;
}
//Output:
1
2
3
4
5
// How it works:
// Set i to 1.
// Check whether i <= 5.
// Print the value of i.
// Increase i by 1.
// Repeat until the condition becomes false.
// Important: Remember to update the variable. If you forget i++ in this example, the loop will continue printing 1 forever.


//   8.3 do...while loop :

// A do...while loop executes the code block at least once, even when its condition is false.

let doWhileI = 10;

do {
    console.log(doWhileI);
    doWhileI++;
} while (doWhileI <= 5);           //Output: 10

// Why? JavaScript executes the do block first. Only afterwards does it check i <= 5.

// Compare:
let comparisonI = 10;

while (comparisonI <= 5) {
    console.log(comparisonI);
}                                     //Output: nothing.

// The while loop checks its condition before executing its body, but the do...while loop checks it afterwards.


//  8.4   break statement  :

// break stops a loop immediately.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}                             
//Output:   
1
2
3
4
// When i reaches 5, break terminates the loop.

// 8.5   Continue statement :

// continue skips the current iteration and moves to the next one.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
//Output:  
1
2
4
5
// The number 3 is skipped, but the loop continues.


//   8.6   for...of loop :

// Use for...of to access the values in an iterable, such as an array or string.

let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
//Output: 
Apple
Mango
Orange 
// This is convenient when you need each item but don't need its index.


//    8.7    for...in loop  :

// Use for...in to iterate over the enumerable property keys of an object.

let student = {
    name: "Jesla",
    age: 20,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key, student[key]);
}
//Output: 
// name Jesla
// age 20
// course JavaScript

// Here, key stores a property name, and student[key] accesses its value.
// For arrays, prefer for...of when you want the values. for...in is mainly useful for object properties.
