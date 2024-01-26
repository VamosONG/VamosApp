const { User, Trip, Review } = require('../../dataBase');

const getUsers = async () => {
    try {

        const users = await User.findAll({
            include: [
                {
                    model: Review,
                    attributes: ['id', 'driverId', 'date', 'qualification', 'comments'],
                },
                {
                    model: Trip, 
                    attributes: ['id', 'date', 'hour', 'origin', 'destination', 'quantityPassengers', 'price', 'stateOfTrip', 'driverId'],
                }
            ]
        });           

        return users;

    } catch (error) {
        throw Error(`Error al obtener usuarios: ${error.message}`); 
    }
};

module.exports = getUsers;