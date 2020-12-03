const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test',
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log('db connection established successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connectToDb
}