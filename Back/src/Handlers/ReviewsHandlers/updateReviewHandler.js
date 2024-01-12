const updateReview = require('../../Controllers/reviewsControllers/updateReview');

module.exports = async (req, res) => {
    try {
        const { id, chofer, stars, message } = req.body; 
        // saque user porque con el id es suficiente
        if (!stars) {
            throw new Error ({ error: 'La puntuación debe ser entre 1 y 5.' });
        }
        if(!chofer){
            throw new Error ({error: "Debe seleccionar un chofer"})
        }
        if(!message){
            throw new Error({error: "Debe escribir una reseña"})
        }

        const updRev = await updateReview(id, { chofer, stars, message });

        if (updRev) {
            res.status(200).json(updRev);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};