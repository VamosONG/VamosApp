const { User, Trip } = require("../../dataBase")


const postUser = async ({ name, surname, email, phone, dni }) => {
    try {
        let newUser = await User.create({
            name,
            surname,
            email,
            phone,
            dni,
        });

        newUser = User.findOne({
            where:{email: email},
            include: [{
                model: Trip,
                attributes: ['id', 'date', 'hour', 'origin', 'destination', 'quantityPassengers', 'price', 'stateOfTrip', 'driverId'],
            }]
        });

        return newUser;

    } catch (error) {
        throw new Error(`Error al crear el usuario ${error.message}`)
    }
}

module.exports = postUser;
