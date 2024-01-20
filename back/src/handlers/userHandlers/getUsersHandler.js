const getUsers = require('../../controllers/usersControllers/getUsers');

module.exports = async (req, res) => {
    try {
        const { name, surname, dni } = req.query;

        const users = await getUsers();

        if(name){
            const byName = users?.filter(usr=>usr.name.toLowerCase().includes(name.toLowerCase()));
            return byName;
        }
        if(surname){
            const bySurname = users?.filter(usr=>usr.surname.toLowerCase().includes(surname.toLowerCase()));
            return bySurname;
        }
        if(dni){
            const byDni = users?.filter(usr=>usr.dni===dni);
            return byDni;
        }

        res.status(200).json(users);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};