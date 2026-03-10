const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, required: true },
    icon: { type: String },
    description: { type: String, default: '' },
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Skill', SkillSchema);
