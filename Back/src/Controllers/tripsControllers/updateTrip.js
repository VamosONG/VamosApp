const { Trip } = require('../../dataBase');

const updateTrip = async (id, date, hour, origin, destination, passengers, price, driver, reviews, stateOfTrip) => {
    try {
        const tripToUpdate = await Trip.findByPk(id);

        if (!tripToUpdate) {
            throw new Error('Trip not found');
        }

        tripToUpdate.date = date;
        tripToUpdate.hour = hour;
        tripToUpdate.origin = origin;
        tripToUpdate.destination = destination;
        tripToUpdate.quantityPassengers = passengers;
        tripToUpdate.price = price;
        tripToUpdate.driver = driver;
        tripToUpdate.reviews = reviews;
        tripToUpdate.stateOfTrip = stateOfTrip;

        await tripToUpdate.save();

        return tripToUpdate;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateTrip };