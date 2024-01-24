const {getTrips} = require('../tripsControllers/getTrips');

const getReserves = async () => {
    try {
        //Obtiene todos los viajes y filtra a los que tienen estado RESERVED.
        const allTrips = await getTrips();
        const allReservations = allTrips.filter(res=>res.stateOfTrip==='reserved')

        if (!allReservations) {
            throw new Error('No se encontraron reservas activas.');
        }

        return allReservations;

    } catch (error) {
        throw new Error(`Error al obtener reservas: ${error.message}`);
    }
};

module.exports = getReserves;