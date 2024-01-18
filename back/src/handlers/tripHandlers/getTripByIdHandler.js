const {getTripsById} = require('../../controllers/tripsControllers/getTripsById');

module.exports = async (req, res) => {
    const { id } = req.body;
    try {
        const selectedTrips = await getTripsById(id);

        res.status(200).json(selectedTrips);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}