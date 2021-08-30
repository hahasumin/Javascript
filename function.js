// Funcion
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body... return; }
// one fnction === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(123);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 4. Rest parameters (...) <- in array form (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope (밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다)
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "Hello";
  }

  // console.log(childMessage); //error
  // return undefined;
}

printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지않으면 함수를 일단 빨리 종료하고
    // 필요한 로직들은 그 후에 작성해
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  //anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
//anonymous function
const printYes = function () {
  console.log("Yes!");
};
//named function
// better debugging  in debugger's stack traces
// recursions (함수안에서 자기 함수를 부르는 것)
const printNo = function print() {
  console.log("No!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//  console.log("simplePrint!");
// };
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
// const add = function (a, b) {
// return a + b;
// };
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun Quiz time
// function calculate (command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
  if (command === "add") {
    return a + b;
  } else if (command === "subtract") {
    return a - b;
  } else {
    if (command === "divide") {
      return a / b;
    }
  }
}

console.log(calculate("add", 6, 2));
console.log(calculate("subtract", 6, 2));
console.log(calculate("divide", 6, 2));

function calculate1(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}

console.log(calculate1("addd", 2, 3));
