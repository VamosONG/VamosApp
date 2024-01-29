const deleteLogicUserController = require("../../controllers/usersControllers/deleteLogicUserController");

const deleteLogicUserHandler = async (req, res) => {
    const {id}  = req.params;
    try {
        const response = await deleteLogicUserController(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json(`Error al inactivar usuario. ${error.message}`);
    }
}
module.exports = deleteLogicUserHandler