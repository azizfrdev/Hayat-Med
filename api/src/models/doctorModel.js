const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    fullName: String,
    username: String,
    password: String,
    data_of_brith: Date,
    experience: String,
    role: {type: String, default: 'doctor'}
}, {timestamps: true})

exports.doctorModel = mongoose.model('Doctor', doctorSchema)