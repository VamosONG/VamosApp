const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Driver', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(30), 
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50), 
            allowNull: false,
        },
        car: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trips: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        capacityPassengers: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        reviews: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    { timestamps: false });
};