import mongoose from "mongoose";

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/bike_store');
        console.log('MONGODGB: connect successfully');
    } catch (error) {
        console.log('MONGODGB: connect failed');
    }
}

const db = { connect }

export default db;