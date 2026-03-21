# Event Delegation in JavaScript

## 🔹 What is Event Delegation?

Event delegation is a technique in JavaScript where instead of attaching
event listeners to multiple child elements individually, we attach a
**single event listener to a parent element**.\
This works because of **event bubbling** -- when an event happens on a
child, it "bubbles up" through its ancestors, and can be caught by a
listener on any parent.

------------------------------------------------------------------------

## 🔹 Why use Event Delegation?

1.  **Performance** -- Instead of adding listeners to many elements,
    just one listener on the parent handles all.\
2.  **Dynamic Elements** -- Works even for elements added later (e.g.,
    via JavaScript).\
3.  **Cleaner Code** -- Centralized logic instead of scattered
    listeners.

------------------------------------------------------------------------

## 🔹 How Event Delegation Works

-   Events bubble up (child → parent → document → window).\
-   The parent's event listener can check which child triggered the
    event using `event.target`.\
-   Use **conditional checks** (`matches()`, `closest()`,
    `classList.contains()`) to act only on desired elements.

------------------------------------------------------------------------

# ✅ 5 Event Delegation Examples

### **Example 1: Basic Button Click Delegation**

``` html
<div id="button-container">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

<script>
document.getElementById("button-container").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log("You clicked:", event.target.textContent);
  }
});
</script>
```

------------------------------------------------------------------------

### **Example 2: Delegation with Dynamic Elements**

``` html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<button id="add">Add Item</button>

<script>
const list = document.getElementById("list");

list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});

document.getElementById("add").addEventListener("click", function() {
  const li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});
</script>
```

------------------------------------------------------------------------

### **Example 3: Using `matches()` for Class Filtering**

``` html
<div id="menu">
  <button class="edit">Edit</button>
  <button class="delete">Delete</button>
</div>

<script>
document.getElementById("menu").addEventListener("click", function(event) {
  if (event.target.matches(".edit")) {
    console.log("Edit button clicked");
  }
  if (event.target.matches(".delete")) {
    console.log("Delete button clicked");
  }
});
</script>
```

------------------------------------------------------------------------

### **Example 4: Event Delegation with Form Inputs**

``` html
<form id="form">
  <input type="text" name="username" placeholder="Username">
  <input type="email" name="email" placeholder="Email">
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("form").addEventListener("input", function(event) {
  if (event.target.name === "username") {
    console.log("Typing username:", event.target.value);
  }
  if (event.target.name === "email") {
    console.log("Typing email:", event.target.value);
  }
});
</script>
```

------------------------------------------------------------------------

### **Example 5: Delegation with `closest()`**

``` html
<ul id="tasks">
  <li><button class="done">✔ Done</button> Task 1</li>
  <li><button class="done">✔ Done</button> Task 2</li>
</ul>

<script>
document.getElementById("tasks").addEventListener("click", function(event) {
  const button = event.target.closest(".done");
  if (button) {
    const li = button.closest("li");
    li.style.textDecoration = "line-through";
    console.log("Task marked as done:", li.textContent);
  }
});
</script>
```

------------------------------------------------------------------------

------------------------------------------------------------------------

# 🔹 Key Takeaways

1.  Attach listeners to a parent, not every child.\
2.  Use `event.target`, `matches()`, and `closest()` for filtering.\
3.  Works for dynamically added elements.\
4.  Reduces memory usage & improves performance.\
5.  Centralizes event logic → cleaner code.
