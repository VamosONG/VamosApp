const postTrip = require('../tripsControllers/postTrip');
const {Trip} = require('../../dataBase');

const filterOffer = async ( userId, driverId, origin, destination, date, hour, quantityPassengers ) => {
    try {
        const price=getPrices(origin, destination, quantityPassengers);
console.log(userId, driverId, origin, destination, date, hour, quantityPassengers, price);
        const newReservation = await postTrip(userId, driverId, date, hour, origin, destination, quantityPassengers, price);
        //Se crea el objeto trip, con el precio estipulado por origen, destino y cant. pasajeros.

        await newReservation.update(
            {stateOfTrip: 'offer'}
        )

        return newReservation;
        /* const objeto={
            "id": "b572b9aa-b391-4162-bf19-282b2511bbe2",
            "userId": "a66bde7e-6716-4da0-b1b0-c84e3fb0298c",
            "driverId": null,
            "date": "2024-02-05T00:00:00.000Z",
            "hour": "11:00",
            "origin": "Disneylandia",
            "destination": "Miami",
            "quantityPassengers": 4,
            "price": "300",
            "stateOfTrip": "offer",
            "UserId": null,
            "DriverId": null
          } 
        return objeto*/
    } catch (error) {
        throw new Error(`Error al buscar coincidencias: ${error.message}`);
    }
};

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

module.exports = filterOffer;