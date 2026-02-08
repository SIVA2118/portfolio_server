const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
    desc: { type: String, required: true },
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Service', ServiceSchema);
