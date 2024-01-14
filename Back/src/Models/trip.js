const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Trip = sequelize.define('Trip', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        driverId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true, 
            },
        },
        hour: {
            type: DataTypes.STRING, //Probe en string por si el formato generaba el problema pero sigue igual.
            allowNull: true,
            validate: {
                isValidHourFormat(value) {
                    if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
                        throw new Error('El formato de la hora debe ser HH:mm');
                    }
                },
            },
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantityPassengers: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                isNumeric: true, 
            },
        },
        price: {
            type: DataTypes.STRING, 
            allowNull: false,
            
        },
        stateOfTrip: {
            type: DataTypes.STRING, 
            allowNull: true,
            defaultValue: 'offer'
        }
    },

        { timestamps: false });

    Trip.associate = (models) => {
        Trip.belongsTo(models.User, { foreignKey: 'userId' });
        Trip.belongsTo(models.Driver, { foreignKey: 'driverId' });
    };

    return Trip;
};