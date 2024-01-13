require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/vamos`, {
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


const { User, Trip, Driver, Admin, Zone, Airport, Review } = sequelize.models;
User.hasMany(Review);
 Review.belongsTo(User);

 User.hasMany(Trip);
 Trip.belongsTo(User);
 Admin.hasMany(User);
 User.belongsTo(Admin);
 Driver.belongsTo(Admin);
 Admin.hasMany(Driver);
 Trip.hasOne(Zone);
 Zone.belongsTo(Trip);
 Trip.hasOne(Airport);
 Airport.belongsTo(Trip);

 Driver.hasMany(Review);
 Review.belongsTo(Driver);


module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};