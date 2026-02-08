const express = require('express');
const { getServices, createService, deleteService, updateService } = require('../controllers/servicesController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/').get(getServices).post(protect, createService);
router.route('/:id').put(protect, updateService).delete(protect, deleteService);

module.exports = router;
