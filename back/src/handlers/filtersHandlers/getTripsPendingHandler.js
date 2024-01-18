const {getTrips} = require('../../controllers/tripsControllers/getTrips');

module.exports = async (req, res) => {
    try {
        
        const allTrips = await getTrips();
        const pendingTrips=allTrips.filter(res=>res.stateOfTrip==='pending')

        res.status(200).json(pendingTrips);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}