const updateDriver = require('../../Controllers/driversControllers/updateDrivers');

module.exports = async (req, res) => {
    const { id } = req.params;
    const {newData} = req.body;
    try {
        const updDriver = await updateDriver(id, newData);
        res.status(200).json(updDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}