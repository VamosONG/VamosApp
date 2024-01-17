const updateUser = require('../../controllers/usersControllers/updateUsers');

module.exports = async (req, res) => {
    const { id, name, surname, email, phone, dni, trips, activeReservations, reviews, admin } = req.body;
    try {
        const updUser = await updateUser(id, { name, surname, email, phone, dni, trips, activeReservations, reviews, admin });

        res.status(200).json(updUser);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}