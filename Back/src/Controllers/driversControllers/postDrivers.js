const { Driver } = require('../../dataBase');

const postDriver = async ( name, surname, car, phone, capacityPassengers, email, city ) => {
    try {
        const newDriver = await Driver.create({
            name,
            surname,
            car,
            phone,
            capacityPassengers,
            email,
            city,
        });

        return newDriver;
    } catch (error) {
        throw new Error(`Error al crear el conductor: ${error.message}`);
    }
};

module.exports = postDriver;