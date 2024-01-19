const { Trip } = require('../../dataBase'); 


const getTripById = async (id) => {
    
    console.log(id)
    try {
        const trip = await Trip.findAll({
            where: { userId: id },
            include: [
                // Include any associations you want to retrieve, e.g., User, Driver
                // { model: User },
                // { model: Driver },
            ],
        });

        if (!trip) {
            return null
        }

        return trip;
    } catch (error) {
        throw error
    }
};

module.exports = {
    getTripById,
};