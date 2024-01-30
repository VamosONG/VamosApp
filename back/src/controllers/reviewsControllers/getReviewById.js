const { Review } = require('../../dataBase'); 


module.exports  = async (userId) => {
    
    try {
        const review = await Review.findAll({where: {userId:userId}});


        if (!review) {
            throw new Error(`Error, no existe review asociada al id ${id} en BD.`)
        }
        console.log('getReview',review)
        return review;
    } catch (error) {
        throw new Error(`Error al obtener review: ${error.message}`)
    }
};
