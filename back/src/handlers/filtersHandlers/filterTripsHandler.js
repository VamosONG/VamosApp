const {getTrips} = require('../../controllers/tripsControllers/getTrips');
const getDriverById = require('../../controllers/driversControllers/getDriverById');
const getUserById = require('../../controllers/usersControllers/getUserById');

module.exports = async (req, res) => {
    try {
        const { order, searchInput, tripState } = req.body;

        const allTrips = await getTrips();
        let filteredTrips = allTrips;
        
        if(tripState==="reserved"){
            filteredTrips = allTrips?.filter(res=>res.stateOfTrip==='reserved');
console.log('entre reserved: ',filteredTrips);
            filteredTrips = await Promise.all(filteredTrips?.map(async tr=>{
                const {dataValues, userEmail} = tr;
                const usuario = await getUserById(tr.userId)
                const newTrip={
                    ...dataValues,
                    userEmail: `${usuario.email}`
                }
    
                return newTrip;
            }));
        }else{
            
            filteredTrips = allTrips.filter(res=>res.stateOfTrip===tripState);

            filteredTrips = await Promise.all(filteredTrips?.map(async tr=>{
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
        
        }

        if(searchInput!==''){
           filteredTrips = filteredTrips?.filter(viaje=>((viaje.userEmail.toLowerCase()).includes(searchInput.toLowerCase())) 
                || ((viaje.origin.toLowerCase()).includes(searchInput.toLowerCase()))
                || ((viaje.destination.toLowerCase()).includes(searchInput.toLowerCase()))
            )
        }

        if(order){
            if(order.toLowerCase()==="menos recientes")
                filteredTrips.sort((a,b)=> a.date - b.date)
            else
                filteredTrips.sort((a,b)=> b.date - a.date)
        }
        
        res.status(200).json(filteredTrips);
    } catch (error) {
        res.status(400).json(`Error al obtener filtrado de viajes: ${error.message}`);
    }
}