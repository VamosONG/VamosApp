const { Trip, Driver } = require('../../dataBase');
const updateTrip = require('../tripsControllers/updateTrip');

const setDriver = async (tripId, driverId) => {
    try {
        const reserve = await Trip.findByPk(tripId);
        const newDriver = await Driver.findByPk(driverId);

        if (!reserve)
            throw new Error(`No se encontro trip en oferta con id ${tripId} en base de datos.`)

        if (!newDriver)
            throw new Error(`No se encontro conductor con id ${tripId} en base de datos.`)

        //Se modifica el chofer asignado al trip, y se pone en estado PENDIENTE.
        await updateTrip(tripId, {driverId: driverId, stateOfTrip: 'pending'}
        )
        await reserve.reload();

        return reserve;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = setDriver;