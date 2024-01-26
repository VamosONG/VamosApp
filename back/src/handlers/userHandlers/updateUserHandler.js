const updateUser = require('../../controllers/usersControllers/updateUsers');

module.exports = async (req, res) => {
    const { id,} = req.params;
    const {newData} = req.body;
    try {
        const updUser = await updateUser(id, newData);

        res.status(200).json(updUser);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}