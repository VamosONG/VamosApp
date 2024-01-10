
const { Op } = require('sequelize');
const { Driver } = require('../../dataBase')


const getDrivers = async (req, res) => {

    try {
        const { name } = req.query;


        if (name) {

            const driverDBName = await Driver.findAll({ 
                where: {
                    [Op.or]:[
                        { forename: { [Op.iLike]: `%${name}%` } }, 
                        { surname: { [Op.iLike]: `%${name}%` } } 
                        
                    ]
                  }
                })
                    

            const allDrivers = driverDBName.map(driver => ({
                id: driver.id,
                forename: driver.forename,
                surname: driver.surname,
                phone: driver.phone,
                email: driver.email,
                car: driver.car,
                trips: driver.trips,
                capacityPassengers: driver.capacityPassengers,
                reviews: driver.reviews
            }))


            if (allDrivers.length === 0) return res.status(404).send({ Error: 'Driver not found' })


            return res.status(200).json(allDrivers);

        }


        else {

            const allDrivers = await Driver.findAll()
            
            res.status(200).json(allDrivers.map(driver => ({
                id: driver.id,
                forename: driver.forename,
                surname: driver.surname,
                car: driver.car,
                email: driver.email,
                trips: driver.trips,
                phone: driver.phone,
                capacityPassengers: driver.capacityPassengers,
                reviews: driver.reviews
            })))

        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getDrivers }