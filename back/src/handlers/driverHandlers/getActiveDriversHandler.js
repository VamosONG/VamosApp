const getDrivers = require('../../controllers/driversControllers/getDrivers');

module.exports = async (req, res) => {
    try {
        const { name } = req.query;
        const allDrivers = await getDrivers();
        const activeDrivers = allDrivers?.filter((dri=>dri.inactive===false));

        res.status(200).json(activeDrivers);    //Retorna el arreglo tenga elementos o no.
    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}