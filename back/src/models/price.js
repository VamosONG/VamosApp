const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Price', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        airport: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        zone: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        quantityPassengers: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        value: {
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        }
    },
        { timestamps: false });
};