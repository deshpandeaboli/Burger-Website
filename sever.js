const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 2011;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // 👈 serve HTML, CSS, JS

const USERS_FILE = './users.json';

function getUsers() {
  if (fs.existsSync(USERS_FILE)) {
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
  }
  return [];
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.post('/register', (req, res) => {
  const user = req.body;
  let users = getUsers();
  const existing = users.find(u => u.email === user.email);
  if (existing) {
    return res.status(400).json({ message: 'User already registered!' });
  }
  users.push(user);
  saveUsers(users);
  console.log('✅ Registered user:', user);
  res.json({ message: 'Registration successful!' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const foundUser = users.find(u => u.email === email && u.password === password);
  if (foundUser) {
    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
