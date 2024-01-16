const getDrivers = require('../../Controllers/driversControllers/getDrivers');

module.exports = async (req, res) => {
    try {
        //
        const { airports, quantityPassengers  } = req.body;
        let filteredDrivers = await getDrivers();
        
        if (airports) {
            //Filtra conductores por ciudad.
            //Ver, muestra todos los que su airports INCLUYE lo pasado por parametro.
            filteredDrivers = await filteredDrivers?.filter((driv => driv.airports && driv.airports.toLowerCase().includes(airports.toLowerCase())));
        }

        if (quantityPassengers) {
            //Filtra conductores por capacidad de pasajeros.
            filteredDrivers = await filteredDrivers?.filter((driv => driv.capacityPassengers>=quantityPassengers));
        }

        if(filteredDrivers)
            res.status(200).json(filteredDrivers); 
        else    
            res.status(400).send(`No se encontraron conductores en ${airports} con capacidad para ${cantPass} pasajeros.`);   

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}