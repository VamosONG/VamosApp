const {Driver} = require ("../../dataBase");

const updateDriver = async(id,newData) => {
    try {
        const driverUpdate = await Driver.findByPk(id);

        if (!driverUpdate) {
            throw new Error("Chofer inexistente");
        }

        await driverUpdate.update(newData);
        await driverUpdate.reload();

        return driverUpdate;
    } catch (error) {
        throw new Error('Error al actualizar el chofer');
    }
}

module.exports = updateDriver;