const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Admin', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        //Eliminar?
        TotalTrips: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Eliminar?
        Conductores: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Eliminar?
        Usuarios: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        { timestamps: false });
};