const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Airport', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        place: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    },
        { timestamps: false });
};