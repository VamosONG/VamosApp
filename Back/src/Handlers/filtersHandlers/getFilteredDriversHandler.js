const getDrivers = require('../../Controllers/driversControllers/getDrivers');

module.exports = async (req, res) => {
    try {
        //
        const { city, cantPass  } = req.body;
        const filteredDrivers = await getDrivers();

        if (city) {
            //Filtra conductores por ciudad.
            filteredDrivers = await filteredDrivers?.filter((driv => driv.city && driv.city.toLowerCase().includes(city.toLowerCase)));
        }
        if (cantPass) {
            //Filtra conductores por capacidad de pasajeros.
            filteredDrivers = await filteredDrivers?.filter((driv => driv.capacityPassengers>=cantPass));
        }

        if(filteredDrivers)
            res.status(200).json(filteredDrivers); 
        else    
            res.status(400).send(`No se encontraron conductores en ${city} con capacidad para ${cantPass} pasajeros.`);   

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}