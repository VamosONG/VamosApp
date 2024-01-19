const getUserById = require('../../controllers/usersControllers/getUserById');

module.exports = async (req, res) => {
    try {
        const { id } = req.body;
        const usuario = await getUserById(id);

        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json(`Error al obtener usuario: ${error.message }`);
    }
}