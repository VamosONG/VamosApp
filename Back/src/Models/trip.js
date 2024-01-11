const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Trip', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        reservaID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hour:{
            type: DataTypes.TIME,
            allowNull: false,
        },
        origin:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantityPassengers:{
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        reviews: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        price: {
            type : DataTypes.NUMBER,
            allowNull: false
        },
        stateOfTrip:{
            type: DataTypes.BOOLEAN
          }
    },
        { timestamps: false });
};