const { User } = require('../dataBase')
const { Op } = require('sequelize');

const getUsers = async (req, res) => {

    try {
        const { name } = req.query;


        if (name) {

            const UserDBName = await User.findAll({
                where: {
                    [Op.or]:[
                        { forename: { [Op.iLike]: `%${name}%` } }, 
                        { surname: { [Op.iLike]: `%${name}%` } }
                         
                    ],include: [Trip, Review]
                  }              
                })


            const allUsers = UserDBName.map(user => ({
                id: user.id,
                forename: user.forename,
                surname: user.surname,
                dni: user.dni,
                email: user.email,
                trips: user.trips,
                phone: user.phone,
                activeReservations: user.activeReservations,
                reviews: user.reviews,
            }))


            if (allUsers.length === 0) return res.status(404).send({ Error: 'User not found' })


            return res.status(200).json(allUsers);

        }


        else {
            const allUserDB = await User.findAll({ include: [Trip, Review] })
            const allUserDBMap = allUserDB.map(user => ({
                id: user.id,
                forename: user.forename,
                surname: user.surname,
                dni: user.dni,
                email: user.email,
                trips: user.trips,
                phone: user.phone,
                activeReservations: user.activeReservations,
                reviews: user.reviews,
            }))


            res.status(200).json(allUserDBMap)
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getUsers }