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
        return res.status(500).send({error:error.message})
    }
}

module.exports = postUser;
