const express = require("express");

// Load environment file
require('dotenv').config()
// setup db connection
require('./config/db')

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`server is running at ${port}`);
})
