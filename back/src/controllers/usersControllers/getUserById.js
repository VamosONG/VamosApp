const { User, Trip } = require('../../dataBase');

module.exports = async(id)=>{
    try{
        const usuario = await User.findByPk(id,{
            include: [{
                model: Trip,
                attributes: ['id', 'date', 'hour', 'origin', 'destination', 'quantityPassengers', 'price', 'stateOfTrip', 'driverId'],
            }]});

        if(!usuario)
            throw new Error(`No existe usuario con id ${id}`);

        return usuario;

    }catch(error){
        throw new Error(`Error al obtener usuario: ${error.message}`);
    }
}