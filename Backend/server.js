require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const hospitalRoutes = require('./routes/hospitalRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use('/api/v1/hospitals', hospitalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
