const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    year: { type: String, required: true },
    title: { type: String, required: true },
    institution: { type: String, required: true },
    desc: { type: String, required: true },
    type: { type: String, enum: ['education', 'experience'], required: true },
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Education', EducationSchema);
