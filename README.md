### **README.md for Pizzaria**

---

# 🍕 Pizzaria

**Pizzaria** is a lightweight library for managing ARIA attributes and roles in web development. It simplifies accessibility implementation by providing helper functions to add, remove, and validate ARIA attributes across single or multiple elements.

---

## 🚀 Features

- **Batch operations**: Apply ARIA attributes to multiple elements using CSS selectors.
- **Role management**: Easily set or modify ARIA roles for elements.
- **Accessibility helpers**: Manage modals, alerts, and other ARIA-compliant components.
- **Clean and readable API**: Designed for developers who value simplicity and performance.

---

## 📦 Installation

Install Pizzaria via npm:

```bash
npm install pizzaria
```

Or with yarn:

```bash
yarn add pizzaria
```

---

## 🔧 Usage

### Import the library

```typescript
import {
  setAriaAttributes,
  setAriaRole,
  removeAriaAttributes,
  hasAriaAttribute,
  setAriaModal,
  setAriaAlert,
} from 'pizzaria';
```

---

### 🔹 **Basic Examples**

#### Set multiple ARIA attributes:
```typescript
setAriaAttributes('.button', {
  pressed: 'false',
  label: 'Submit',
});
```

#### Set an ARIA role:
```typescript
setAriaRole('#modal', 'dialog');
```

#### Remove specific ARIA attributes:
```typescript
removeAriaAttributes('.button', ['pressed', 'label']);
```

#### Check if elements have a specific ARIA attribute:
```typescript
const hasPressed = hasAriaAttribute('.button', 'pressed');
console.log(hasPressed); // true or false
```

#### Manage ARIA attributes for a modal:
```typescript
setAriaModal('#modal', true); // Opens the modal
setAriaModal('#modal', false); // Closes the modal
```

#### Configure an ARIA alert:
```typescript
setAriaAlert('#alert', 'This is an alert message');
```

---

## 🛠️ API Reference

### **`setAriaAttributes`**

Set multiple ARIA attributes for one or more elements.

- **Parameters**:
  - `selector` *(string)*: CSS selector for the target elements.
  - `attributes` *(object)*: Key-value pairs of ARIA attributes to set.
  - `context` *(Document | HTMLElement)*: (Optional) Limits the scope of the selector. Defaults to `document`.

---

### **`setAriaRole`**

Assign a specific ARIA role to one or more elements.

- **Parameters**:
  - `selector` *(string)*: CSS selector for the target elements.
  - `role` *(string)*: The ARIA role to set.
  - `context` *(Document | HTMLElement)*: (Optional) Limits the scope of the selector. Defaults to `document`.

---

### **`removeAriaAttributes`**

Remove specific ARIA attributes from one or more elements.

- **Parameters**:
  - `selector` *(string)*: CSS selector for the target elements.
  - `attributes` *(array of strings)*: List of ARIA attributes to remove.
  - `context` *(Document | HTMLElement)*: (Optional) Limits the scope of the selector. Defaults to `document`.

---

### **`hasAriaAttribute`**

Check if all elements selected by the CSS selector have a specific ARIA attribute.

- **Parameters**:
  - `selector` *(string)*: CSS selector for the target elements.
  - `attribute` *(string)*: The ARIA attribute to check.
  - `context` *(Document | HTMLElement)*: (Optional) Limits the scope of the selector. Defaults to `document`.

- **Returns**: *(boolean)* `true` if all elements have the attribute, otherwise `false`.

---

### **`setAriaModal`**

Configure ARIA attributes for modal dialogs.

- **Parameters**:
  - `selector` *(string)*: CSS selector for the modal element.
  - `isOpen` *(boolean)*: `true` to open the modal, `false` to close it.
  - `context` *(Document | HTMLElement)*: (Optional) Limits the scope of the selector. Defaults to `document`.

---

### **`setAriaAlert`**

Configure ARIA attributes and content for alert elements.

- **Parameters**:
  - `selector` *(string)*: CSS selector for the alert element.
  - `message` *(string)*: The alert message to display.
  - `context` *(Document | HTMLElement)*: (Optional) Limits the scope of the selector. Defaults to `document`.

---

## 🧪 Testing

Run the comprehensive test suite to validate Pizzaria:

```bash
npm test
```

The suite covers:

- Setting, removing, and validating ARIA attributes.
- Managing ARIA roles for accessibility.
- Handling edge cases with modals and alerts.
- Batch operations on multiple elements.

---

## 📜 License

**MIT**

---

If you have ideas or want to contribute, feel free to submit a pull request or open an issue! 🍕