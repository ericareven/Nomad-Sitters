const mongoose = require("mongoose")

const nomadSchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: String, required: true},
})

const Nomad = mongoose.model('Nomad', nomadSchema);

module.exports = Nomad