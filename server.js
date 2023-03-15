// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose') // version 6
const path = require('path')

const port = process.env.port || 3000
const Nomadsits = require('./models/nomad')
const nomadsitsSeed = require('./models/seed')
const nomadController = require('./controllers/nomad')
const usersController = require('./controllers/users')
const session = require('express-session')

const SESSION_SECRET = process.env.SESSION_SECRET

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(methodOverride('_method'));
app.use(session({
    secret: SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
}))

app.get('/', (req,res) => {
	res.redirect('/nomadsitters')
})

// Controller
app.use('/nomadsitters', nomadController)
app.use('/users', usersController)


// MONGODB ATLAS CONNECTION
mongoose.connect(process.env.DATABASE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
// Database Connection Error/Success
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is MONGO not running?'));
db.on('connected', () => console.log('MONGO is connected'));
db.on('disconnected', () => console.log('MONGO is disconnected'));


app.listen(port, () => console.log(`server is listening on port: ${port}`))