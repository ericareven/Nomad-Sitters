const mongoose = require("mongoose")

const nomadSchema = new mongoose.Schema({
    country: {type: String, required: true},
    city: {type: String, required: true},
    housesit: Boolean,
    petsit: Boolean,
    title: {type: String, required: true},
    date: {type: String, required: true},
})

const Nomadsits = mongoose.model('Nomadsits', nomadSchema);

module.exports = Nomadsits