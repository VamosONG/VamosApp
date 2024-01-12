const {zone}=require('../../Models/zone');

module.exports=async(id,name)=>{
    if(!id)
        throw new Error('No se recibió id para encontrar la zona.');
    if(!name)
        throw new Error('No se recibieron datos para modificar la zona.');

    const existingZone=await zone.findOne({
        where:{id: id}
    })
    if(!existingZone)
        throw new Error(`No existe zona con el id ${id} en la base de datos.`);
    else{
        await zone.update({
            fields:{
                place:name,
            },
            where: {
                id: id
            }
        })

        await existingZone.reload();
        
        return existingZone;
    }
}