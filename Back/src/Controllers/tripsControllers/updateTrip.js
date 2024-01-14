const { Trip, Driver } = require('../../dataBase');

const updateTrip = async (id, newData) => {
    try {
        //esta mal hecho
        const tripToUpdate = await Trip.findByPk(id);

        if (!tripToUpdate) {
            throw new Error('Trip not found');
        }
        const oldDriverId=tripToUpdate.driverId;
        await tripToUpdate.update(newData);

        if(oldDriverId!==tripToUpdate.driverId){
            const driverId=tripToUpdate.driverId;
            const driver = await Driver.findByPk(driverId);

            if (driver)
                await driver.addTrip(tripToUpdate);
            else 
                throw new Error('No se encontró el nuevo driver.');
        }
 
        await tripToUpdate.reload();

        return tripToUpdate;
    } catch (error) {
        throw Error(`Error al actualizar trip: ${error.message}`);
    }
};

module.exports = { updateTrip };