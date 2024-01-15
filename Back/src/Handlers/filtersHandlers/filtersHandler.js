const postTrip = require('../../Controllers/tripsControllers/postTrip');

module.exports=async(req,res)=>{

    const { userId, date, hour, origin, destination, quantityPassengers }=req.body;
    
    try {
        const driverId=null;
        const price = getPrices(origin, destination, quantityPassengers);
        const reserva=await postTrip(userId, driverId, date, hour, origin, destination, quantityPassengers,price);
        //Crea una oferta de trip con ese filtro.

        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getPrices=(origin, destination, quantityPassengers)=>{

    //Ejemplo. Cuando tengamos los datos se solicitaran a bd.

    /* //Desde airp1 a zon1 o visceversa, en auto valor 100, en van valor 200.
    if(((origin==='airp1')&&(destination==='zon1')) || ((origin==='zon1')&&(destination==='airp1'))){
        if(quantityPassengers<=4 && quantityPassengers>0)
            return 100;
        else{
            if(quantityPassengers>4 && quantityPassengers<=15)
            return 200;
        }
    }
    
    //Desde airp2 a zon1 o visceversa, en auto valor 150, en van valor 300.
    if(((origin==='airp2')&&(destination==='zon1')) || ((origin==='zon1')&&(destination==='airp2'))){
        if(passengers<=4 && passengers>0)
            return 150;
        else{
            if(passengers>4 && passengers<=15)
            return 350;
        }
    } */
    return '100.00'
}