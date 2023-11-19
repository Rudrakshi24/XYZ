const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

console.log('DB', DB);

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch(err => {
    console.error(err);
});