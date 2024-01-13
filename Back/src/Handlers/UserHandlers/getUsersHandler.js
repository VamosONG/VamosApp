const getUsers = require('../../Controllers/usersControllers/getUsers');

module.exports = async (req, res) => {
    try {
        const { name, surname, dni, email } = req.query;

        const users = await getUsers({ name, surname, dni, email });

        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};