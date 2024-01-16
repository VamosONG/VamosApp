const postTrip = require('../tripsControllers/postTrip');

const filterOffer = async ( userId, driverId, origin, destination, date, hour, quantityPassengers ) => {
    try {
        const fecha =new Date(date);
        const price=getPrices(origin, destination, quantityPassengers, fecha);
        if(price===0)
            throw new Error(`No se encontraron viajes disponibles desde ${origin} a ${destination} para ${quantityPassengers} pasajeros.`)

        const newReservation = await postTrip(userId, driverId, date, hour, origin, destination, quantityPassengers, price);
        //Se crea el objeto trip, con el precio estipulado por origen, destino y cant. pasajeros.

        await newReservation.update(
            {stateOfTrip: 'offer'}
        )

        return newReservation;        
    } catch (error) {
        throw new Error(`Error al buscar coincidencias: ${error.message}`);
    }
};

const getPrices=(origin, destination, quantityPassengers, fecha)=>{

    const orig = origin.toLowerCase();
    const dest = destination.toLowerCase();
    let toRet = 0;

    if(((orig==='tumbes')&&(dest==='decameron punta sal')) || ((origin==='decameron punta sal')&&(destination==='tumbes'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet = 200;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet = 240;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                toRet = 280;
                break;  
            default:0;
        }
    }
    
    if(((orig==='tumbes')&&(dest==='zorritos')) || ((orig==='zorritos')&&(dest==='tumbes'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet  = 100;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet  = 220;
                break;  
            default:0;
        }
    }

    if(((orig==='tumbes')&&(dest==='mancora')) || ((orig==='mancora')&&(dest==='tumbes'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet  = 240;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet  = 300;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                toRet  = 340;
                break;  
            default:0;
        }
    }

    if(((orig==='talara')&&(dest==='mancora')) || ((orig==='mancora')&&(dest==='talara'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet  = 169;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet  = 240;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                toRet  = 289;
                break;
            case (quantityPassengers>10 && quantityPassengers<=15): 
                toRet  = 380;
                break;  
            default:0;
        }
    }

    if(((orig==='talara')&&(dest==='decameron')) || ((orig==='decameron')&&(dest==='talara'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                toRet  = 240;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                toRet  = 300;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                toRet  = 360;
                break;
            default:0;
        }
    }

    if((fecha.getDate()===28 && fecha.getMonth()+1===7) || 
        (fecha.getDate()===29 && fecha.getMonth()+1===7) || 
            (fecha.getDate()===1 && fecha.getMonth()+1===12) || 
                (fecha.getDate()===31 && fecha.getMonth()+1===12))
        toRet*=1.5;

    return toRet;
}

module.exports = filterOffer;