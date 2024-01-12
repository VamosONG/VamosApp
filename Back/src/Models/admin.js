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
        Conductores: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Usuarios: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        { timestamps: false });
};