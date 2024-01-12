const getTrips = require('../tripsControllers/getTrips');

const getReserves = async () => {
    try {
        //Obtiene todos los viajes y filtra a los que tienen estado RESERVED.
        const allReservations = await getTrips();

        allReservations = allReservations.filter(res=>{res.stateOfTrip==='reserved'})

        if (!allReservations) {
            throw new Error('No se encontraron reservas activas.');
        }

        return allReservations;

    } catch (error) {
        throw error;
    }
};

module.exports = { getReserves };