# JS Interview

## ES6 (ECMAScript 2015) and Its New Features

## Introduction
ES6 (ECMAScript 2015) is one of the most important updates to JavaScript, bringing many modern features that simplify coding, improve readability, and enhance performance. It introduced new syntax, keywords, data structures, and APIs.

---

## Key Features of ES6

### 1. **Let and Const**
- `let` allows block-scoped variables.
- `const` creates read-only constants.

```javascript
let x = 10;
const y = 20;
x = 15; // valid
// y = 25; // Error: Assignment to constant variable
```

---

### 2. **Arrow Functions**
- Shorter syntax for writing functions.
- Does not have its own `this`.

```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

---

### 3. **Template Literals**
- Use backticks (`` ` ``) to embed expressions.

```javascript
let name = "John";
console.log(`Hello, ${name}!`); // Hello, John!
```

---

### 4. **Default Parameters**
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet()); // Hello, Guest
```

---

### 5. **Destructuring Assignment**
```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25
```

---

### 6. **Spread and Rest Operators**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread
console.log(arr2); // [1,2,3,4,5]

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

### 7. **Classes**
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}
const p = new Person("Bob");
console.log(p.greet());
```

---

### 8. **Modules (import/export)**
```javascript
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
console.log(add(2, 3));
```

---

### 9. **Promises**
```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received"), 2000);
});

fetchData.then(data => console.log(data));
```

---

### 10. **Async/Await**
```javascript
const fetchData = () => {
  return new Promise(resolve => setTimeout(() => resolve("Done"), 1000));
};

async function getData() {
  const result = await fetchData();
  console.log(result);
}
getData();
```

---

### 11. **New Data Types**
- **Symbol**: unique and immutable primitive.
- **BigInt**: represents large integers.

```javascript
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false

let big = 1234567890123456789012345678901234567890n;
console.log(big + 1n);
```

---

## Other ES6 Features
- For...of loop
- Map and Set
- WeakMap and WeakSet
- Enhanced object literals
- Iterators and Generators

---

# Most Important JavaScript Developer Interview Questions

## 1. What is ES6?
**Answer:** ES6 (ECMAScript 2015) is the 6th edition of ECMAScript and introduced new syntax and features such as classes, modules, arrow functions, promises, let/const, etc.

---

## 2. Difference between `var`, `let`, and `const`?
**Answer:**
- `var` is function-scoped, can be redeclared and updated.
- `let` is block-scoped, can be updated but not redeclared.
- `const` is block-scoped, cannot be updated or redeclared.

---

## 3. What are arrow functions?
**Answer:** Arrow functions are a shorthand syntax for writing functions. They don’t have their own `this`.


In JavaScript, regular functions define their own this depending on how they are called:

If called as a method → this refers to the object.

If called as a normal function → this refers to the global object (window in browsers, undefined in strict mode).

If used in constructors → this refers to the new instance.

But arrow functions were designed to not have their own this.
Instead, they lexically inherit this from the surrounding scope (the place where they are defined).

👉 In other words, arrow functions close over the this value of their enclosing context.


Example_1 :

```javascript
const obj = {
  name: "Alice",
  regularFn: function () {
    console.log("regularFn this.name:", this.name);
  },
  arrowFn: () => {
    console.log("arrowFn this.name:", this.name);
  }
};

obj.regularFn(); // ✅ "Alice"  (this = obj)
obj.arrowFn();   // ❌ undefined (this comes from global scope)

```
Example_2&3

```javascript
function Person(name) {
  this.name = name;
  setTimeout(function () {
    console.log("Regular function:", this.name);
  }, 1000);

  setTimeout(() => {
    console.log("Arrow function:", this.name);
  }, 2000);
}

new Person("Bob");

// Output:
// Regular function: undefined (this refers to global/window in callback)
// Arrow function: Bob (this inherited from Person constructor)



const Person = (name) => {
  this.name = name;
};

const p = new Person("Alice"); 
// ❌ TypeError: Person is not a constructor


```
---

## 4. What is the difference between `==` and `===`?
**Answer:**
- `==` checks equality with type coercion.
- `===` checks equality without type coercion.

```javascript
console.log(2 == "2"); // true
console.log(2 === "2"); // false
```

---

## 5. What are template literals?
**Answer:** Template literals allow embedded expressions using backticks.

---

## 6. Explain destructuring in JavaScript.
**Answer:** Destructuring allows unpacking values from arrays or objects into variables.

---

## 7. What is a Promise?
**Answer:** Promise represents a value that may be available now, later, or never.

---

## 8. What is async/await?
**Answer:** `async/await` provides a cleaner syntax for working with promises.

---

## 9. What is the difference between `null` and `undefined`?
**Answer:**
- `undefined` means variable is declared but not assigned.
- `null` is an assignment value that represents no value.

---

## 10. What is a Symbol?
**Answer:** Symbol is a new primitive data type that provides unique identifiers.

---

## 11. What is BigInt?
**Answer:** BigInt is a special numeric type that can represent integers of arbitrary length.

---

## 12. What are modules in ES6?
**Answer:** Modules allow exporting and importing code between files.

---

## 13. What is the difference between `for...of` and `for...in`?
**Answer:**
- `for...in` iterates over object keys.
- `for...of` iterates over iterable values.

---

## 14. What is the difference between Map and Object?
**Answer:**
- `Map` allows keys of any type.
- Objects only allow string/symbol keys.

---

## 15. What is a WeakMap?
**Answer:** WeakMap is similar to Map but only accepts objects as keys and does not prevent garbage collection.

---

## 16. What is the spread operator?
**Answer:** It expands an array or object into individual elements.

---

## 17. What is the rest operator?
**Answer:** Collects multiple elements into an array.

---

## 18. Difference between function declaration and function expression?
**Answer:**
- Function declarations are hoisted.
- Function expressions are not hoisted.

---

## 19. What is hoisting?
**Answer:** JavaScript’s default behavior of moving declarations to the top.

---

## 20. What is closure?
**Answer:** Closure is a function that remembers the variables from its lexical scope even when executed outside of it.

---

## 21. What is the difference between synchronous and asynchronous code?
**Answer:** Synchronous executes sequentially, asynchronous allows tasks to run concurrently.

---

## 22. What is an event loop?
**Answer:** Mechanism that handles async callbacks in JavaScript.

---

## 23. What is the difference between call, apply, and bind?
**Answer:**
- `call`: invokes function with arguments separated by commas.
- `apply`: invokes with arguments as array.
- `bind`: returns a new function with `this` bound.

---

## 24. What are higher-order functions?
**Answer:** Functions that take other functions as arguments or return them.

---

## 25. What is the difference between shallow copy and deep copy?
**Answer:**
- Shallow copy copies references.
- Deep copy copies values recursively.

---

## 26. What is the difference between var hoisting and let/const hoisting?
**Answer:** `var` is hoisted and initialized with `undefined`, `let`/`const` are hoisted but not initialized (Temporal Dead Zone).

---

## 27. What is a generator function?
**Answer:** A function declared with `function*` that yields multiple values using `yield`.

---

## 28. What is the difference between synchronous and asynchronous iteration?
**Answer:**
- Synchronous: `for...of`.
- Asynchronous: `for await...of`.

---

## 29. What is event delegation?
**Answer:** A technique of handling events at a parent level instead of individual child nodes.

---

## 30. What are default parameters in ES6?
**Answer:** They allow function parameters to have default values.

```javascript
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5)); // 10
```

---


