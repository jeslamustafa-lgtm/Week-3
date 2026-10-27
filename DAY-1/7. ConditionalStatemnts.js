//            Conditional Statements

//  Conditional statements allow a program to make decisions.

//  For example, a website can display "Pass" when marks are sufficient and "Fail" otherwise.

//  7.1    if statement :

//   The if block runs only when its condition is true.

 let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");    //Output: You are eligible to vote
}
//   7.2   if...else statement   :

//  Use else when you want an alternative if the condition is false.

 let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");             // Output: Odd number
}


//   7.3 if...else if...else :

// Use this when you have multiple conditions to check.

//  Example: finding a student's grade.

 let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");                 //Output: Grade B
}

// JavaScript checks the conditions from top to bottom and executes the first matching branch.

//   Important: Put the highest mark range first. If you check marks >= 40 first, a student with 85 marks would match that condition and receive only "Pass".

//  7.4 s
// Switch statement :

//   A switch statement is useful when one expression can match several specific values.


 let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");           //Output: Tuesday
}

// * case defines a possible matching value.
// * break stops execution from continuing into the next case.
// *default runs when no case matches.

//   Without break, JavaScript may continue executing the following cases. This is called fall-through.