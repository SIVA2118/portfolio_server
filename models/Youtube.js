const mongoose = require('mongoose');

const YoutubeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    link: { type: String, required: true },
    thumbnail: { type: String },
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Youtube', YoutubeSchema);
