const mongoose = require('mongoose');
const priceScheema = new mongoose.Schema({
    serviceId: {
        type: String,
        required: true
    },
    duration: {
        type: String
    },
    price: {
        type: String
    },
    type: {
        type: String,
        enum: ['Hourly', 'Weekly', 'Monthl']
    }

})

module.exports = mongoose.model('price', priceScheema);

