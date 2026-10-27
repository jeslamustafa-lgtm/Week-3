//       4.   Type conversion in JavaScript


//Type conversion means changing a value from one data type to another.
//There are two types: Implicit and Explicit.

// 4.1  Implicit type conversion :
//JavaScript automatically converts a value when an operation requires it.

//Example-1:
console.log("5" + 2);    //Output : 52
//why? The number 2 is converted to a string,so Javascript joins the two strings.

//Example-2:
console.log("5"-2);      //Output : 3
//Why? The number "5"is converted to the number 5 so Javascript can subtract.

//Example-3:
console.log(true + 2);     //Output : 3
//In this numeric operation,true becomes 1.


// 4.2  Explicit type conversion
//Explicit conversion means that you deliberately convert a value using JavaScript functions.

//Convert a string to a number:
 let age = "20";

let numberAge = Number(age);

console.log(numberAge);
console.log(typeof numberAge);   //Output : 20 number

//Convert a number to string:
 let price = 100;

let textPrice = String(price);

console.log(textPrice);
console.log(typeof textPrice);     //Output : 100 string

//Convert a value to a boolean:
 console.log(Boolean(1));
console.log(Boolean(0));          //Output : true false

//Beginner tip: When receiving numbers from an HTML input, remember that the input value is usually a string. Use Number() if you need to perform numerical calculations.
