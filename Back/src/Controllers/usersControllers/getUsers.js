const { User, Trip, Review, Op } = require('../../dataBase');

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
            include: [Trip, Review],
        });

        if (users.length === 0) {
            throw new Error('Usuarios no encontrados');
        }

        return users.map(user => ({
            id: user.id,
            forename: user.forename,
            surname: user.surname,
            dni: user.dni,
            email: user.email,
            trips: user.trips,
            phone: user.phone,
            activeReservations: user.activeReservations,
            reviews: user.reviews,
        }));
    } catch (error) {
        throw error;
    }
};

module.exports = getUsers;