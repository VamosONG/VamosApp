const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Driver = sequelize.define('Driver', {
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
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        car: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trips: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        capacityPassengers: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        /* reviews: {
            type: DataTypes.STRING,
            allowNull: false,
        } */
    },
        { timestamps: false });
    
    Driver.associate = (models) => {
        Driver.hasMany(models.Review, { foreignKey: 'driverId' });
    }; 

    return Driver;
};