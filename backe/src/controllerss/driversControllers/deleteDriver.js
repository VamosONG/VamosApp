const { Driver } = require('../../dataBase');


const deleteDriver = async (id) => {
    
    try {
        const driverDelete = await Driver.findByPk(id);

        if (!driverDelete) {
            throw new Error (`El chofer con id ${id} no existe en la base de datos.`)
        }

        await driverDelete.destroy();

        return driverDelete;
    } catch (error) {

        throw new Error(error.message);
    
    }
};

module.exports = deleteDriver;