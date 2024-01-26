const deletePrice = require('../../controllers/pricesControllers/deletePrice');

module.exports = async(req, res) => {
    const {airport,zone, quantityPassengers} = req.body;
    try{
        const delPrice=await deletePrice(airport,zone, quantityPassengers);
 
        if(delPrice)
            res.status(200).json(delPrice);
        else
            res.status(404).send(`No existe en coincidencias de precios para ${airport} - ${zone} - ${quantityPassengers} pasajeros.`);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}