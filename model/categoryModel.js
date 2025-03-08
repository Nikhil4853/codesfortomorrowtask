const mongoose = require('mongoose');
const CategoryScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('category', CategoryScheema);

