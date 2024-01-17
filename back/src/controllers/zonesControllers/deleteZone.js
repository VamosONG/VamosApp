const {Zone}=require('../../dataBase');

const deleteZone = async(idZone)=>{
console.log(idZone);
    if(!idZone)
        throw new Error('No se recibió el id para eliminar la zona.');

    const existingZone=await Zone.findByPk(idZone);

    if(!existingZone)
        throw new Error(`La zona con id ${idZone} no existe en la base de datos.`);
    else{
        await existingZone.destroy();
        
        return existingZone;
    }
}

module.exports = deleteZone;