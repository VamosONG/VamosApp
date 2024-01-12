const { Driver } = require('../../dataBase');


const deleteDriver = async (id) => {
    try {

        const driverDelete = await Driver.findByPk(id);

        if (!driverDelete) {
            throw new Error ("No existe ese chofer")
        }

        await driverDelete.destroy();

        return driverDelete;
    } catch (error) {

        throw new Error('Error al eliminar el chofer');
    
    }
};

module.exports = { deleteDriver };