const { User, Trip } = require('../../dataBase');

module.exports = async(email)=>{
    try{
        const usuario = User.findOne({
            where:{email: email},
            include: [{
                model: Trip,
                attributes: ['id', 'date', 'hour', 'origin', 'destination', 'quantityPassengers', 'price', 'stateOfTrip', 'driverId'],
            }]
        });

        if(!usuario)
            throw new Error(`No existe usuario con email ${email} en base de datos.`);

        return usuario;

    }catch(error){
        throw new Error(`Error al obtener usuario: ${error.message}`);
    }
}