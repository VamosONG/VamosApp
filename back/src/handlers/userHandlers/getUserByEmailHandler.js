const getUserByEmail = require('../../controllers/usersControllers/getUserByEmail');

module.exports = async (req, res) => {
    try {
        const { email } = req.query;
        const usuario = await getUserByEmail(email);

        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json(`Error al obtener usuario: ${error.message }`);
    }
}