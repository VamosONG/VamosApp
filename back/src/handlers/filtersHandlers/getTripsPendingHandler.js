const {getTrips} = require('../../controllers/tripsControllers/getTrips');
const getDriverNameById = require('../../controllers/filtersControllers/getDriverNameById')
const getUserNameById = require('../../controllers/filtersControllers/getUserNameById')

module.exports = async (req, res) => {
    try {
        
        const allTrips = await getTrips();
        const pendingTrips=allTrips.filter(res=>res.stateOfTrip==='pending')

        const maped = await Promise.all(pendingTrips.map(async(viaje) => ({
            id: viaje.id,
            userId: viaje.userId,
            driverId: viaje.driverId,
            date: viaje.date,
            hour: viaje.hour,
            origin: viaje.origin,
            destination: viaje.destination,
            quantityPassengers: viaje.quantityPassengers,
            price: viaje.price,
            stateOfTrip: viaje.stateOfTrip,
            UserId: viaje.UserId,
            DriverId: viaje.DriverId,
            userName: await getUserNameById(viaje.userId),
            driverName: await getDriverNameById(viaje.driverId),
          })));

        res.status(200).json(maped);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}