const express = require('express');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());  // To parse incoming JSON requests

// Example route
app.get('/', (req, res) => {
  res.send('Hello, Toplife Construction!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
