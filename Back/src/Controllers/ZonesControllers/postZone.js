const { Zone } = require('../../Models/zone');
const { Op } = require('sequelize')

module.exports=async(name)=>{
    if(!name)
        throw new Error('No se recibieron datos para crear la nueva zona.');

    const [newZone, created]=await Zone.findOne({
        where:{place: { [Op.iLike]: name}}, defaults: {name: name}
    })
    if(!created)
        throw new Error(`La zona ${name} ya existe en la base de datos.`);
   
    return newZone;
    
}