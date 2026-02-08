const express = require('express');
const { getYoutube, createYoutube, deleteYoutube, updateYoutube } = require('../controllers/youtubeController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/').get(getYoutube).post(protect, createYoutube);
router.route('/:id').put(protect, updateYoutube).delete(protect, deleteYoutube);

module.exports = router;
