const { Trip } = require('../../dataBase');

const getTrips = async () => {
    try {
        const trips = await Trip.findAll();

        const allTrips = trips.map(tripa => ({
            id: tripa.id,
            reservaID: tripa.reservaID,
            date: tripa.date,
            hour: tripa.hour,
            origin: tripa.origin,
            destination: tripa.destination,
            quantityPassengers,
            reviews: tripa.reviews,
            price: tripa.price,
            stateOfTrip: tripa.stateOfTrip
        }));

        if (allTrips.length === 0) {
            throw new Error('No trips');
        }

        return allTrips;
    } catch (error) {
        throw error;
    }
};

module.exports = { getTrips };