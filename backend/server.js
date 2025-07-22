const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());  // To parse incoming JSON requests
app.use(express.urlencoded({ extended: true }));  // To parse incoming URL-encoded data (form submissions)

// Backend routes
const projectRoutes = require('./routes/projects'); // Projects/Portfolio Routes
app.use('/api/projects', projectRoutes);

app.use('/projects', projectRoutes);

const contactRoutes = require('./routes/contact'); // Contact Routes
app.use('/contact', contactRoutes);


// MongoDB connection setup
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch(err => console.error("MongoDB connection error:", err));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
