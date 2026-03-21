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
  name: "Bhottu",
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
student.name = "Debadrita";
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

const student1 = new Student("Debadrita", "Computer Science");

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
