const { Trip } = require('../../dataBase');

const postTrip = async ({date, hour, origin, destination, quantityPassengers, price, driver}) => {
    try {
        
        const newTrip = await Trip.create({
            date,
            hour,
            origin,
            destination,
            quantityPassengers,
            reviews: 0, 
            price,
            stateOfTrip: 'Pending',
            driver 
        });

        return newTrip;
    } catch (error) {
        throw error;
    }
};

module.exports = { postTrip };