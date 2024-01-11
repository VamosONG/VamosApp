const {zone}=require('../../Models/zone');

module.exports=async(idZone)=>{
    if(!idZone)
        throw new Error('No se recibió el id para eliminar la zona.');

    const existingZone=await zone.findOne({
        where:{id: idZone}
    })

    if(!existingZone)
        throw new Error(`La zona con id ${idZone} no existe en la base de datos.`);
    else{
        await zone.destroy({
            id: idZone, cascade: true
        })
        
        return existingZone;
    }
}
