const {Price}=require('../../dataBase');

module.exports=async(airport, zone, quantityPassengers, value)=>{
    if(!airport)
        throw new Error('No se recibió aeropuerto.');
    if(!zone)
        throw new Error('No se recibió zona.');
    if(!quantityPassengers)
        throw new Error('No se recibió la cantidad de pasajeros.');

    const existingPrice=await Price.findOne({ 
        where: { 
            airport: airport ,
            zone: zone,
            quantityPassengers: quantityPassengers
        }});
        
    if(!existingPrice)
        throw new Error(`No existe zona con el id ${id} en la base de datos.`);
    else{
        await existingPrice.update({
            value: value,           
        })
        await existingPrice.reload();
    }

    return existingPrice;
}
