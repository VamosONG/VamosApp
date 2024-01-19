const {getTrips} = require('../../controllers/tripsControllers/getTrips');
const getDriverById = require('../../controllers/driversControllers/getDriverById');

module.exports = async (req, res) => {
    try {
        
        const allTrips = await getTrips();
        const pendingTrips=allTrips.filter(res=>res.stateOfTrip==='pending')

        const mapeo = await Promise.all(pendingTrips.map(async tr=>{
            const {dataValues, driverFullName} = tr;
            const chofer=await getDriverById(tr.driverId);
            const newTrip={
                ...dataValues,
                driverFullName: `${chofer.name} ${chofer.surname}`
            }

            return newTrip;
        }));

        res.status(200).json(mapeo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}