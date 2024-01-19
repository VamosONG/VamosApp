const mailing = require('./mailing');
const getUserById = require('../../controllers/usersControllers/getUserById');
const {getTripById} = require('../../controllers/tripsControllers/getTripById');
const getDriverById = require('../../controllers/driversControllers/getDriverById');


module.exports=async(req,res)=>{
    const {userId, tripId, option}=req.body;

    try {
        const usuario = await getUserById(userId);

        if(!usuario)
            throw new Error(`El usuario con id ${userId} no existe en base de datos.`);
        
        const name=usuario.name;
        const email="ezequielantoine@gmail.com"; //usuario.email;
        let chofer=null;
        let trip=null;

        if(option==="signIn" || option==="reserve" || option==="assignDriver"){
            trip = await getTripById(tripId);
        }else
            if(option==="assignDriver")
                chofer = await getDriverById(trip.driverId);

        let preSubject="";
        let message="";

        
        switch(option){
            case("signIn"):
                preSubject=`¡Hola ${name}! Bienvenida/o a VAMOS!!`;
                message=`Te damos la bienvenida a VAMOS!!
                `; //Ver HTML
                break;
            case("reserve"):
                preSubject=`VAMOS!! ${name} su reserva se ha registrado.`,
                message=`Su reserva se ha registrado correctamente con id: ${tripId}, 
                        con fecha ${trip.date} a las ${trip.hour}hs, desde ${trip.origin} hasta ${trip.destination}. 
                        A la brevedad se le informará su chofer asignado.
                        `
                break;
            case("assignDriver"):
                preSubject=`VAMOS!! ${name}, se ha asignado un chofer para su viaje.`,
                message=`Su chofer ha sido asignado.
                        Nombre: ${chofer.name} ${chofer.surname}.
                        Telefono: ${chofer.phone}.
                        Vehiculo: ${chofer.carType}.
                        Patente: ${chofer.carPatent}.
                        `            
                break;
            case("update"):
                preSubject=`VAMOS!! ${name}, se ha registrado una modificacion en su viaje ${trip.origin}-${trip.destination}.`,
                message=`Su reserva con id ${tripId} se ha modificado:
                        Fecha: ${trip.date}.
                        Hora: ${trip.hour}hs.
                        Desde: ${trip.origin} hasta ${trip.destination}.
                        
                        Chofer asignado:
                        Nombre: ${chofer.name} ${chofer.surname}.
                        Telefono: ${chofer.phone}.
                        Vehiculo: ${chofer.carType}.
                        Patente: ${chofer.carPatent}.
                        `
                break;
            default:{
                name:"";
                email:"";
                preSubject:"";
                message:"";
            }
        }

        const resultMail=await mailing(name, email, preSubject, message,res);
    
        if (resultMail)
            res.status(200).send('Email enviado correctamente!')
    } catch (error) {
        res.status(400).json(`Error al enviar correo: ${error.message}`)
    }
}