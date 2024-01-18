
const { User } = require("../../dataBase")


const postUser = async ({ name, email, phone, dni }) => {
    try {
        const newUser = await User.create({
            name,
            surname,
            email,
            phone,
            dni,
        });

        return newUser;
    } catch (error) {
        throw new Error(`Error al crear el usuario ${error.message}`)
    }
}

module.exports = postUser;
