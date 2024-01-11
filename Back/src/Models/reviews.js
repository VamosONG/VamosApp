const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Reviews', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        qualification: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: false, 
        }
    },
        { timestamps: false });
};