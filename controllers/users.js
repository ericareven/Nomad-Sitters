const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// import User model
const User = require('../models/users')

router.get('/register', (req,res) => {
    res.render('users/register.ejs')
})

router.post('/register', (req,res) => {
    // encrypt password
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    // check if username is taken
    User.findOne({username: req.body.username}, (err, userExists) => {
        if(userExists){
            res.send('that username is already taken')
        } else { User.create(req.body, (err, createdUser) => {
            console.log(createdUser)
            // sign user in
            req.session.currentUser = createdUser
            res.redirect('/nomadsitters')
            })
        }
    })
})

router.get('/signin', (req, res) => {
    res.render('users/signin.ejs')
})

router.post('/signin', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(foundUser) {
            const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
            if(validLogin) {
                req.session.currentUser = foundUser
                res.redirect('/nomadsitters')
            } else {
                res.send("Invalid username or password")
            }
        } else {
            res.send("Invalid username or password")
        }
    })
})


// DESTROY SESSION ROUTE --- Sign Out
router.get('/signout', (req, res) => {
    req.session.destroy()
    res.redirect('/nomadsitters')
})


module.exports = router