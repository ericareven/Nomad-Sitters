const express = require('express');
const router = express.Router();
const Nomadsits = require('../models/nomad')
const nomadsitsSeed = require('../models/seed')

// custom middleware to require authentication on routes
const authRequired = (req, res, next) => {
    if(req.session.currentUser) {
        next()
    } else {
        // if there is no user
        res.send('You must be signed in to do that')
        // or 
        // res.redirect('/users/signin')
    }
}

// ROUTES
// SEED
// Nomadsits.create(nomadsitsSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added seed data')
// })

// Nomadsits.collection.drop();

Nomadsits.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} sits in this database`)
})


// Home
router.get('/', (req,res) => {
    res.render('home.ejs')
});

// INDEX
router.get('/index', (req, res) => { //
    res.render("index.ejs", {
        allNomadsits: Nomadsits
    })
});









module.exports = router