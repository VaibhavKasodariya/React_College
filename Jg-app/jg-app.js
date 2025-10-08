//https://www.mongodb.com/docs/mongodb-shell/install/
//npm install express mongoose body-parser

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());




// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jg-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define Schema
const ItemSchema = new mongoose.Schema({
  id: Number ,
  first_name: String,
  last_name: String,
  course: String
});
const Stu = mongoose.model('Student', ItemSchema);

// Create (POST)
app.post('/students', async (req, res) => {
  const stu = new Stu(req.body);
  await stu.save();
  res.send(stu);
});

// Read (GET)
app.get('/students', async (req, res) => {
  const stu = await Stu.find();
  res.send(stu);
});

// Update (PUT)
app.put('/students/:id', async (req, res) => {
  const stu = await Stu.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.send(stu);
});

// Delete (DELETE)
app.delete('/students/:id', async (req, res) => {
  await Stu.findByIdAndDelete(req.params.id);
  res.send({message: 'Student deleted'});
});



// Define Schema Faculty
const ItemSchema2 = new mongoose.Schema({
  first_name: String,
  last_name: String,
  department: String
});
const Faculty = mongoose.model('Faculty', ItemSchema2);

// Create (POST)
app.post('/facultys', async (req, res) => {
  const facultys = new Faculty(req.body);
  await facultys.save();
  res.send(facultys);
});

// Read (GET)
app.get('/facultys', async (req, res) => {
  const facultys = await Faculty.find();
  res.send(facultys);
});

// Update (PUT)
app.put('/facultys/:id', async (req, res) => {
  const facultys = await Faculty.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.send(facultys);
});

// Delete (DELETE)
app.delete('/facultys/:id', async (req, res) => {
  await Faculty.findByIdAndDelete(req.params.id);
  res.send({message: 'Faculty deleted'});
});

app.listen(3000, () => console.log('Server started on port 3000'));