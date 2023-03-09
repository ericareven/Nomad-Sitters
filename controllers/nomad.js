const express = require('express');
const router = express.Router();
const Nomad = require('../models/nomad')

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

// INDEX
router.get('/', (req,res) => {
    res.render('index.ejs')
});

// router.get('/', (req,res) => {

// });








module.exports = router