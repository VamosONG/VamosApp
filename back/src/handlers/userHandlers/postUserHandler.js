const postUser = require('../../controllers/usersControllers/postUser');

module.exports = async (req, res) => {

    try {
        const { name, surname, email, phone, dni } = req.body;

        if( !name || !email){
            throw new Error(`Error, no se recibieron los datos para crear el usuario ${error.message}`) 
        }
        const newUser = await postUser({name, surname, email, phone, dni});

        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(`Error ${error.message}`)
    }
}