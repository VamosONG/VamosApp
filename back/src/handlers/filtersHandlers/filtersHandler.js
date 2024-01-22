const postTrip = require('../../controllers/tripsControllers/postTrip');
const getPrices = require('../../controllers/pricesControllers/getPrices');

module.exports=async(req,res)=>{

    const { userId, date, hour, origin, destination, quantityPassengers }=req.body;

    try {
        if(!userId || !date || !hour || !origin || !destination || !quantityPassengers)
            throw new Error(`Error, no se recibieron los datos necesarios para crear la oferta.`)
        
        const driverId=null;
        const fecha =new Date(date);
        const price=await calculatePrices(origin, destination, quantityPassengers, fecha);
        if(price===0)
            throw new Error(`No se encontraron viajes disponibles desde ${origin} a ${destination} para ${quantityPassengers} pasajeros.`)

        const reserva=await postTrip(userId, driverId, date, hour, origin, destination, quantityPassengers,price);
        //Crea una oferta de trip con ese filtro.

        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const calculatePrices=async(origin, destination, quantityPassengers, fecha)=>{

try{
    let airport=''
    let zone=''
    if(origin.includes("AEROPUERTO")){
        airport=origin;
        zone=destination;
    }else{
        airport=destination;
        zone=origin;
    }
    const esFeriado = (
        (fecha.getDate() === 27 && fecha.getMonth() === 6) || // 28 de Julio
        (fecha.getDate() === 28 && fecha.getMonth() === 6) || // 29 de Julio
        (fecha.getDate() === 30 && fecha.getMonth() === 11) || // 31 de Diciembre
        (fecha.getDate() === 31 && fecha.getMonth() === 11) // Asumimos 1 de Enero
    );

    let prices = await getPrices(airport, zone);

    const ordenados= await prices?.sort((a,b)=>a.quantityPassengers - b.quantityPassengers);
    let cost = parseFloat(await ordenados.find(opcion => opcion.quantityPassengers>=quantityPassengers).value);

    if (esFeriado)
        cost*=1.5;

        return cost;
    }catch (error) {
        throw new Error(`Error al obtener costo de viaje: ${error.message}`);
    }
}