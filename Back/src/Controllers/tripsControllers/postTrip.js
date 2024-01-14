const { Trip, User, Driver } = require('../../dataBase');

const postTrip = async ( userId, driverId, date, hour, origin, destination, quantityPassengers, price ) => {
    try {
console.log(userId, driverId, date, hour, origin, destination, quantityPassengers, price);
        const [newTrip, created]= await Trip.findOrCreate({
            where:{
                userId: userId,
                driverId: driverId,
                date: date,
                hour: hour,
                origin: origin,
                destination: destination,
                quantityPassengers: quantityPassengers
            }, 
                defaults: {
                userId, 
                driverId,
                date,
                hour,
                origin,
                destination,
                quantityPassengers,
                price,
            } 
        });

        if(!created)
            throw new Error(`Ya existe un viaje para el usuario, mismo dia, hora, origen y destino en la base de datos.`);
        
        const user = await User.findByPk(userId);
        //const driver = await Driver.findByPk(driverId);

        if (user) {
            await user.addReview(newTrip);
            //await driver.addReview(newTrip);
        } else {
            throw new Error('No se encontró el usuario.');
        }

        return newTrip;
    } catch (error) {
        throw Error(`Error al crear viaje: ${error.message}`);
    }
};

module.exports = postTrip;