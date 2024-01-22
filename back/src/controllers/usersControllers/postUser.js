const { User } = require("../../dataBase")


const postUser = async ({ name, surname, email, phone, dni }) => {
    try {
    
        const [newUser, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                name,
                surname,
                phone,
                dni,
            }
          });
        
        if(!created)
          throw new Error(`Error al crear usuario, el email ya esta registrado.`)

        return newUser;

    } catch (error) {
        throw new Error(`Error al crear el usuario ${error.message}`)
    }
}

module.exports = postUser;
