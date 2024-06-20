const { First, Last } = require("react-bootstrap/esm/PageItem");

console.log("hello world");

var x=10;
console.log(x);
{
let x=20;
console.log(x);
}
var a=4
console.log(typeof a);


var temp=10;
if (temp>40)
    {
        console.log("hot day");
    }
        else if (temp==40)
            {
                console.log("good day");
            }
else
    {
        console.log("cold day");
    }

// FOR LOOP
for(i=0;i<10;i++)
    {
        console.log(i);
    }

// array
let fruits=["apple","banana","orange","pineapple"];
console.log(fruits);
fruits.push("grapes");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("grapes");
console.log(fruits);

// objects
 let person={
    Firstname:'john',
    Lastname:'smith',
    age:30,
    city:'kozhikode'
 }
 console.log(person);
