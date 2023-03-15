const mongoose = require("mongoose")

const nomadSchema = new mongoose.Schema({
    country: {type: String, required: true},
    city: {type: String, required: true},
    housesit: Boolean,
    petsit: Boolean,
    title: {type: String, required: true},
    date: {type: String, required: true},
    img1: String,
    img2: String,
    img3: String,
    img4: String,
})

const Nomadsits = mongoose.model('Nomadsits', nomadSchema);

module.exports = Nomadsits