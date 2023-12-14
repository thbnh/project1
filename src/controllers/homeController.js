import db from '../models';

const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('----------------', data);
        return res.render('home', {
            data: JSON.stringify(data),
        });
    } catch (e) {
        console.log(e);
    }
};

const getAboutPage = (req, res) => {
    res.render('test/about.ejs');
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
};
