const { Op } = require('sequelize');
const { Airport } = require('../../dataBase');

const getAirports = async (name) => {
    try {
        if(name){
            
            const airportPlace = await Airport.findAll({
                where: {
                    [Op.or]: [
                        { place: { [Op.iLike]: `%${name}%` } }
                    ]
                }
            });
            const allDestinations = airportPlace.map(destination => ({
                id: destination.id,
                place: destination.place
            }));
            
            if (allDestinations.length === 0) {
                throw new Error('No Airports found');
            }
            
            return allDestinations;
        }
        else {
            const allAirportPlace = await Airport.findAll();

            return allAirportPlace.map(destination => ({
                id: destination.id,
                place: destination.place
            }));
        }
        

    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getAirports;