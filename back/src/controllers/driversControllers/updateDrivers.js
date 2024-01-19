const {Driver} = require ("../../dataBase");

const updateDriver = async (id,newData) => {
    try {
        const driverUpdate = await Driver.findByPk(id);
        
        if (!driverUpdate) {
            throw new Error(`El conductor con id ${id} no existe en la base de datos.`);
        }
        const dataUpdate = await Driver.update(newData,{
            where: {id: id}
        });
        if (!dataUpdate) {
            throw new Error(`No se actualizaron los datos al id: ${id}`);
        }
        return { message: 'Conductor actualizado exitosamente'};
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = updateDriver;