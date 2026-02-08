const About = require('../models/About');

// @desc    Get about info
// @route   GET /api/about
// @access  Public
exports.getAbout = async (req, res, next) => {
    try {
        const about = await About.findOne();
        res.status(200).json({ success: true, data: about });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Update about info
// @route   POST /api/about
// @access  Private
exports.updateAbout = async (req, res, next) => {
    try {
        let about = await About.findOne();
        if (about) {
            about = await About.findByIdAndUpdate(about._id, req.body, { new: true });
        } else {
            about = await About.create(req.body);
        }
        res.status(200).json({ success: true, data: about });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
