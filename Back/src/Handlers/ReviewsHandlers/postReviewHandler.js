const postReview = require('../../Controllers/reviewsControllers/postReview');

module.exports = async (req, res) => {
    const { user, chofer, stars, message } = req.body;
    try {
        const newRev = await postReview(user, chofer, stars, message);

        res.status(200).json(newRev);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}