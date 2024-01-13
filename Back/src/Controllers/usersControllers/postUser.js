const { User } = require("../../dataBase")


const postUser = async ({ name, surname, email, phone, dni }) => {
    try {
        const newUser = await User.create({
            name,
            surname,
            email,
            phone,
            dni
        });

        return newUser;
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = postUser;
