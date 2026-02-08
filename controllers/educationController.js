const Education = require('../models/Education');

// @desc    Get all education/experience
// @route   GET /api/education
// @access  Public
exports.getEducation = async (req, res, next) => {
    try {
        const items = await Education.find().sort('order');
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Create education/experience
// @route   POST /api/education
// @access  Private
exports.createEducation = async (req, res, next) => {
    try {
        const item = await Education.create(req.body);
        res.status(201).json({ success: true, data: item });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Update education/experience
// @route   PUT /api/education/:id
// @access  Private
exports.updateEducation = async (req, res, next) => {
    try {
        const item = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: item });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Delete education/experience
// @route   DELETE /api/education/:id
// @access  Private
exports.deleteEducation = async (req, res, next) => {
    try {
        await Education.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
