const { Review } = require("../../dataBase");

const postReview = async ({ user, chofer, stars, message }) => {
    try {
        const reviewPost = await Review.create({
            user,
            chofer,
            stars,
            message
        });

        return reviewPost;

    } catch (error) {
        throw new Error({ error: error.message })
    }
}

module.exports = {
    postReview
}