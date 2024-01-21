const updateDriver = require('../../controllers/driversControllers/updateDrivers');

module.exports = async(req, res)=>{
    try {
        const { id, inactive } = req.body
        const updDriver = await updateDriver(id, {inactive: inactive});

        return res.status(200).json(updDriver);
    } catch (error) {
        return res.status(400).json(`Error al inactivar chofer. ${error.message}`);
    }
}