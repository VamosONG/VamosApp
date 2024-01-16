const postTrip = require('../tripsControllers/postTrip');

const filterOffer = async ( userId, driverId, origin, destination, date, hour, quantityPassengers ) => {
    try {
        const price=getPrices(origin, destination, quantityPassengers);
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

const getPrices=(origin, destination, quantityPassengers)=>{

    const orig = origin.toLowerCase();
    const dest = destination.toLowerCase();

    if(((orig==='tumbes')&&(dest==='decameron punta sal')) || ((origin==='decameron punta sal')&&(destination==='tumbes'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                return 200;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                return 240;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                return 280;
                break;  
            default:0;
        }
    }
    
    if(((orig==='tumbes')&&(dest==='zorritos')) || ((orig==='zorritos')&&(dest==='tumbes'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                return 100;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                return 220;
                break;  
            default:0;
        }
    }

    if(((orig==='tumbes')&&(dest==='mancora')) || ((orig==='mancora')&&(dest==='tumbes'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                return 240;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                return 300;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                return 340;
                break;  
            default:0;
        }
    }

    if(((orig==='talara')&&(dest==='mancora')) || ((orig==='mancora')&&(dest==='talara'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                return 169;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                return 240;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                return 289;
                break;
            case (quantityPassengers>10 && quantityPassengers<=15): 
                return 380;
                break;  
            default:0;
        }
    }

    if(((orig==='talara')&&(dest==='decameron')) || ((orig==='decameron')&&(dest==='talara'))){
        switch(quantityPassengers){
            case (quantityPassengers>0 && quantityPassengers<=4): 
                return 240;
                break;
            case (quantityPassengers>4 && quantityPassengers<=6): 
                return 300;
                break;
            case (quantityPassengers>6 && quantityPassengers<=10): 
                return 360;
                break;
            default:0;
        }
    }
}

module.exports = filterOffer;