const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Admin', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        TotalTrips: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Drivers: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Users: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        { timestamps: false });
};