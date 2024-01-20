const {Driver} = require ("../../dataBase");

const updateDriver = async (id,newData) => {
    try {
        const driverUpdate = await Driver.findByPk(id);
        
        if (!driverUpdate) {
            throw new Error(`El conductor con id ${id} no existe en la base de datos.`);
        }
        
        await driverUpdate.update(newData);
        await driverUpdate.reload();
        
        return driverUpdate;
    } catch (error) {
        throw new Error(`Error al actualizar: ${error.message}`);
    }
}

module.exports = updateDriver;