// TypeScript Varibale Type

//Boolean
let isDone: boolean = false;
console.log(isDone);

//Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

//String
let color: string = "blue";
color = "red";
console.log(color);

//Array
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

console.log(list);
console.log(list1);

//Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
console.log(x);
console.log(x[0].substring(1));
//console.log(x[1].substring(1))//Error

//Enum
enum Color {
    Red,
    Green,
    Blue
  }
  let c: Color = Color.Green;

console.log(c);


//Any
let something: any = "Hello World!"; 
something = 23;
something = true;


let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr);




