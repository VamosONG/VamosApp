const {getTrips} = require('../../controllers/tripsControllers/getTrips');
const updateTrip = require('../../controllers/tripsControllers/updateTrip');
const getDriverById = require('../../controllers/driversControllers/getDriverById');
const getUserById = require('../../controllers/usersControllers/getUserById');
const getReviewById = require('../../controllers/reviewsControllers/getReviewById');



module.exports = async (req, res) => {
    try {
        
        const allTrips = await getTrips();
        const today = new Date();

        allTrips.forEach(viaje => {
            if(viaje.date<today.toISOString().split('T')[0]){
                if(viaje.stateOfTrip==='pending')
                    updateTrip(viaje.id, {stateOfTrip: 'completed'})
            }
        });
        const completeTrips = allTrips?.filter(tr=>(tr.stateOfTrip==='completed') && (tr.driverId));
        const mapeo = await Promise.all(completeTrips?.map(async tr=>{
            const {dataValues, driverFullName, userEmail} = tr;
            const chofer=await getDriverById(tr.driverId);
            const usuario = await getUserById(tr.userId)
            const reviews = await getReviewById(tr.userId)
            console.log(reviews)
            const puntaje=reviews.find((revi)=>revi.driverId==tr.driverId && revi.date==tr.date)
            console.log(puntaje)
            if(puntaje!=undefined){
                const newTrip={
                    ...dataValues,
                    driverFullName: `${chofer.name} ${chofer.surname}`,
                    userEmail: `${usuario.email}`,
                    puntaje: `${puntaje.qualification}`,
            }
                return newTrip;
            }else{
                const newTrip={
                    ...dataValues,
                    driverFullName: `${chofer.name} ${chofer.surname}`,
                    userEmail: `${usuario.email}`,
                    puntaje: -1,
                }
                return newTrip;
            }

        }));

        res.status(200).json(mapeo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
