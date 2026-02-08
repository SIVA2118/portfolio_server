const Youtube = require('../models/Youtube');

// @desc    Get all youtube videos
// @route   GET /api/youtube
// @access  Public
exports.getYoutube = async (req, res, next) => {
    try {
        const videos = await Youtube.find().sort('order');
        res.status(200).json({ success: true, data: videos });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Create youtube video
// @route   POST /api/youtube
// @access  Private
exports.createYoutube = async (req, res, next) => {
    try {
        const video = await Youtube.create(req.body);
        res.status(201).json({ success: true, data: video });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Delete youtube video
// @route   DELETE /api/youtube/:id
// @access  Private
exports.deleteYoutube = async (req, res, next) => {
    try {
        await Youtube.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
// @desc    Update youtube video
// @route   PUT /api/youtube/:id
// @access  Private
exports.updateYoutube = async (req, res, next) => {
    try {
        const video = await Youtube.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!video) {
            return res.status(404).json({ success: false, error: 'Video not found' });
        }

        res.status(200).json({ success: true, data: video });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
