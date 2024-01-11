const { Op } = require('sequelize');
const { Airport } = require('../../dataBase');

const postAirport = async (name) =>{
    try {
        if(!name)  throw new Error('Name is required for creating an airport');

        const [newAirport, created] = await Airport.findOrCreate({
            where: { name :{ [Op.iLike]: name} }, defaults: { name: name }
        })

        if(!created) throw new Error('Airport already exists');
        
    
       return newAirport;


    } catch (error) {
        throw new Error(error.message);
    }



}

module.exports = { postAirport }