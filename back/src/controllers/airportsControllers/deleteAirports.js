const {Airport} = require('../../dataBase')

const deleteAirport = async (id) => {
    try {
        const delAir = await Airport.findOne({where: {id: id}});

        if(!delAir)
            throw new Error(`No se encontro aeropuerto con id ${id} en base de datos.`);
    else{        
        await delAir.destroy();

        return delAir;
    }
    } catch (error) {
        throw new Error(`Error al eliminar aeropuerto: ${error.message}`);
    }
}

module.exports = {deleteAirport}