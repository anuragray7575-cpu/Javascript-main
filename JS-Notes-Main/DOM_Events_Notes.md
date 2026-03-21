# JavaScript DOM & Event Handling Notes 

## 1. Basic DOM Events

These are simple, commonly used events in JavaScript for user interaction.

### Examples:
```javascript
// Click event
document.getElementById("btn").onclick = function() {
  alert("Button clicked!");
};

// Double click event
document.getElementById("btn").ondblclick = function() {
  alert("Button double-clicked!");
};

// Mouse over event
document.getElementById("box").onmouseover = function() {
  console.log("Mouse entered the box");
};

// Mouse out event
document.getElementById("box").onmouseout = function() {
  console.log("Mouse left the box");
};
```

---

## 2. Important DOM Events

These events are used frequently in form handling, input tracking, and page interactions.

### Examples:
```javascript
// Keydown event
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Input event (live typing)
document.getElementById("name").addEventListener("input", (e) => {
  console.log("Input value:", e.target.value);
});

// Change event (for forms, dropdowns)
document.getElementById("dropdown").addEventListener("change", (e) => {
  console.log("Selected:", e.target.value);
});

// Submit event (prevent form refresh)
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
});
```

---

## 3. Advanced DOM Events

These events provide more control for advanced user interactions and UI handling.

### Examples:
```javascript
// Context menu (right-click)
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("Right click detected!");
});

// Focus and blur
let input = document.getElementById("username");
input.addEventListener("focus", () => console.log("Input focused"));
input.addEventListener("blur", () => console.log("Input blurred"));

// Scroll event
window.addEventListener("scroll", () => {
  console.log("Page scrolled");
});

// Resize event
window.addEventListener("resize", () => {
  console.log("Window resized");
});
```

---

## 4. Tracking DOM Events – Various Methods

### Inline HTML Event Handling
```html
<button onclick="alert('Clicked!')">Click Me</button>
```

### DOM Property Assignment
```javascript
document.getElementById("btn").onclick = function() {
  console.log("Clicked via property!");
};
```

### Using `addEventListener`
```javascript
document.getElementById("btn").addEventListener("click", () => {
  console.log("Clicked using addEventListener!");
});
```

✅ `addEventListener` is preferred → because multiple listeners can be attached.

---

## 5. Important Window Events

- **load** → When the page fully loads.  
- **unload** → When leaving a page.  
- **resize** → When window is resized.  
- **scroll** → When the user scrolls the page.  
- **beforeunload** → Triggers before closing tab.

### Example:
```javascript
window.addEventListener("load", () => console.log("Page loaded"));
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});
```

---

## 6. Event Bubbling and Capturing

- **Event Bubbling**: Event starts from the **target element** and bubbles **upwards** to parent elements.  
- **Event Capturing**: Event starts from the **root (document)** and goes **downwards** to target.

### Example with `addEventListener`:
```javascript
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
}, false); // Bubbling phase

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
}, true); // Capturing phase
```

---

## 7. How to Stop Bubbling and Capturing

We use `event.stopPropagation()` or `event.stopImmediatePropagation()`.

### Example:
```javascript
document.getElementById("child").addEventListener("click", (e) => {
  console.log("Child clicked");
  e.stopPropagation(); // Stops event from reaching parent
});
```

---

## 8. `document.addEventListener` – Syntax

```javascript
document.addEventListener("event", callback, useCapture);
```

- **event**: Type of event (e.g., `"click"`, `"keydown"`).  
- **callback**: Function to execute.  
- **useCapture**: Boolean → `true` for capturing phase, `false` for bubbling phase.

### Example:
```javascript
document.addEventListener("click", () => {
  console.log("Clicked document");
}, false);
```

---

## 9. Summary

- Basic DOM events → click, dblclick, mouseover, mouseout.  
- Important DOM events → keydown, input, change, submit.  
- Advanced DOM events → contextmenu, focus, blur, scroll, resize.  
- Window events → load, unload, resize, scroll, beforeunload.  
- Bubbling (default) vs Capturing → controlled with `true/false` in addEventListener.  
- Stop bubbling/capturing with `event.stopPropagation()`.  
# DOMContentLoaded Event in JavaScript

## What is `DOMContentLoaded`?
The **`DOMContentLoaded`** event fires when the **initial HTML document** has been completely **loaded and parsed**, **without waiting** for stylesheets, images, and subframes to finish loading.

✅ It ensures that the DOM tree is fully built, so you can safely manipulate elements.

---

## Difference Between `DOMContentLoaded` and `load`
- `DOMContentLoaded` → Triggered **after HTML is parsed** (faster).
- `load` → Triggered **after all resources (images, CSS, scripts)** are loaded.

---

## Example: Using `DOMContentLoaded`
```javascript
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is fully loaded and parsed!");
  let heading = document.getElementById("title");
  heading.style.color = "blue";
});

