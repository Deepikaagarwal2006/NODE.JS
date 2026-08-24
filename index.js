console.log ("HELLO ECE");
let a = 10;
let b = 20;

let temp;       // third variable

temp = a;
a = b;
b = temp;

console.log("a =", a);
console.log("b =", b);

function helloWorld() {
    console.log("Hello World");
}

helloWorld();

function addNumbers(x, y) {
    return x + y;
}

let result = addNumbers(5, 10);
console.log("Result:", result);

// const helloWorld = () => {
//     console.log("Hello World");
// };

// helloWorld();

// const helloWorld = () => console.log("Hello World");

// helloWorld();


setTimeout(() => {console.log("Timeout function executed after 2 seconds");}, 2);

setInterval(() => {console.log("hello world");},5);