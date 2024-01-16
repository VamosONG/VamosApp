const updateDriver = require('../../Controllers/driversControllers/updateDrivers');

module.exports = async (req, res) => {
    const { id, name, surname, car, phone, capacityPassengers, trips, reviews } = req.body;
    try {
        const updDriver = await updateDriver(id,{name, surname, car, phone, capacityPassengers, trips, reviews});

        res.status(200).json(updDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}