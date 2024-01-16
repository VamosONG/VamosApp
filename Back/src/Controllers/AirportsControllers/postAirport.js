const { Op } = require('sequelize');
const { Airport } = require('../../dataBase');

const postAirport = async (place) =>{
    try {
        if(!place)  throw new Error('Name is required for creating an airport');

        const [newAirport, created] = await Airport.findOrCreate({
            where: { place :{ [Op.iLike]: place} }, defaults: { place: place }
        })

        if(!created) throw new Error('Airport already exists');
        
    
       return newAirport;


    } catch (error) {
        throw new Error(error.message);
    }



}

module.exports = { postAirport }