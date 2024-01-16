const postTrip = require('../../Controllers/tripsControllers/postTrip');

module.exports=async(req,res)=>{

    const { userId, date, hour, origin, destination, quantityPassengers }=req.body;

    try {
        const driverId=null;
        const fecha =new Date(date);
        const price=getPrices(origin, destination, quantityPassengers, fecha);
        if(price===0)
            throw new Error(`No se encontraron viajes disponibles desde ${origin} a ${destination} para ${quantityPassengers} pasajeros.`)

        const reserva=await postTrip(userId, driverId, date, hour, origin, destination, quantityPassengers,price);
        //Crea una oferta de trip con ese filtro.

        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getPrices=(origin, destination, quantityPassengers, fecha)=>{

    const orig = origin.toLowerCase();
    const dest = destination.toLowerCase();
    let toRet = 0;

    if(((orig==='aeropuerto tumbes')&&(dest==='decameron punta sal')) || ((orig==='decameron punta sal')&&(dest==='aeropuerto tumbes'))){
        switch(true){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet = 200;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet = 240;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                toRet = 280;
                break;  
            default:toRet = 0;
        }
    }
    
    if(((orig==='aeropuerto tumbes')&&(dest==='zorritos')) || ((orig==='zorritos')&&(dest==='aeropuerto tumbes'))){
        switch(true){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet = 100;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet = 220;
                break;  
            default:toRet = 0;
        }
    }

    if(((orig==='aeropuerto tumbes')&&(dest==='mancora')) || ((orig==='mancora')&&(dest==='aeropuerto tumbes'))){
        switch(true){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet = 240;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet = 300;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                toRet = 340;
                break;  
            default:toRet = 0;
        }
    }

    if(((orig==='aeropuerto talara')&&(dest==='mancora')) || ((orig==='mancora')&&(dest==='aeropuerto talara'))){
        switch(true){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet = 169;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet = 240;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                toRet = 289;
                break;
            case (quantityPassengers>10 && quantityPassengers<=15): 
                toRet = 380;
                break;  
            default:toRet = 0;
        }
    }

    if(((orig==='aeropuerto talara')&&(dest==='decameron')) || ((orig==='decameron')&&(dest==='aeropuerto talara'))){
        switch(true){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet = 240;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet = 300;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                toRet = 360;
                break;
            default:toRet = 0;
        }
    }
    
    const esFeriado = (
        (fecha.getDate() === 27 && fecha.getMonth() === 6) || // 28 de Julio
        (fecha.getDate() === 28 && fecha.getMonth() === 6) || // 29 de Julio
        (fecha.getDate() === 30 && fecha.getMonth() === 11) || // 31 de Diciembre
        (fecha.getDate() === 31 && fecha.getMonth() === 11) // Asumimos 1 de Enero
    );

    if (esFeriado)
        toRet*=1.5;

    return toRet;
}