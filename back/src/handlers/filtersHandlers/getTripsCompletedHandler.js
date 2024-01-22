const {getTrips} = require('../../controllers/tripsControllers/getTrips');
const updateTrip = require('../../controllers/tripsControllers/updateTrip');
const getDriverById = require('../../controllers/driversControllers/getDriverById');

module.exports = async (req, res) => {
    try {
        
        const allTrips = await getTrips();
        const today = new Date();

        allTrips.forEach(viaje => {
            if(viaje.date<today.toISOString().split('T')[0])
                updateTrip(viaje.id, {stateOfTrip: 'completed'})
        });
        const completeTrips = allTrips?.filter(tr=>(tr.stateOfTrip==='completed') && (tr.driverId));

        const mapeo = await Promise.all(completeTrips?.map(async tr=>{
            const {dataValues, driverFullName, userEmail} = tr;
            const chofer=await getDriverById(tr.driverId);
            const usuario = await getUserById(tr.userId)
            const newTrip={
                ...dataValues,
                driverFullName: `${chofer.name} ${chofer.surname}`,
                userEmail: `${usuario.email}`
            }

            return newTrip;
        }));

        res.status(200).json(mapeo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}