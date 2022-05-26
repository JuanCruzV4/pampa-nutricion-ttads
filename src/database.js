const mongoose = require('mongoose');
const {MONGODB_URI} = require ('./config');
console.log(process.env.MONGODB_URI);

(async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connected to', db.connection.name);
    }catch (error){
        console.error(error);
    }
})()