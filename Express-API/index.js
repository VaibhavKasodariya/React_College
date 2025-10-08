// Import express
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Hello, API is running!");
});

// Example API endpoint
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Vaibhav" },
    { id: 2, name: "John" },
  ]);
});

// POST request example
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "User created", user: newUser });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
