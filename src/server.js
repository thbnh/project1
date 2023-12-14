import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import route from './routes/web';
import connectDB from './config/connectDB'

// help to use process.env
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// config/viewEngine
viewEngine(app);

// routes
route(app);

connectDB();

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
