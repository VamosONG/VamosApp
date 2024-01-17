const getDrivers = require('../../controllers/driversControllers/getDrivers');

module.exports = async (req, res) => {
    try {
        const { name } = req.query;
        const allDrivers = await getDrivers();

        if (name) {
            const filtered = await allDrivers?.filter((driv => driv.name && driv.name.toLowerCase().includes(name.toLowerCase)));
            //Se puede agregar apellido tambien.

            res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
        }
        else
            res.status(200).json(allDrivers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}