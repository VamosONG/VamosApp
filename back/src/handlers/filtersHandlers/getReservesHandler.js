const getReserves = require('../../controllers/filtersControllers/getReserves');

module.exports = async (req, res) => {
    try {
        
        const allRes = await getReserves();

        res.status(200).json(allRes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}