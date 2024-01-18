const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Review = sequelize.define('Review', {

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
            allowNull: false
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
                isWithinRange(value) {
                    if (value < 1 || value > 5) {
                        throw new Error('La calificación debe estar entre 1 y 5.');
                    }
                },
            },
        },
        comments: {
            type: DataTypes.STRING, 
            allowNull: false,
        }
    },
        { timestamps: false });
    
    Review.associate = (models) => {
        Review.belongsTo(models.User, { foreignKey: 'userId' });
        Review.belongsTo(models.Driver, { foreignKey: 'driverId' });
    };

    return Review;
};