const postTrip = require('../../controllers/tripsControllers/postTrip');

module.exports = async (req, res) => {
    const { userId, driverId, date, hour, origin, destination, quantityPassengers, price } = req.body;

    try {
        const newTrip = await postTrip(userId, driverId, date, hour, origin, destination, quantityPassengers, price);

        res.status(200).json(newTrip);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}