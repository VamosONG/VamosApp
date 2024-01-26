const { User } = require("../../dataBase")
const sendMailHandler = require('../../utils/mailing/sendMailHandler');

const postUser = async ({ name, surname, email, phone, dni/* , driverId */ }) => {
    try {
     
        const [newUser, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                name,
                surname,
                email,
                phone,
                dni/* , 
                driverId */
            }
          });
        
          
        if(created){      
            const welcomeEmail = await sendMailHandler({
                id: newUser.id,
                name,
                surname,
                email,
                phone,
                dni, 
                option: "signIn"
            });
        }
                    
        return newUser.dataValues;

    } catch (error) {
        throw new Error(`Error al crear el usuario (controller): ${error.message}`)
    }
}

module.exports = postUser;
