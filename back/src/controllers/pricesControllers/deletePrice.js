const {Price}=require('../../dataBase');

const deletePrice = async(airport,zone, quantityPassengers)=>{
    if(!airport || !zone || !quantityPassengers)
        throw new Error('No se recibió toda la informacion para eliminar el precio.');

    const delPrice=await Price.findOne({
        where: {
            airport:airport,
            zone: zone,
            quantityPassengers: quantityPassengers
        }
    });

    if(!delPrice)
        throw new Error(`No se encontraron precios para eliminar que coincidan con la informacion enviada.`);
    else{       
        await delPrice.destroy();
        
        return delPrice;
    }
}

module.exports = deletePrice;