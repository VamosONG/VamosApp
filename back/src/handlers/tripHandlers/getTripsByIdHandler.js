const {getTripById} = require('../../controllers/tripsControllers/getTripById');

module.exports = async (req, res) => {
    try {
        const { id } = req.body;
        const oneTrip = await getTripById(id);


        res.status(200).json(oneTrip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}