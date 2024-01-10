const { User } = require('../dataBase')

const getUsers = async (req, res) => {

    try {
        const { name } = req.query;


        if (name) {

            const UserDBName = await User.findAll({ where: { name: { [Op.iLike]: `%${name}%` } }, include: [Trip, Review] })


            const allUsers = UserDBName.map(user => ({
                id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                password: user.vehiculo,
                trip: user.trip,

            }))


            if (allUsers.length === 0) return res.status(404).send({ Error: 'User not found' })


            return res.status(200).json(allUsers);

        }


        else {
            const allUserDB = await User.findAll({ include: [Trip, Review] })
            const allUserDBMap = allUserDB.map(user => ({
                id: user.id,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email,
                password: user.vehiculo,
                viajes: user.viajes,
            }))


            res.status(200).json(allUserDBMap)
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getUsers }