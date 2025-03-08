const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/Task"
const db = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("db connected");
    } catch (error) {
        console.log(error);
    }

}

module.exports = db;