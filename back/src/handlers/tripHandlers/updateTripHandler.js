const { updateTrip } = require('../../controllers/tripsControllers/updateTrip');

module.exports = async (req, res) => {
    const { id, userId, driverId, date, hour, origin, destination, passengers, price, driver, reviews, stateOfTrip } = req.body;
    try {
        const updTrip = await updateTrip(id, {userId, driverId, date, hour, origin, destination, passengers, price, reviews, stateOfTrip});

        res.status(200).json(updTrip);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}