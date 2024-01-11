const deleteTrip = require('../../Controllers/tripsControllers/deleteTrip')

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedT = await deleteTrip(id);

        if (deletedT)
            res.status(200).json(deletedT);
        else
            res.status(404).send(`No existe viaje con ID ${id}.`);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}