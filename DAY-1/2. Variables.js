/*     Variables

What is variable?
* Variables are used to store data.
* let,const,var.

 //"var" => old keyword, function scoped.
 can be radeclared and reassigned.
*/
var num=5
console.log("Num: ",num)
num=50
console.log("Num: ",num)
var num=100
console.log("Num: ",num)

//"let" => block scoped. can be reassigned
//can be reassigned, not redeclared in same scope
let number=5
console.log("Num: ",number)
number=25
console.log("Num: ",number)

//"const" => block scoped. cannot be reassigned
const Num=50
console.log("Num: ",Num)

//What is Scope?
//Scope means where a variable is accessible.

//Global scope
let a=100
console.log(a)
function greet(){
    console.log("Hello")
    console.log(a)
}
greet()
console.log(a)
//Function scope
function greet(){
    let b=50
    console.log("Haiiii")
    console.log(b)
}
greet()
//Block scope ({})
function greet(){
    {
        let c=200
        {
            let c=300
            console.log("c-blue",c)
        }
        console.log("c-pink",c)
    }
    console.log("Hw r u?")
}
greet()
