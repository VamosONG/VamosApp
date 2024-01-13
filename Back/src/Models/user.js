const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
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
        //Cambiamos el type a Array?
        trips:{
            type: DataTypes.STRING,
            defaultValue : 0,
            allowNull:false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        //Cambiamos el type a Array?
        activeReservations: {
            type: DataTypes.INTEGER, 
            defaultValue: 0,
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        reviews: {
            type: DataTypes.STRING,
            defaultValue: 0,
            allowNull: false,
        },
        dni: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, 
        }
    },

        { timestamps: false });

};