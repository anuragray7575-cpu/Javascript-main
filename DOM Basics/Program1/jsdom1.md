# My Present Knowledge of DOM in JavaScript

## 1. Selecting Elements in DOM

### Small Theory
DOM helps JavaScript to access and control HTML elements.

```javascript
let ch = document.getElementsByName("username");
```
---

## 2. Selecting Elements Using id
id is used to uniquely identify one element.
```javascript
let box = document.getElementById("container");
```
---
## 3. Selecting Elements Using class
class is used to select multiple elements with the same name.
```javascript
let items = document.getElementsByClassName("item");
```
---

## 4. Selecting Elements Using name
name is mostly used with input elements.
```javascript
let inputs = document.getElementsByName("email");
```
---

## 5. innerHTML and textContent
innerHTML is used to change HTML content inside an element.
---

textContent is used to change only text inside an element.
```javascript
element.innerHTML = "<h1>Hello</h1>";
element.textContent = "Hello";
```
## 6. querySelector() and querySelectorAll()
Selects all matching elements.
```javascript
let list = document.querySelectorAll("li");
```
---
## 7. createElement()
Used to create a new HTML element.
```javascript
let para = document.createElement("p");
```
---
## 8. appendChild()
Used to add one element inside another element.
```javascript
document.body.appendChild(para);
```
---
