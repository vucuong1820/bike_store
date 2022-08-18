import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import posts from './routers/posts.js'
import mongoose from 'mongoose';
import db from './config/db/index.js';

db.connect();

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true , limit: '30mb'}))
app.use(cors());

app.use('/posts', posts);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})