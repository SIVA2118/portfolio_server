const express = require('express');
const { login, register } = require('../controllers/adminController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/login', login);
router.post('/register', protect, register); // Protected: Only existing admins can create new ones

module.exports = router;
