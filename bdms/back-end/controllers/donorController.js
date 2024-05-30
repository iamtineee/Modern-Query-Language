//donorController.js
const Donor = require('../models/Donor');

// Get all donors
exports.getDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json(donors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a donor
exports.createDonor = async (req, res) => {
    const donor = new Donor({
        name: req.body.name,
        email: req.body.email,
        bloodType: req.body.bloodType,
        contactNumber: req.body.contactNumber,
        address: req.body.address,
        medicalCondition: req.body.medicalCondition,
    });

    try {
        const newDonor = await donor.save();
        res.status(201).json(newDonor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a donor
exports.updateDonor = async (req, res) => {
    try {
        const donor = await Donor.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            bloodType: req.body.bloodType,
            contactNumber: req.body.contactNumber,
            address: req.body.address,
            medicalCondition: req.body.medicalCondition,
        }, { new: true });

        if (!donor) {
            return res.status(404).json({ message: 'Donor not found' });
        }

        res.json(donor);
    } catch (error) {
        console.error('Error updating donor:', error);
        res.status(500).json({ message: error.message });
    }
};

// Delete a donor
exports.deleteDonor = async (req, res) => {
    console.log('DELETE request received for ID:', req.params.id);
    try {
        const donor = await Donor.findByIdAndDelete(req.params.id);
        if (!donor) {
            console.log('Donor not found');
            return res.status(404).json({ message: 'Donor not found' });
        }

        res.json({ message: 'Donor deleted' });
    } catch (err) {
        console.error('Error deleting donor:', err);
        res.status(500).json({ message: err.message });
    }
};
