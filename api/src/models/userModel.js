const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    role: {type: String, default: 'user'},
    data_of_brith: Date,
    phone_number: Number,
    services: {type: mongoose.Schema.Types.ObjectId, ref: 'Services'},
    analysis_results: String,
}, {timestamps: true})

exports.userModel = mongoose.model('User', userSchema)