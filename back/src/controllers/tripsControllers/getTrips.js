const { Trip } = require('../../dataBase');

const getTrips = async () => {
    try {
        const allTrips = await Trip.findAll();

        return allTrips;
    } catch (error) {
        throw Error (error.message);
    }
};

module.exports = { getTrips };