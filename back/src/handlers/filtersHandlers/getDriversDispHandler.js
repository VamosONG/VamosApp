const { log } = require('console');
const getDrivers = require('../../controllers/driversControllers/getDrivers');

module.exports = async (req, res) => {
    try {
        //
        const { date  } = req.body;
        let filteredDrivers = await getDrivers();

        if (date) {
            //Filtra conductores disponibles en la fecha especificada.
            filteredDrivers = await filteredDrivers?.filter((driv => {
                return(!driv.trips?.some(viaje => viaje.date.split('T')[0] === date));               
            }))
        }

        res.status(200).json(filteredDrivers); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}