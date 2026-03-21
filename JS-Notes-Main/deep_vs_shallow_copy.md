# Difference Between Deep Copy and Shallow Copy in JavaScript

---

## 🔹 What is Shallow Copy?
A **shallow copy** copies an object’s top-level properties.  
- If the property is a **primitive** (number, string, boolean), the value is copied.  
- If the property is a **reference type** (object, array), only the reference is copied (not the actual object).  
- This means changes to nested objects/arrays affect both copies.  

---

## 🔹 What is Deep Copy?
A **deep copy** creates a completely independent clone of the object.  
- All levels of nested objects/arrays are copied.  
- Changes in one object do **not** affect the other.  

---

## 🔹 Key Difference Table

| Feature                  | Shallow Copy                           | Deep Copy                                |
|---------------------------|----------------------------------------|------------------------------------------|
| Copy Level                | Only top-level                        | All levels                               |
| Reference Objects         | References are shared                 | New objects are created                  |
| Memory Usage              | Less (reuses references)              | More (creates new objects)               |
| Independence              | Not fully independent                 | Fully independent                        |
| Common Methods            | `Object.assign()`, spread operator    | `structuredClone()`, JSON methods, libs  |

---

## 🔹 Example 1: Shallow Copy with `Object.assign()`

```javascript
const obj1 = { name: "Debi", address: { city: "Serampore" } };

const shallowCopy = Object.assign({}, obj1);
shallowCopy.address.city = "Kolkata";

console.log(obj1.address.city); // Output: Kolkata (changed in original!)
```

---

## 🔹 Example 2: Shallow Copy with Spread Operator

```javascript
const obj1 = { name: "Debi", skills: ["JS", "Python"] };

const shallowCopy = { ...obj1 };
shallowCopy.skills.push("Java");

console.log(obj1.skills); // Output: ["JS", "Python", "Java"] (original modified!)
```

---

## 🔹 Example 3: Deep Copy with JSON Methods

```javascript
const obj1 = { fullName: "Debadrita Mondal Banerjee", address: { city: "Serampore" } };

const deepCopy = JSON.parse(JSON.stringify(obj1));
deepCopy.address.city = "Kolkata";

console.log(obj1.address.city); // Output: Hooghly (original not affected)
```

---

## 🔹 Example 4: Deep Copy with `structuredClone()` (Modern JS)

```javascript
const obj1 = { name: "Debadrita", skills: ["JS", "Python"] };

const deepCopy = structuredClone(obj1);
deepCopy.skills.push("Java");

console.log(obj1.skills); // Output: ["JS", "Python"] (original unchanged)
```

---

## 🔹 Example 5: Deep Copy Using a Custom Function (Recursive)

```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  const copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const obj1 = { name: "Debi", address: { city: "Rishra" }, skills: ["JS"] };
const deepCopyObj = deepCopy(obj1);

deepCopyObj.address.city = "Kolkata";
deepCopyObj.skills.push("Python");

console.log(obj1.address.city); // Output: Hooghly
console.log(obj1.skills);       // Output: ["JS"]
```

---

## ✅ Summary

- **Shallow Copy** only copies one level, nested objects remain linked.  
- **Deep Copy** creates a full, independent copy of all levels.  
- Use shallow copy when performance matters and nested independence isn’t required.  
- Use deep copy when you need a completely independent clone.  
