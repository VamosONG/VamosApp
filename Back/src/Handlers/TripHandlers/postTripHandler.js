const {postTrip} = require('../../Controllers/tripsControllers/postTrip');

module.exports = async (req, res) => {
    const { date, hour, origin, destination, quantityPassengers, price, driver } = req.body;

    try {
        const newTrip = await postTrip({date, hour, origin, destination, quantityPassengers, price, driver});

        res.status(200).json(newTrip);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}