const {Driver, } = require('../dataBase')

const getDrivers = async (req, res) =>{

    try {
        const { name } = req.query;


        if(name){

        const driverDBName = await Driver.findAll({where:{name:{[Op.iLike]: `%${name}%`}}})
                                       
        
        const allDrivers = driverDBName.map(driver=>({
            id: driver.id,
            nombre: driver.nombre,
            apellido: driver.apellido,
            email: driver.email,
            vehiculo: driver.vehiculo,
            }))
                   

            if(allDrivers.length === 0) return  res.status(404).send({Error: 'Driver not found'})


            return res.status(200).json(allDrivers);

        }
        

        else {  
            const allDriverDB = await Driver.findAll()
            const allDriverDBMap = allDriverDB.map(driver =>({
                id: driver.id,
                nombre: driver.nombre,
                apellido: driver.apellido,
                email: driver.email,
                vehiculo: driver.vehiculo,
            }))
    
            
            res.status(200).json(allDriverDBMap)
        }
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {getDrivers}