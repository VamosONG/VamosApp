const { Trip } = require('../../dataBase');

const deleteTrip = async (id) => {
    try {
        const tripToDelete = await Trip.findByPk(id);

        if (!tripToDelete) {
            throw new Error('Trip not found');
        }

        await tripToDelete.destroy();

        return tripToDelete;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteTrip };