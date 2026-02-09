# Jest Workshop Submission

## Student Details
- Name: Aditi
- Roll Number: 2024-B-20022007
- GitHub Username: aditisoni-17

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: no coupon case
**What it protects against:** When no coupon is provided the function  ensures it returns the subtotal unchanged.

---

### 2. Test Name: SAVE10 coupon applies 10% discount 
**What it protects against:** Verifies the 10% discount is applied correctly and capped at 100 .

---

### 3. Test Name: FLAT50 boundary case
**What it protects against:** Confirms a flat 50 deduction is applied and that totals do not go below 0 .

---

### 4. Test Name: invalid subtotal throws error
**What it protects against:** Ensures invalid inputs (negative numbers, non-number strings, NaN) are rejected with an error

---

### 5. Test Name: coupon code is case-insensitive
**What it protects against:** Verifies coupon handling is case-insensitive .

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes / No)
yes
- GitHub Actions Run URL: 
https://github.com/aditisoni-17/workshop/actions
---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

I understood the value of writing focused tests that guard specific behaviors (including edge cases), and how CI automatically verifies those tests on every push so regressions are caught early.

