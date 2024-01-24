const { Trip, User, Driver } = require('../../dataBase');

const postTrip = async (userId, driverId, date, hour, origin, destination, quantityPassengers, price ) => {
    console.log(userId, driverId, date, hour, origin, destination, quantityPassengers, price);
    try {
        const [newTrip, created] = await Trip.findOrCreate({
            where: {
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
                price
                /* idMP */
            }
        });

        if (!created)
            throw new Error(`Ya existe un viaje para el usuario, mismo día, hora, origen y destino en la base de datos.`);

        const user = await User.findByPk(userId);
        const driver = await Driver.findByPk(driverId);

        if (user) {
            await user.addTrip(newTrip);
            if (driver) 
                await driver.addTrip(newTrip);
        } else {
            throw new Error('No se encontró el usuario.');
        }

        return newTrip;
    } catch (error) {
        throw new Error(`Error al crear viaje: ${error.message}`);
    }
};

module.exports = postTrip;