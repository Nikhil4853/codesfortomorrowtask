const mongoose = require('mongoose');
const serviceScheema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true
    },
    serviceName: {
        type: String
    },
    type: {
        type: String,
        enum: ['Normal', 'VIP']
    }

})

module.exports = mongoose.model('service', serviceScheema);