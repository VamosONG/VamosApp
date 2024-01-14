const { User, Trip, Review } = require('../../dataBase');
const { Op } = require('sequelize')

const getUsers = async ({ name, surname, dni, email }) => {
    try {
        const whereClause = {};

        if (name || surname) {
            whereClause[Op.or] = [
                { name: { [Op.iLike]: `%${name}%` } },
                { surname: { [Op.iLike]: `%${surname}%` } },
            ];
        }

        if (dni) {
            whereClause.dni = { [Op.iLike]: `%${dni}%` };
        }

        if (email) {
            whereClause.email = { [Op.iLike]: `%${email}%` };
        }

        const users = await User.findAll({
            where: whereClause,
            include: [{
                model: Review,
                attributes: ['id', 'driverId', 'date', 'qualification', 'comments'],
            }]
        });           

        if (users.length === 0) {
            throw new Error('Usuarios no encontrados');
        }

        return users;

    } catch (error) {
        throw Error(`Error al obtener usuarios: ${error.message}`); 
    }
};

module.exports = getUsers;