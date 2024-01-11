const postTrip = require('../Controllers/tripsControllers/postTrip');
const Trip = require('../dataBase');

const filtersHandler = async ({ date, hour, origin, destination,passengers }) => {
    try {
        const price=getPrices(origin, destination, passengers);

        const newReservation = await postTrip(date, hour, origin, destination, passengers, price);
        //Se crea el objeto trip, con el precio estipulado por origen, destino y cant. pasajeros.

        newReservation = await Trip.update(
            {stateOfTrip: 'offer'},
            {where: {id:newReservation.id}}
        )

        return newReservation;
    } catch (error) {
        throw new Error(`Error al buscar coincidencias: ${error.message}`);
    }
};

module.exports = filtersHandler;