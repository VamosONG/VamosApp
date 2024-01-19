const { Driver } = require('../../dataBase');

module.exports = async(id)=>{
    try{
        const chofer = Driver.findByPk(id);

        if(!chofer)
            throw new Error(`No existe chofer con id ${id}`);

        return chofer;

    }catch(error){
        throw new Error(`Error al obtener chofer: ${error.message}`);
    }
}