//          5.    Falsy values in Javascript  


//  Falsy values are values that JavaScript treats as false when checking a condition.
//  There are exactly eight commonly recognised falsy values:

//  Value                  Example

//  false                   Boolean(false)
//    0                     Boolean(0)
//    -0                    Boolean(-0)
//    0n                    Boolean(0n)
//    ""                    Boolean("")
//   null                   Boolean(null)
//  undefined               Boolean(undefined)
//   NaN                    Boolean(NaN)


// Example:

let username = "";

if (username) {
    console.log("Username entered");
} else {
    console.log("Username is empty");    //Output : username is empty.
}
//  Because an empty string is falsy, the else block executes.

// Compare this with a truthy value:

 if ("Hello") {
    console.log("This is truthy");    //Output : truthy.
}
//Important: "0" and "false" are truthy because they are non-empty strings. They are not the same as the number 0 or boolean false.