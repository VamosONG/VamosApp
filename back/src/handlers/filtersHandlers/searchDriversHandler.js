const getDrivers = require('../../controllers/driversControllers/getDrivers');

module.exports = async (req, res) => {
    try {
        const { order, searchInput } = req.body;

        const allDrivers = await getDrivers();
        let filteredDrivers = allDrivers;
        
        if(searchInput!==''){
            filteredDrivers = filteredDrivers?.filter(chofer=>((chofer.name.toLowerCase()).includes(searchInput.toLowerCase())) 
                 || ((chofer.surname.toLowerCase()).includes(searchInput.toLowerCase()))
                 || ((chofer.email.toLowerCase()).includes(searchInput.toLowerCase()))
                 || ((chofer.carType.toLowerCase()).includes(searchInput.toLowerCase()))
                 || ((chofer.carModel.toLowerCase()).includes(searchInput.toLowerCase()))
                 || ((chofer.airports.toLowerCase()).includes(searchInput.toLowerCase()))
             )
         }

        if(order){
            if(order==="A - Z")
                filteredDrivers.sort((a,b)=> a.name.localeCompare(b.name))
            else
                filteredDrivers.sort((a,b)=> b.name.localeCompare(a.name))
        }
        
        res.status(200).json(filteredDrivers);
    } catch (error) {
        res.status(400).json(`Error al obtener filtrado de conductores: ${error.message}`);
    }
}