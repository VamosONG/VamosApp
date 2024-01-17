const { Driver, Review, Trip } = require('../../dataBase')


const getDrivers = async () => {

    try {
        const allDrivers = await Driver.findAll({
        include: [
            {
                model: Review,
                attributes: ['id', 'userId', 'date', 'qualification', 'comments'],
            },
            {
                model: Trip,
                attributes: ['id', 'userId', 'date', 'hour', 'origin', 'destination', 'quantityPassengers', 'price', 'stateOfTrip'], 
            }
            ]
        });

        return allDrivers;

    } catch (error) {
        throw Error (`Error al obtener los conductores: ${error.message}`)
    }
}

module.exports = getDrivers;