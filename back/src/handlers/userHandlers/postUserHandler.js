const postUser = require('../../Controllers/usersControllers/postUser');

module.exports = async (req, res) => {
  
    try {
        const { name, surname, email, phone, dni } = req.body;

        if( !name || !surname || !email || !phone || !dni){
            return res.status(400).send({error:error.message}) //manejar mejor los errores, no se entiende el mensaje
        }
        const newUser = await postUser({name, surname, email, phone, dni});

        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}