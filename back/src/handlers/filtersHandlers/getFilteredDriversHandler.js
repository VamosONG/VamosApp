const getDrivers = require('../../controllers/driversControllers/getDrivers');

module.exports = async (req, res) => {
    try {
        //
        const { searchInput, airports, quantityPassengers/* , date  */} = req.body;
        let filteredDrivers = await getDrivers();

        filteredDrivers=filteredDrivers.filter(driver=>driver.driverState===true && !driver.inactive);

        //Filtra por busqueda: nombre, apellido, email, tipo de auto, modelo, aeropuerto.
        if(searchInput){
            filteredDrivers = filteredDrivers?.filter(chofer=>((chofer.name.toLowerCase()).includes(searchInput.toLowerCase())) 
                 || ((chofer.surname.toLowerCase()).includes(searchInput.toLowerCase()))
                 || ((chofer.email.toLowerCase()).includes(searchInput.toLowerCase()))
                 || ((chofer.carType.toLowerCase()).includes(searchInput.toLowerCase()))
                 || ((chofer.carModel.toLowerCase()).includes(searchInput.toLowerCase()))
                 || ((chofer.airports.toLowerCase()).includes(searchInput.toLowerCase()))
             )
         }
        
        if (airports) {
            //Filtra conductores por ciudad.
            //Ver, muestra todos los que su airports INCLUYE lo pasado por parametro.
            filteredDrivers = await filteredDrivers?.filter((driv => driv.airports && driv.airports.toLowerCase().includes(airports.toLowerCase())));
        }

        if (quantityPassengers) {
            //Filtra conductores por capacidad de pasajeros.
            filteredDrivers = await filteredDrivers?.filter((driv => driv.capacityPassengers>=quantityPassengers));
        }

        /* if (date) {
            //Filtra conductores disponibles en la fecha especificada.
            filteredDrivers = await filteredDrivers?.filter((driv => {
                return(!driv.trips?.some(viaje => viaje.date.split('T')[0] === date));               
            }))
        } */

        if(filteredDrivers)
            res.status(200).json(filteredDrivers); 
        else    
            res.status(400).send(`No se encontraron conductores en ${airports} con capacidad para ${cantPass} pasajeros.`);   

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}