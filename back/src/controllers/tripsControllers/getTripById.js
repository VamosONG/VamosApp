const { Trip } = require('../../dataBase'); 


const getTripById = async (id) => {
    
    try {
        const trip = await Trip.findByPk(id);

        if (!trip) {
            throw new Error(`Error, no existe viaje con id ${id} en BD.`)
        }

        return trip;
    } catch (error) {
        throw new Error(`Error al obtener viaje: ${error.message}`)
    }
};

module.exports = {
    getTripById,
};