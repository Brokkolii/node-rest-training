const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors({
  origin: 'https://www.test.de'
}));

module.exports = app;