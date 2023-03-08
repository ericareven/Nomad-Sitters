// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose') // version 6

// VARIABLES
const port = process.env.port || 3000

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public')); 
app.use(methodOverride('_method'));
// app.use(session({}))

// Controller
app.use('/users', usersController)

// MONGODB ATLAS CONNECTION
// mongoose.connect()




app.listen(port, () => console.log(`server is listening on port: ${port}`))