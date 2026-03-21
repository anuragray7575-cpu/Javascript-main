# Advanced JavaScript Notes 

## 1. Difference Between Rest and Spread Operator

### Rest Operator (`...`)
- Collects multiple arguments into a single array.
- Used in **function parameters**.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### Spread Operator (`...`)
- Expands (spreads) an array or object into individual elements.
- Used in arrays, objects, and function calls.

```javascript
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

let obj = { a: 1, b: 2 };
let newObj = { ...obj, c: 3 };
console.log(newObj); // { a: 1, b: 2, c: 3 }
```

---

## 2. Time and Math in JavaScript

### Date & Time Methods
```javascript
let now = new Date();
console.log(now.toString());  // Current date & time
console.log(now.getFullYear()); // Year
console.log(now.getMonth());    // Month (0-11)
console.log(now.getDate());     // Day of month
console.log(now.getHours());    // Hours
console.log(now.getMinutes());  // Minutes
console.log(now.getSeconds());  // Seconds
```

### Math Methods
```javascript
console.log(Math.PI);       // 3.14159...
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.random());   // Random number 0-1
console.log(Math.pow(2, 3));  // 8
console.log(Math.sqrt(16));   // 4
```

---

## 3. Strings in JavaScript and Methods

```javascript
let str = "Hello, JavaScript!";

console.log(str.length); // 17
console.log(str.toUpperCase()); // HELLO, JAVASCRIPT!
console.log(str.toLowerCase()); // hello, javascript!
console.log(str.indexOf("Java")); // 7
console.log(str.includes("Hello")); // true
console.log(str.slice(0, 5)); // Hello
console.log(str.substring(7, 11)); // Java
console.log(str.replace("JavaScript", "World")); // Hello, World!
console.log(str.split(" ")); // ["Hello,", "JavaScript!"]
console.log(str.trim()); // removes whitespace
```

---

## 4. All Types of Loops in JavaScript

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Do-while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// For-of loop (for arrays, strings)
let arr = [10, 20, 30];
for (let num of arr) {
  console.log(num);
}

// For-in loop (for objects)
let obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

## 5. Array and Object Iteration Methods

### Array Methods
```javascript
let nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach(num => console.log(num));

// map
let doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter
let evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// some
console.log(nums.some(num => num > 4)); // true

// every
console.log(nums.every(num => num > 0)); // true

// find
console.log(nums.find(num => num > 3)); // 4

// findIndex
console.log(nums.findIndex(num => num > 3)); // 3
```

### Object Iteration
```javascript
let person = { name: "Debadrita", age: 21 };

console.log(Object.keys(person));   // ["name", "age"]
console.log(Object.values(person)); // ["Debadrita", 21]
console.log(Object.entries(person));// [["name","Debadrita"],["age",21]]

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
```

---

## 6. Conversions and Parse Methods in JavaScript

### Number Conversions
```javascript
console.log(Number("123"));  // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(+ "456"); // 456
```

### String Conversions
```javascript
let num = 100;
console.log(String(num)); // "100"
console.log(num.toString()); // "100"
```

### Boolean Conversions
```javascript
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
```

---

## 7. Web APIs, Call Stack, Heap Memory, Event Loop & Task Queue

### Call Stack
- Keeps track of function calls (LIFO).
```javascript
function a() { console.log("a"); }
function b() { a(); console.log("b"); }
b();
// Stack order: b -> a
```

### Heap Memory
- Stores objects, arrays, and reference data.

### Event Loop & Task Queue
- JS is single-threaded but asynchronous tasks (like fetch, setTimeout) are handled using the **event loop**.
- **Task Queue / Callback Queue** holds async callbacks to be executed when the stack is empty.

```javascript
console.log("Start");
setTimeout(() => console.log("Async Task"), 0);
console.log("End");

// Output: Start -> End -> Async Task
```

---

## 8. Execution Context in JavaScript

Execution context is the environment where JS code runs.  
Two phases:  
1. **Creation Phase** → Hoisting happens, memory allocated.  
2. **Execution Phase** → Code runs line by line.

---

## 9. Global Execution Context (GEC)

- Default context when JS starts running.  
- Creates `window` object (in browsers) and `this` keyword.  
- All global variables/functions belong to the GEC.

### Example:
```javascript
var x = 10;
function test() {
  console.log("Inside test");
}
console.log(this.x); // 10 (in browser, this refers to window)
test();
```
