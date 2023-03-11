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
router.get('/index', (req, res) => {
    Nomadsits.find({}, (err, foundSits) => {
        if(err){console.log(err.message)}   
        res.render("index.ejs", {
            nomadsits: foundSits
        })
    })
    
});

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs')
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
        res.redirect('/nomadsitters/index')
    })
})

// SHOW
router.get('/:id', (req,res) => {
    Nomadsits.findById(req.params.id, (err, foundSits) => {
        if(err){console.log(err.message)}
        res.render('show.ejs', {
            nomadsits: foundSits
        })
    })
})

// DELETE
// Auth Required
// router.delete('/:id', authRquired, (req, res) => {
//     Nomadsits.findByIdAndDelete(req.params.id, (err, deletedSit) => {
//         if(err) {
//             console.log(err.message)
//         } else {
//             console.log(deletedSit)
//             res.redirect('/nomadsitters/index')
//         }
//     })
// })
router.delete('/:id', (req, res) => {
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