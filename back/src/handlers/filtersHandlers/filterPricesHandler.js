const getPrices = require('../../controllers/pricesControllers/getPrices');

module.exports = async (req, res) => {
    try {
        //
        const { searchInput, order } = req.body;

        let filteredPrices = await getPrices();
        if (searchInput) {
            //Filtra coincidencias de busqueda con zona y aeropuerto.
            filteredPrices = await filteredPrices?.filter((precio => precio.airport.toLowerCase().includes(searchInput.toLowerCase())
            || precio.zone.toLowerCase().includes(searchInput.toLowerCase())));
        }

        if (order) {
            if (order.toLowerCase() === "menor precio") {
                filteredPrices.sort((a, b) => Number(a.value) - Number(b.value));
            } if (order.toLowerCase() === "mayor precio") {
                filteredPrices.sort((a, b) => b.value - a.value);
            }
          }

        res.status(200).json(filteredPrices); 
    } catch (error) {
        res.status(400).json(`Error al obtener filtrado de viajes: ${error.message}`);
    }
}