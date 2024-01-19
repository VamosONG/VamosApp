const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(30), 
            // allowNull: true,
        },
        surname: {
            type: DataTypes.STRING(30),
            // allowNull: true,
        },
        email: {
            type: DataTypes.STRING(50),
            // allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            // allowNull: true,
            validate: {
                isNumeric: true, 
            },
        },
        dni: {
            type: DataTypes.INTEGER, 
            // allowNull: false,
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

    User.associate = (models) => {
        
        User.hasMany(models.Review, { foreignKey: 'userId' }),
        User.hasMany(models.Trip, { foreignKey: 'userId' })
    }; 
     return User
    }
