const { Trip } = require('../dataBase')

const getTrips = async (req, res) => {

    try {
            const trips= await Trip.findAll()

            const allTrips = trips.map(tripa => ({
                id: tripa.id,
                reservaID: tripa.reservaID,
                date: tripa.date,
                hour: tripa.hour,
                origin: tripa.origin,
                destination: tripa.destination,
                quantityPassengers: tripa.quantity,
                reviews: tripa.reviews,
                price: tripa.price,
                stateOfTrip: tripa.stateOfTrip
            }))

            if (allTrips.length === 0) return res.status(404).send({ Error: 'No trips' })


            return res.status(200).json(allTrips);
             

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getTrips }