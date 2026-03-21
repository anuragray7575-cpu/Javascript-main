# Notes JS-basics

## 1. Hoisting in JavaScript

Hoisting is JavaScript's default behavior of moving **declarations** to the top of the current scope (script or function).  
Only **declarations** are hoisted, not initializations.

### Example:

```javascript
console.log(a); // undefined (not error, because 'a' is hoisted)
var a = 10;

// Equivalent to:
var a;
console.log(a); // undefined
a = 10;
```

For functions:

```javascript
sayHello(); // Works, because function declarations are hoisted

function sayHello() {
  console.log("Hello!");
}
```

But function expressions are **not hoisted**:

```javascript
sayHi(); // Error: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};
```

---

## 2. IIFE (Immediately Invoked Function Expression)

IIFE is a function in JavaScript that runs immediately after it is defined.  
It helps to create a private scope and avoid polluting the global namespace.

### Example:

```javascript
(function () {
  console.log("This runs immediately!");
})();

// With parameters
(function (name) {
  console.log("Hello, " + name + "!");
})("Debadrita");
```

---

## 3. Currying in JavaScript

Currying is the process of converting a function with multiple arguments into a sequence of functions, each taking a single argument.

### Example:

```javascript
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(3)(4)); // 9
```

Using arrow functions:

```javascript
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // 6
```

---

## 4. Shallow and Deep Copy in Objects and Arrays

### Shallow Copy
A **shallow copy** means copying only the first level of properties, while nested objects are still referenced.

```javascript
let obj1 = { name: "Debadrita", details: { age: 21 } };
let shallowCopy = { ...obj1 };

shallowCopy.details.age = 22;

console.log(obj1.details.age); // 22 (affected)
```

### Deep Copy
A **deep copy** creates a completely new object with no references to the original.

```javascript
let obj2 = { name: "Debadrita", details: { age: 21 } };

// Deep copy using JSON methods
let deepCopy = JSON.parse(JSON.stringify(obj2));
deepCopy.details.age = 25;

console.log(obj2.details.age); // 21 (not affected)
```

Another way using structuredClone (modern JS):

```javascript
let deepCopy2 = structuredClone(obj2);
deepCopy2.details.age = 30;

console.log(obj2.details.age); // 21 (safe)
```

---

## 5. Callback Hell (a.k.a. Pyramid of Doom)

When multiple callbacks are nested within each other, the code becomes hard to read and maintain.  
This is called **Callback Hell**, also known as the **Pyramid of Doom**.

### Example:

```javascript
doSomething(function (result1) {
  doSomethingElse(result1, function (result2) {
    doThirdThing(result2, function (result3) {
      console.log("Final Result: " + result3);
    });
  });
});
```

✅ To avoid this → use **Promises** or **async/await**.

---

## 6. Network Requests in JavaScript

Network requests are made to communicate with servers using **HTTP methods**.

### Common HTTP Methods:
- **GET** → Retrieve data
- **POST** → Send data
- **PUT** → Update data
- **DELETE** → Remove data

### Using Promises + Fetch:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

### Using Async/Await with Try-Catch:

```javascript
async function getPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPosts();
```

---

## 7. What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight data format used to exchange data between client and server.  
- Data is represented as key-value pairs.
- Easy to parse and stringify in JS.

### Example:

```javascript
let jsonString = '{"name": "Debadrita", "age": 21}';

// Convert JSON → Object
let obj = JSON.parse(jsonString);
console.log(obj.name); // Debadrita

// Convert Object → JSON
let newJSON = JSON.stringify({ hobby: "Coding", level: "Beginner" });
console.log(newJSON);
```

---

## 8. DOM Tree vs BOM Tree

### DOM (Document Object Model)
- Represents the **HTML structure** as a tree of nodes.
- Allows us to manipulate HTML and CSS dynamically.

Example:

```javascript
document.getElementById("myId").innerText = "Hello!";
```

### BOM (Browser Object Model)
- Represents the **browser environment** (outside the webpage).
- Provides objects like `window`, `navigator`, `location`, `history`, `screen`.

Example:

```javascript
console.log(window.location.href); // Current page URL
console.log(navigator.userAgent);  // Browser info
```

---

## 9. Prototype in JavaScript

Every JavaScript object has a hidden property called **[[Prototype]]**, which points to another object.  
This is the basis of **prototypal inheritance**.

### Example:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, I am " + this.name);
};

let p1 = new Person("Debadrita");
p1.greet(); // Hello, I am Debadrita
```

---

## 10. The `window` Object

- Represents the **global object** in the browser.
- Contains properties, methods, and other objects.

### Common properties & methods:

```javascript
console.log(window.innerWidth);  // Width of browser window
console.log(window.location.href); // Current URL
window.alert("Hello!");          // Show alert
window.setTimeout(() => console.log("Delayed"), 2000);
```

---

## 11. The `document` Object

- Represents the **webpage (DOM tree)**.
- Allows manipulation of elements, styles, and structure.

### Common methods:

```javascript
// Selecting elements
let el = document.getElementById("myId");
let els = document.querySelectorAll(".myClass");

// Changing content
el.innerText = "Updated text";
el.style.color = "blue";

// Creating new element
let div = document.createElement("div");
div.innerText = "New Element!";
document.body.appendChild(div);
```
