const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrParser: true, useUnifiedTopology: true },
  () => {
    console.log(`Connected to MongoDB`);
  }
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Backend server is running!`);
});
