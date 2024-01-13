const postDriver = require('../../Controllers/driversControllers/postDrivers');

module.exports = async (req, res) => {
    const { name, surname, car, phone, capacityPassengers, email, city } = req.body;
    //Trips y reviews se inician en 0.
    try {
        if (!name || !surname || !car || !phone || !capacityPassengers || !email || !city){
            return res.status(400).send("Faltan datos");
        }
        const newDriver = await postDriver(name, surname, car, phone, capacityPassengers, email, city);

        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}