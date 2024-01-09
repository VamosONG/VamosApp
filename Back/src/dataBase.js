require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/CREARBASEDEDATOS`, {//CREAR DB
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { User, Trip, Driver, Admin, Origin, Destination } = sequelize.models;


 User.hasMany(Trip);
 Trip.belongsTo(User);
 Admin.hasMany(User);
 User.belongsTo(Admin);
 Driver.belongsTo(Admin);
 Admin.hasMany(Driver);
 Trip.hasOne(Origin);
 Origin.belongsTo(Trip);
 Trip.hasOne(Destination);
 Destination.belongsTo(Trip);


module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};