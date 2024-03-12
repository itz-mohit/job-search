const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8080;

app.use(cors());
app.use(express.json());

// mongoose connection
// const connection = mongoose.connect('mongodb://localhost:27017');

const connection =mongoose.connect('mongodb+srv://mohit:mohit42002@cluster0.r1kq5xe.mongodb.net/job?retryWrites=true&w=majority&appName=Cluster0')

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express.js and MongoDB backend!');
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Database is Connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); 
  }
  
  console.log(`Server started on port ${PORT}`);
});
