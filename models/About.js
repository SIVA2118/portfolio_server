const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    degree: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    freelance: { type: String, required: true },
    bio: { type: String, required: true },
    roles: { type: [String], default: ["Full Stack Developer", "MCA Student", "UI/UX Designer"] },
    homeDescription: { type: String },
    profileImage: { type: String },
    resumeLink: { type: String },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('About', AboutSchema);
