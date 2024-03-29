const {getTrips} = require('../../controllers/tripsControllers/getTrips');
const getDriverById = require('../../controllers/driversControllers/getDriverById');
const getUserById = require('../../controllers/usersControllers/getUserById');

module.exports = async (req, res) => {
    try {
        
        const allTrips = await getTrips();
        const pendingTrips=allTrips.filter(res=>res.stateOfTrip==='pending')

        const mapeo = await Promise.all(pendingTrips.map(async tr=>{
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