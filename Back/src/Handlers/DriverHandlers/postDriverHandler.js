const postDriver = require('../Controllers/driverController/postDriver');

module.exports = async (req, res) => {
    const { name, surname, car, phone, capacityPassengers, email } = req.body;
    //Trips y reviews se inician en 0.
    try {
        if (!name || !surname || !car || !phone || !capacityPassengers || !email){
            return res.status(400).send("Faltan datos");
        }
        const newDriver = await postDriver(name, surname, car, phone, capacityPassengers, email);

        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}