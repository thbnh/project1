import express from 'express';

const router = express.Router();

const webRoute = (app) => {
    router.get('/', (req, res) => {
        res.send('hello world')
    })

    app.use('/', router)
}

module.exports = webRoute;