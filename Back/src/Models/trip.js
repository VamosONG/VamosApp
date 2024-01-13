const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Trip', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        reservationId: {
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true, 
            },
        },
        hour: {
            type: DataTypes.TIME, 
            allowNull: false,
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantityPassengers: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        reviews: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        stateOfTrip: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },

        { timestamps: false });

};