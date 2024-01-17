const {getTrips} = require('../../controllers/tripsControllers/getTrips');

module.exports = async (req, res) => {
    try {
        
        const allTrips = await getTrips();
        const today = new Date();
console.log(today);
        const completeTrips = allTrips.filter(tr=>tr.date<today.toISOString().split('T')[0])

        res.status(200).json(completeTrips);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}