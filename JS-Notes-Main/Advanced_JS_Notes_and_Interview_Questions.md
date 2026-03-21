# Advanced JavaScript Notes: BOM, DOM, Execution Context, Runtime, and Internals 

---

## 1. Browser Object Model (BOM)
The **BOM (Browser Object Model)** allows JavaScript to interact with the browser outside the content of the document. It represents browser components such as windows, history, location, navigator, screen, etc.

### Key BOM Objects:
- `window`: The global object representing the browser window.
- `navigator`: Provides information about the browser.
- `screen`: Provides information about the screen resolution.
- `location`: Provides current URL and methods to redirect.
- `history`: Represents the browsing history.

### BOM Tree (Simplified)
```
Window
│
├── Document (DOM)
├── Location
├── History
├── Navigator
├── Screen
├── Console
```

---

## 2. Document Object Model (DOM)
The **DOM (Document Object Model)** is a tree-like structure representing the HTML document. It allows JavaScript to manipulate elements, attributes, and content dynamically.

### DOM Tree Example:
```html
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>Paragraph</p>
  </body>
</html>
```

DOM Representation:
```
Document
│
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p
```

---

## 3. Execution Context and Runtime

### Types of Execution Context:
1. **Global Execution Context (GEC)**
   - Created when the JS program starts.
   - `this` points to the `window` object in browsers.

2. **Function Execution Context (FEC)**
   - Created each time a function is invoked.
   - Contains local variables, arguments, inner scope.

3. **Eval Execution Context** (less used).

### JS Runtime Environment
- JS is **single-threaded** and synchronous by default.
- Runtime includes:
  - Call Stack
  - Heap Memory
  - Web APIs
  - Callback Queue (Task Queue)
  - Microtask Queue
  - Event Loop

---

## 4. Window Object
- The global object in browsers.
- Properties: `window.document`, `window.location`, `window.history`, `window.navigator`, `window.console`.

Example:
```javascript
console.log(window.innerHeight);
console.log(window.location.href);
```

---

## 5. Document Object
- Represents the HTML document loaded into the browser.
- Methods:
  - `getElementById()`
  - `querySelector()`
  - `createElement()`
  - `appendChild()`

---

## 6. Console Object
- Used for debugging.
- Methods: `console.log()`, `console.error()`, `console.table()`, `console.group()`.

---

## 7. HTMLCollection vs NodeList
- **HTMLCollection**: live collection of elements (auto-updates).
- **NodeList**: can be static or live, returned by `querySelectorAll`.

---

## 8. Prototype in JS
- Every object has an internal property `[[Prototype]]` (or `__proto__`).
- Prototypes allow inheritance.

Example:
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};

const p = new Person("Alice");
p.greet(); // Hello Alice
```

---

## 9. Memory Management in JS
- Memory allocation:
  - **Stack**: primitive values.
  - **Heap**: objects, functions.
- Garbage collection: Automatic memory cleanup via reference counting and mark-and-sweep.

---

## 10. Call Stack
- JS uses a **stack** to manage execution context.
- Last In, First Out (LIFO).

---

## 11. Task Queue and Microtask Queue
- **Task Queue (Macrotasks)**: `setTimeout`, `setInterval`, I/O tasks.
- **Microtask Queue**: `Promises`, `MutationObserver`.
- **Microtasks have higher priority** than macrotasks.

---

## 12. Web APIs in JS
- Provided by the browser, not JavaScript itself.
- Examples: `DOM APIs`, `fetch API`, `setTimeout`, `localStorage`.

---

## 13. Single Thread but Asynchronous Nature
- JS runs single-threaded, but async behavior is enabled via **event loop** and **Web APIs**.

Event Loop Workflow:
1. JS executes code in call stack.
2. Async tasks go to Web APIs.
3. Once resolved, callbacks are sent to microtask queue/task queue.
4. Event loop checks call stack; if empty, executes from microtask queue first, then task queue.

---

#  Advanced JavaScript Interview Questions 

### Q1: Explain Event Loop with example.
```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
```
**Explanation:** Microtasks (`Promise`) run before macrotasks (`setTimeout`).

---

### Q2: Difference between call, apply, and bind?
```javascript
function greet(greeting) {
  console.log(greeting + " " + this.name);
}
const obj = { name: "Alice" };

greet.call(obj, "Hi");    // Hi Alice
greet.apply(obj, ["Hi"]); // Hi Alice
const bound = greet.bind(obj);
bound("Hello");           // Hello Alice
```

---

### Q3: Explain closures with example.
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```
Closures keep reference to lexical scope.

---

### Q4: Explain prototypal inheritance.

# Prototypal Inheritance in JavaScript

---

## 🔹 What is Prototypal Inheritance?

In JavaScript, every object has an internal property called **`[[Prototype]]`**  
(which can be accessed via `__proto__` or `Object.getPrototypeOf()`).  
This property links the object to another object, forming a **prototype chain**.  

If a property or method is not found on the object itself, JavaScript looks it up in the prototype chain.

---

## 🔹 Example with Objects

```javascript
// Parent object
const person = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Child object
const student = {
  name: "Sayan",
  course: "Computer Science"
};

// Make 'student' inherit from 'person'
student.__proto__ = person;

student.greet();  
// Output: Hello, my name is Sayan
```

---

## 🔹 Example using `Object.create()`

```javascript
const person = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const student = Object.create(person); // inherit from person
student.name = "Student";
student.course = "Computer Science";

student.greet();  
// Output: Hello, my name is Sayan
```

---

## 🔹 Prototypal Inheritance with `class`

Even when using `class`, JavaScript still relies on prototypes under the hood.

```javascript
// Parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Child class
class Student extends Person {
  constructor(name, course) {
    super(name); // calls parent constructor
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const student1 = new Student("Student", "Computer Science");

student1.greet(); // Hello, my name is Sayan
student1.study(); // Sayan is studying Computer Science
```

---

## 🔹 Prototype Chain Check

```javascript
console.log(Object.getPrototypeOf(student1)); 
// Student.prototype

console.log(Object.getPrototypeOf(Student.prototype)); 
// Person.prototype

console.log(Object.getPrototypeOf(Person.prototype)); 
// Object.prototype
```

---

## 🔹 Prototype Chain Diagram

```
 student1 (object)
     |
     v
 Student.prototype  ← contains study()
     |
     v
 Person.prototype   ← contains greet()
     |
     v
 Object.prototype   ← contains toString(), hasOwnProperty(), etc.
     |
     v
   null (end of chain)
```

---

## ✅ Summary

- Objects in JS inherit properties through **prototypes**.  
- `__proto__` or `Object.create()` can establish inheritance.  
- Modern `class` syntax is syntactic sugar over prototypal inheritance.  
- Prototype chain determines how property/method lookup works.  



...

### Q5: Difference between deep copy and shallow copy?
...

### Q6: Event delegation example?
...

### Q7: Why is JavaScript single-threaded?
...

### Q8: Difference between synchronous and asynchronous iteration?
...

### Q9: What is the Temporal Dead Zone?
...

### Q10: Explain garbage collection in JS?
...

---


---

# 15 DOM Manipulation Tricky Questions (with Code)

### Q1: Change all `<p>` tags to red text?
```javascript
document.querySelectorAll("p").forEach(p => p.style.color = "red");
```

### Q2: Create a new div and append it?
```javascript
const div = document.createElement("div");
div.textContent = "Hello World";
document.body.appendChild(div);
```

### Q3: Remove all children of a div?
```javascript
const container = document.getElementById("container");
while (container.firstChild) {
  container.removeChild(container.firstChild);
}
```

### Q4: Toggle class on click?
```javascript
element.addEventListener("click", () => element.classList.toggle("active"));
```

### Q5: Clone a node?
```javascript
const node = document.getElementById("myDiv");
const clone = node.cloneNode(true);
document.body.appendChild(clone);
```

... 

---
  
