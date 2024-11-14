const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    vocation: String,
    role: {type: String, default: "worker"},
    data_of_brith: Date,
    phone_number: Number,
}, {timestamps: true})

exports.workerModel = mongoose.model('Worker', workerSchema)