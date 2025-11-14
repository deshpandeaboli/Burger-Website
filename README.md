Burger Ordering Website — Mini Project

A fully functional multi-page Burger Ordering Website built using HTML, CSS, JavaScript, and Node.js (Express) with JSON-based user authentication.
This project simulates the complete flow of browsing a menu, adding items to cart, logging in, and generating a final bill.

Features
Responsive Multi-Page Website

Home Page

Menu Page (Add to Cart functionality)

Gallery Page

Cart Page (real-time updates)

Billing Page (summary + user details)

Login & Register Pages

User Authentication (Register + Login)

Implemented using Node.js + Express

User data stored in users.json

Duplicate email check

Basic validation

Uses Node’s fs module for reading/writing JSON files

Note:
This is not an API-based system — it uses simple backend routes for form submission.

Cart System (Frontend Logic)

Add items to cart

Update prices and quantities

Calculate totals

Pass cart data to Billing Page using JavaScript

Billing Page

Displays:

Customer name

Address

Payment mode

Delivery mode

Final bill summary
Rendered using JavaScript DOM manipulation.

Technologies Used
Frontend

HTML

CSS

JavaScript

Media Queries

DOM Manipulation

Backend

Node.js

Express.js

CORS

File System (fs)

JSON storage

Tools

VS Code

Chrome DevTools

Learning Outcomes

Building multi-page responsive websites

Handling user input and validation

Connecting frontend forms to backend routes

Working with JSON files as simple storage

Managing dynamic UI with JavaScript

Structuring real user flow: Menu → Cart → Billing

How to Run the Project (Corrected)
1️⃣ Install dependencies
npm install express cors nodemon

2️⃣ Start the backend server
nodemon sever.js

3️⃣ Open the UI

Open index.html directly in your browser.
