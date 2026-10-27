//       6.     JavaScript operators :

//  Operators are symbols that perform operations on values and variables.

//For example, "+" adds numbers, ">" compares values, and "&&" checks whether two conditions are true.


     //  6.1  Arithmetic operators  :

//These operators perform mathematical calculations.

// Operator        Meaning           Example        Result
//    +             Addition          10 + 5           15
//    -             Subtraction       10 - 5           5
//    *              Multiplication    10 * 5          50
//    /              Division          10 / 5          2
//     %              Remainder         10 % 3          1
//    *             Exponentiation      2 * 3          8
//    ++            Increase by 1      x++            Adds 1 to x
//     --            Decrease by 1      x--         Subtracts 1 from x

//     Example:

let a = 20;
let b = 3;

console.log(a + b);       //Output : 23
console.log(a - b);       //Output  : 17
console.log(a * b);       //Output  : 60
console.log(a / b);        //Output  : 6.66666666667
console.log(a % b);         //Output : 2
console.log(a ** b);        //Output : 8000

// The % operator is especially useful for checking whether a number is even or odd

let number = 8;

console.log(number % 2);

//If number % 2 === 0, the number is even. Otherwise, it is odd.

//    6.2    Comparison operators:

//  Comparison operators compare two values and return a boolean: true or false.
// Operator           Meaning                 Example            Result
//   >               Greater than             10 > 5             true
//   <               Less than                10 < 5            false
//   >=           Greater than or equal to    5 >= 5             true
//   <=           Less than or equal to       3 <= 5             true
//   ==             Loose equality             5 == "5"          true
//  ===           Strict equality              5 === "5"        false
//   !=           Loose inequality             5 != "6"          true
//  !==            Strict inequality           5 !== "5"         true
//Example:

let age = 20;

console.log(age > 18);        //Output : true
console.log(age < 18);        //Output : false
console.log(age === 20);      //Output : true

//    Difference between == and ===
// == compares values after possible type conversion.
//   === compares both value and data type without type conversion.

console.log(10 == "10");    //Output : true
console.log(10 === "10");   //Output : false

// The first comparison is true because JavaScript converts the string "10" to a number for comparison. The second is false because one value is a number and the other is a string.
// Best practice: Prefer === and !== unless you specifically need loose comparison.


//  6.3       Logical operators:

// Logical operators combine or reverse conditions.
//| Operator    | Name    | Meaning |

//| &&          | AND     | Both conditions must be true |
//| ||          | OR      | At least one condition must be true |
//| !            | NOT    | Reverses a boolean condition |


//    AND (&&) :

let adultage = 20;
let hasID = true;

console.log(age >= 18 && hasID);    //Output: true
// Both the conditions are true.

//    OR(||) :

let hasEmail = false;
let hasPhone = true;

console.log(hasEmail || hasPhone);      //Output : true.
// Atleast one condition is true.

//    NOT(!)  :

let isLoggedIn = false;

console.log(!isLoggedIn);    //Output : true

// The ! operator reverses the boolean value.

// 6.4    Ternary operator (? :) :
// The ternary operator is a short way to choose between two results based on a condition.

//Syntax:
//   condition ? valueIfTrue : valueIfFalse;
 let adultAge = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);  //Output : Adult

// How it works:
// 1.  Check whether age >= 18.
// 2.  If true, choose "Adult".
// 3. If false, choose "Minor".
// This is a shorter alternative to a simple if...else statement.

 let marks = 35;

let string = marks >= 40 ? "Pass" : "Fail";

console.log(result);         //Output : Fail

// 6.5   Type of operator :

// The typeof operator tells you the type of a value.

 console.log(typeof "Hello");         //Output : string
console.log(typeof 25);               //Output : number
console.log(typeof true);             //Output : boolean
console.log(typeof undefined);        //Output : undefined
console.log(typeof {});               //Output :  object


 let Age = 20;

if (typeof age === "number") {
    console.log("Age is a number");     //Output : Age is a number
}
 //   Remember that typeof null returns "object" and arrays also return "object".


//  6.6    Nullish coalescing operator (??) :

//   The ?? operator provides a default value only when the left-hand value is null or undefined.

//Example:
let Username = null;

let displayName = username ?? "Guest";

console.log(displayName);             //Output : Guest

//    Because 'username' is 'null', JavaScript uses "Guest".

//   Another Example:

 let username = "";

console.log(username ?? "Guest");       //Output : an empty string

 //Why? An empty string is neither null nor undefined, so ?? keeps it.
// This operator is useful when a value may be missing and you want a fallback.


// 6.7    Difference between || and ?? :

// This is an important interview and coursework topic.

//  || uses the right-hand value, if the left-hand value is falsy.
//  ?? uses the right-hand value only if the left-hand value is null or undefined.

// Compare these examples:

//  | Left-hand value | value || "Guest" | value ?? "Guest" |

//       | null | "Guest" | "Guest" |
//      | undefined | "Guest" | "Guest" |
//         | 0 | "Guest" | 0 |
//         | false | "Guest" | false |
//           | "" | "Guest" | "" 
//        | "Jesla" | "Jesla" | "Jesla" |

// Code:

let count = 0;

console.log(count || 10);        //Output : 10
console.log(count ?? 10);        //Output : 0

// Explanation: 0 is falsy, so || returns 10. But 0 is not nullish, so ?? returns 0.
// Use || when any falsy value should trigger the default. Use ?? when only a missing value should trigger it.


