const getPrices = require('../../controllers/pricesControllers/getPrices');

module.exports=async(req,res)=>{

    const { date, hour, origin, destination, quantityPassengers }=req.body;

    try {
        if(!date || !hour || !origin || !destination || !quantityPassengers)
            throw new Error(`Error, no se recibieron los datos necesarios para crear la oferta.`)
        
        const fecha =new Date(date);
        const price=await calculatePrices(origin, destination, quantityPassengers, fecha);
        if(price===0 || !price)
            throw new Error(`No se encontraron viajes disponibles desde ${origin} a ${destination} para ${quantityPassengers} pasajeros.`)

         //Crea una oferta de trip con ese filtro.
        const offer={
            date, 
            hour, 
            origin, 
            destination, 
            quantityPassengers,
            price
        }

        res.status(200).json(offer);
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
    let cost = 0;
    if (!prices){
        throw new Error('No se encontraron precios para el aeropuerto y zona indicados.');
    }
    const ordenados= await prices?.sort((a,b)=>a.quantityPassengers - b.quantityPassengers);
    cost = await ordenados?.find(opcion => opcion.quantityPassengers>=quantityPassengers);
    if(cost)
        cost=cost?.value;

    if (esFeriado)
        cost*=1.5;

        return cost;
    }catch (error) {
        throw new Error(`Error al obtener costo de viaje: ${error.message}`);
    }
}