const { Price } = require('../../dataBase');
const { Op } = require('sequelize')

module.exports=async(airport, zone, quantityPassengers, value)=>{
    if(!airport || !zone || !quantityPassengers || !value)
        throw new Error('No se recibieron datos para crear la nueva zona.');
    
        const [newPrice, created]=await Price.findOrCreate({
        where:{
            airport: { [Op.iLike]: airport},
            zone: { [Op.iLike]: zone},
            quantityPassengers: quantityPassengers
        }, 
        defaults: {airport, zone, quantityPassengers, value}
    })
    if(!created)
        throw new Error(`El valor entre ${airport} y ${zone} para ${quantityPassengers} pasajeros ya existe en la base de datos.`);
   
    return newPrice;
    
}