const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', require('./routes/posts'));

module.exports = app;
