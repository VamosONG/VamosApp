const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Driver', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        forename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        car:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        trips:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        capacityPassengers:{
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        reviews: {
            type: DataTypes.TEXT,
            allowNull: false, 
        }
    },
        { timestamps: false });
};