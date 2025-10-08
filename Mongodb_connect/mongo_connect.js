// server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Example Schema & Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", UserSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express & MongoDB!");
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Start server
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
