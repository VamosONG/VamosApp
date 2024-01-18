const { Op } = require('sequelize');
const { Airport } = require('../../dataBase');

const getAirports = async (place) => {
    try {
        if(place){
            
            const airportPlace = await Airport.findAll({
                where: 
                    
                        { place: { [Op.iLike]: `%${place}%` } }
                    
                
            });
            const allDestinations = airportPlace.map(destination => ({
                id: destination.id,
                place: destination.place
            }));
                    
            
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