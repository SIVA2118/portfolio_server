const express = require('express');
const { receiveMessage, getMessages, deleteMessage } = require('../controllers/contactController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(protect, getMessages)
    .post(receiveMessage);

router.route('/:id')
    .delete(protect, deleteMessage);

module.exports = router;

