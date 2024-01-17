const {getTrips} = require('../../controllers/tripsControllers/getTrips');

module.exports = async (req, res) => {
    try {
        const allTrips = await getTrips();

        res.status(200).json(allTrips);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}