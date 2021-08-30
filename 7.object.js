// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties

const obj1 = {}; // "object literal" syntax
const obj2 = new Object(); // "object constructor" syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 20 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// -> 나중에 동적으로 key의 관련된 value를 받아와야할 때 유용하게 쓰임
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
// - key와 value의 이름이 동일하다면 한번만 적으면 된다
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("ellie", 30);
const person5 = new Person("elliiee", "300");

console.log(person4);
console.log(person5);

function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. Constructor Function
// 다른 계산을 하지않고 순수하게 object만 생성하는 함수들은
// 1. 함수의 이름을 대문자로 시작한다
// 2. return 대신 this. 를 사용한다
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. "in" operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable) 배열 리스트
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: "ellie", age: 20 };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// new way 2
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const fruit3 = { color: "black" };
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);
