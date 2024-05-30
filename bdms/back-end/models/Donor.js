const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    bloodType: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    medicalCondition: { type: String, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('Donor', donorSchema);
