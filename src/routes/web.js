import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

const webRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    
    router.get('/', (req, res) => {
        res.send('hello world hihihi')
    })

    app.use('/', router)
}

module.exports = webRoute;