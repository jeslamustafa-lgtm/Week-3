   //     3.    JAVASCRIPT DATA TYPES

//What are data types? Name any three.
//Data types define the type of value stored in a variable.

// javascript datatypes?
// Divided into two : Primitive and Non-primitive.

//    3.1   Primitive (by value):

//String, number, boolean, null, undefined, bigint, symbol.

let Name = "Jeo";   //string
let age = 22;       //number
let isStudent=true; //boolean
 let result;
 let selectedValue = null
 let bigNumber = 1234567890123456789n;

 console.log(Name);
 console.log(age);
 console.log(isStudent);
 console.log(result);
 console.log(selectedValue);
 console.log(bigNumber);

 //BigInt Example:
//Used for very large numbers (bigger than normal number limit)

let big = 123456789012345678901234567890n;
console.log(big);

//Must end with n
//10n + 20n  // 30n
//10n + 5    // Error

//Symbol Example:
//Symbol creates unique values.
let id = Symbol("id");
console.log(typeof id);

let id1 = Symbol("id");
let id2 = Symbol("id");
id1 === id2   // false
//Even same description → always unique


//    3.2   Non primitive (reference)data types :

//1.Object, 2.Array, 3.Function.

//  A. OBJECT:
// An object stores related information using key-value pairs.
let student = {
    name: "Jesla",
    age: 20,
    course: "JavaScript"
};

console.log(student.name);
console.log(student.course);     //Output:Jesla Javascript
//Here name,age and course are properties of the object.

//  B. ARRAY:
// An array stores multiple values in an oredred list.

let fruits = ["Apple","Mango","Orange"];    //array
    console.log(fruits[0]);
    console.log(fruits[1]);       //Output:Apple,Mango.
    //Array indexing starts at 0,not1.

    //C. FUNCTION:
    // A function is a reusable block of code that performs a task.
    function add(){
        console.log(10 + 20)
    }
    add();                 //Output:30

    //The function runs when we call it using add().
