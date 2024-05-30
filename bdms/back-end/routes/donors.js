// back-end/routes/donors.js
const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');

// Get all donors
router.get('/', donorController.getDonors);

// Add a donor
router.post('/', donorController.createDonor);

// Update a donor
router.put('/:id', donorController.updateDonor);

// Delete a donor
router.delete('/:id', donorController.deleteDonor);

module.exports = router;
