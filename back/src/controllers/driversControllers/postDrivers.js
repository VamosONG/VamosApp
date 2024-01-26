const { Driver } = require('../../dataBase');

const postDriver = async ( name, surname, email, birthday, dni, phone, driverImg, airports, carType, carModel, driverLicense, carImg, carPatent, carSoat, circulationPermit, capacityPassengers ) => {
    try {
        const newDriver = await Driver.create({
            name, 
            surname, 
            email, 
            birthday, 
            dni, 
            phone, 
            driverImg, 
            airports, 
            carType, 
            carModel, 
            driverLicense, 
            carImg, 
            carPatent, 
            carSoat, 
            circulationPermit, 
            capacityPassengers,
            driverState: true,
            inactive: false
        });

        return newDriver;
    } catch (error) {
        throw new Error(`Error al crear el conductor: ${error.message}`);
    }
};

module.exports = postDriver;