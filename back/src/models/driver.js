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
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        driverImg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        airports: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['auto', 'camioneta', 'van', 'van plus']],
            },
        },
        carModel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        driverLicense: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carImg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carPatent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carSoat: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        circulationPermit: {
            type: DataTypes.STRING,
            allowNull: false
        },

        capacityPassengers: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
    },
        { timestamps: false });
    
    Driver.associate = (models) => {
        Driver.hasMany(models.Review, { foreignKey: 'driverId' });
        Driver.hasMany(models.Trip, { foreignKey: 'driverId' });
    };

    return Driver;
};