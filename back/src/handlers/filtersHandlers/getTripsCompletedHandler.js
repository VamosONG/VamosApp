const {getTrips} = require('../../controllers/tripsControllers/getTrips');
const updateTrip = require('../../controllers/tripsControllers/updateTrip');

module.exports = async (req, res) => {
    try {
        
        const allTrips = await getTrips();
        const today = new Date();

        allTrips.forEach(viaje => {
            if(viaje.date<today.toISOString().split('T')[0])
                updateTrip(viaje.id, {stateOfTrip: 'complete'})
        });
        const completeTrips = allTrips.filter(tr=>tr.date<today.toISOString().split('T')[0])

        res.status(200).json(completeTrips);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}