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
        // res.send('You must be signed in to do that')
        res.redirect('/users/signin')
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
    if(!req.session.currentUser){
        res.render('home.ejs', {currentUser: ''})
    } else {
        res.render('home.ejs', {currentUser: req.session.currentUser.username})
    }
});


// About
router.get('/about', (req,res) => {
    res.render('about.ejs', {
        currentUser: req.session.currentUser
    })
});

// INDEX
router.get('/index', (req, res) => {
    Nomadsits.find({}, (err, foundSits) => {
        if(err){console.log(err.message)}   
        res.render("index.ejs", {
            nomadsits: foundSits,
            currentUser: req.session.currentUser
        })
    })
    
});

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs', {
        currentUser: req.session.currentUser
    })
})

router.post('/index', (req, res) => {
    if(req.body.housesit === 'on'){
        req.body.housesit = true
    } else {
        req.body.housesit = false
    }
    if(req.body.petsit === 'on'){
        req.body.petsit = true
    } else {
        req.body.petsit = false
    }
    Nomadsits.create(req.body, (err, createdNomadsits) => {
        if(err) {console.log(err.message)}
        console.log(createdNomadsits)
        res.redirect('/nomadsitters/index')
    })
})


// SHOW
router.get('/:id', (req,res) => {
    Nomadsits.findById(req.params.id, (err, foundSits) => {
        if(err){console.log(err.message)}
        res.render('show.ejs', {
            nomadsits: foundSits,
            currentUser: req.session.currentUser
        })
    })
})

// EDIT
router.get('/:id/edit', authRequired, (req,res) => {
    Nomadsits.findById(req.params.id, (err, foundSits) => {
        if(err){console.log(err.message)}
        res.render(
            'edit.ejs', {
                nomadsits: foundSits,
                currentUser: req.session.currentUser
            }
        )
    })
})

// PUT
router.put('/:id', (req, res) => {
    if(req.body.housesit === 'on') {
        req.body.housesit = true
    } else {
        req.body.housesit = false
    }
    if(req.body.petsit === 'on') {
        req.body.petsit = true
    } else {
        req.body.petsit = false
    }
    Nomadsits.findByIdAndUpdate(req.params.id, req.body, (err, updatedSit) => {
        console.log(updatedSit)
        res.redirect('/nomadsitters/index')
    })
})

// DELETE
// Auth Required
router.delete('/:id', authRequired, (req, res) => {
    Nomadsits.findByIdAndDelete(req.params.id, (err, deletedSit) => {
        if(err) {
            console.log(err.message)
        } else {
            console.log(deletedSit)
            res.redirect('/nomadsitters/index')
        }
    })
})






module.exports = router