const setInactiveState = require("../../controllers/driversControllers/setInactiveState");


 const deleteLogicDrivers = async (req, res) => {
    const { id } = req.params
    try {
        // Realiza la actualización del campo "inactive" en la base de datos
       const response = await setInactiveState(id)
       return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json(`Error al inactivar chofer. ${error.message}`);
    }
}

module.exports = deleteLogicDrivers;