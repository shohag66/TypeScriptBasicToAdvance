// TypeScript Varibale Type
//Boolean
var isDone = false;
console.log(isDone);
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
//String
var color = "blue";
color = "red";
console.log(color);
//Array
var list = [1, 2, 3];
var list1 = [1, 2, 3];
console.log(list);
console.log(list1);
//Tuple
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
console.log(x);
console.log(x[0].substring(1));
//console.log(x[1].substring(1))//Error
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//Any
var something = "Hello World!";
something = 23;
something = true;
var arr = ["John", 212, true];
arr.push("Smith");
console.log(arr);
