const { Op } = require('sequelize');
const { Airport, Zone } = require('../../dataBase')

const getAirports = async (req, res) => {

    try {
        const { destination } = req.query;


        if (destination) {

            const zonePlace = await Zone.findAll({ 
                where: {
                    [Op.or]:[
                        { place: { [Op.iLike]: `%${destination}%` } }  
                        
                    ]
                  }
                })

            const airportPlace = await Airport.findAll({ 
                where: {
                    [Op.or]:[
                        { place: { [Op.iLike]: `%${destination}%` } }  
                        
                    ]
                  }
                })
            

            const allDestinations = [...zonePlace.map(destination => ({
                id: destination.id,
                place: destination.place
            })), ...airportPlace.map(destination => ({
                id: destination.id,
                place: destination.place
            }))]


            if (allDestinations.length === 0) return res.status(404).send({ Error: 'No destinations' })


            return res.status(200).json(allDestinations);

        }


        else {        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getAirports }