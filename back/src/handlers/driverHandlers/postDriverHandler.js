const postDriver = require('../../controllers/driversControllers/postDrivers');

module.exports = async (req, res) => {
    const { name, surname, email, birthday, dni, phone, driverImg, airports, carType, carModel, driverLicense, carImg, carPatent, carSoat, circulationPermit, capacityPassengers } = req.body;
    //trips y reviews se inician en 0.
    try {
        if (!name || !surname || !email || !birthday || !dni || !phone || !driverImg){
            return res.status(400).send("Faltan datos");
        }
        const newDriver = await postDriver(name, surname, email, birthday, dni, phone, driverImg, airports, carType, carModel, driverLicense, carImg, carPatent, carSoat, circulationPermit, capacityPassengers );

        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}