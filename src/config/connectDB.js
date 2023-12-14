const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('firstdatabase', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('thanh cong');
    } catch (error) {
        console.error('that bai', error);
    }
};

module.exports = connectDb;
