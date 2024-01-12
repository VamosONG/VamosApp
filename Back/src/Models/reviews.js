const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


    sequelize.define('Review', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true, 
            },
        },
        qualification: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        comments: {
            type: DataTypes.STRING, 
            allowNull: false,
        }
    },
        { timestamps: false });

};