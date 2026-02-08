const express = require('express');
const { getAbout, updateAbout } = require('../controllers/aboutController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/').get(getAbout).post(protect, updateAbout);

module.exports = router;
