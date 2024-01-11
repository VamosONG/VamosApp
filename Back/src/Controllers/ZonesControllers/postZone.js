const {zone}=require('../../Models/zone');

module.exports=async(name)=>{
    if(!name)
        throw new Error('No se recibieron datos para crear la nueva zona.');

    const existingZone=await zone.findOne({
        where:{place: name}
    })
    if(existingZone)
        throw new Error(`La zona ${name} ya existe en la base de datos.`);
    else{
        const [createdZone, created]=await zone.findOrCreate({
            where: {name}
        })

        return createdZone;
    }
}